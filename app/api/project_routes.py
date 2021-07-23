from flask import Blueprint, jsonify, request, redirect
# from flask.helpers import url_for
from flask_login import login_required, current_user
from app.forms import CreateProjectForm, UpdateProjectForm
from app.models import db, Project, Reward
from datetime import datetime


project_routes = Blueprint('projects', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@project_routes.route('')
# @login_required
def get_projects():
    """
    retrieves all projects from db
    """
    allProjects = Project.query.all()
    if allProjects:
        return {'projects': [project.to_dict() for project in allProjects]}
    else:
        return {'something went wrong in when getting projects from the database'}


@project_routes.route('/<int:id>')
def get_project(id):
    project = Project.query.get(id)
    if project:
        return project.to_dict()
    else:
        return {'something went wrong in when getting projects from the database'}

@project_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_project(id):
    """
    Destroys a project in the database
    """
    project = Project.query.get(id)
    db.session.delete(project)
    db.session.commit()
    # TODO: implement a better return statement here
    return {'message': 'spot has been deleted'}

# TODO: rename this route
@project_routes.route('/create', methods=['POST'])
@login_required
def create_project():
    """
    Creates a project in the database
    """
    form = CreateProjectForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    form['category'].data = request.json["project"]['category']
    form['subTitle'].data = request.json["project"]['subTitle']
    form['country'].data = request.json["project"]['country']

    if form.validate_on_submit():
        project = request.json['project']

        project = Project(
            user_id=project['userId'],
            # category_id=project['category'],
            category_id= form['category'].data,
            sub_title=form['subTitle'].data,
            country_id=form['country'].data
        )
        db.session.add(project)
        db.session.commit()

        id = project.id
        projectFromDb = Project.query.get(id)
        newProject = projectFromDb.to_dict()

        return {'newProject': newProject}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@project_routes.route('/<int:id>/edit', methods=['PATCH'])
@login_required
def update_project(id):
    """
    Updates a project in the database
    """
    form = UpdateProjectForm()
    print('**********', request.json)

    if (request.json['sub_category_id'] == 0):
        request.json['sub_category_id'] = None;

    form['csrf_token'].data = request.cookies['csrf_token']
    form['category'].data = request.json['category_id']
    form['sub_category_id'].data = request.json['sub_category_id']
    form['subTitle'].data = request.json['sub_title']
    form['country'].data = request.json['country_id']
    form['campaign_duration'].data = request.json['campaign_duration']
    form['funding_goal'].data = request.json['funding_goal']
    form['project_image_url'].data = request.json['project_image_url']
    form['title'].data = request.json['title']
    form['story'].data = request.json['story']

    # print('YOURE HITTING THIS NOW',form['campaign_duration'].data)

    if form.validate_on_submit():

        project = Project.query.get(id)
        # print('******** BEFORE!!!!!!!', project.to_dict())

        project.category_id = form['category'].data
        project.sub_category_id = form['sub_category_id'].data
        # project['sub_title'] = form['subTitle'].data DONT USE THIS, JUST HERE FOR MEMORY. COULD POSSIBLY DELETE
        project.sub_title = form['subTitle'].data
        project.country_id = form['country'].data
        project.campaign_duration = form['campaign_duration'].data
        project.funding_goal = form['funding_goal'].data
        project.project_image_url = form['project_image_url'].data
        project.title = form['title'].data
        project.story = form['story'].data
        project.is_live = request.json['is_live']
        # print('******** AFTER!!!!!!!!!!!!!!!!!!!!', project.to_dict())

        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
        # return {'hi': 'yay'}
        # project = request.json['project']

        # project = Project(
        #     user_id=project['userId'],
        #     # category_id=project['category'],
        #     category_id= form['category'].data,
        #     sub_title=form['subTitle'].data,
        #     country_id=form['country'].data
        # )

        # id = project.id
        # projectFromDb = Project.query.get(id)
        # newProject = projectFromDb.to_dict()

        # return {'newProject': newProject}


@project_routes.route('/<int:id>/rewards')
def get_project_rewards(id):
    rewards = Reward.query.filter(Reward.project_id == id).all()
    # print("******************", rewards)
    # print("******************",[reward.to_dict() for reward in rewards])

    toDictedRewards = [reward.to_dict() for reward in rewards]
    # print("******", rewards)

    #GET TODAYS DATE
    todaysDate = datetime.now().strftime("%Y-%m")

    #rewardsThatStartInTheFuture IS A LIST OF ONLY REWARDS STARTING IN THE FUTURE
    rewardsThatStartInTheFuture = [reward for reward in toDictedRewards if todaysDate < reward['start_date'].strftime("%Y-%m")]

    #expiredRewards IS A LIST OF ONLY REWARDS THAT ARE BEYOND THE END DATE - EXPIRED
    expiredRewards = [reward for reward in toDictedRewards if todaysDate >= reward['end_date'].strftime("%Y-%m")]

    #soldOutRewards THIS IS A LIST OF SOLD OUT REWARDS - QUANTITY is 0
    soldOutRewards = [reward for reward in toDictedRewards if reward['quantity'] == 0]

    #currentlyActiveRewards THIS IS A LIST OF REWARDS THAT ARE NOT SOLD OUT, NOT EXPIRED, AND CURRENTLY ACTIVE -- CURRENTLY ACTIVE REWARDS
    currentlyActiveRewards = [reward for reward in toDictedRewards if reward['quantity'] > 0 and todaysDate < reward['end_date'].strftime("%Y-%m") and todaysDate >= reward['start_date'].strftime("%Y-%m")]



    # print('***', len(currentlyActiveRewards))

    # expiredRewards = []


    # print("*********************************", todaysDate)

    # print("*********************************", [reward.to_dict() for reward in rewards])
    # rewardList = [reward.to_dict() for reward in rewards]
    # print('&&&&&&&', rewardList[0]['start_date'].strftime("%Y-%m"))

    # print('THIS IS THE DATE COMPARISON', todaysDate > rewardList[0]['start_date'].strftime("%Y-%m-%d"))


    return {
        "rewards" : [reward.to_dict() for reward in rewards],
        "expiredRewards": expiredRewards,
        'futureRewards': rewardsThatStartInTheFuture,
        'soldOutRewards': soldOutRewards,
        'activeRewards': currentlyActiveRewards
    }

@project_routes.route('/<int:id>/rewards', methods=['POST'])
def create_project_reward(id):
    # rewards = Reward.query.filter(Reward.project_id == id).all()
    print("******************", request.json)
    if (request.json["newReward"]["estimated_delivery"]):
        request.json["newReward"]["estimated_delivery"] = request.json["newReward"]["estimated_delivery"] + '-01'
    if (request.json["newReward"]["start_date"]):
        request.json["newReward"]["start_date"] = request.json["newReward"]["start_date"] + '-01'
    if(request.json["newReward"]["end_date"]):
        request.json["newReward"]["end_date"] = request.json["newReward"]["end_date"] + '-01'

    newReward = Reward(
        title = request.json["newReward"]["title"],
        price = request.json["newReward"]["price"],
        description = request.json["newReward"]["description"],
        estimated_delivery = request.json["newReward"]["estimated_delivery"],
        project_id = id,
        quantity = request.json["newReward"]["quantity"],
        start_date = request.json["newReward"]["start_date"],
        end_date = request.json["newReward"]["end_date"],
        # quantity = None,
        # start_date = None,
        # end_date = None,
    )
    db.session.add(newReward)
    db.session.commit()

    return newReward.to_dict()
