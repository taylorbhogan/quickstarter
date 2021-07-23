from flask import Blueprint, request
from app.models import db, Backing, Project
from app.forms import BackingForm

backing_routes = Blueprint('backings', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@backing_routes.route('', methods=['POST'])
def add_backing():
    """
    Adds a backing to the db
    """
    # data = request.json(backing)
    print('----------request.data------>',request.data)
    form = BackingForm()
    # Get the csrf_token from the request cookie and put it into the form manually so validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    form['user_id'].data = request.json['backing']['user_id']
    form['project_id'].data = request.json['backing']['project_id']
    form['reward_id'].data = request.json['backing']['reward_id']
    form['amount'].data = request.json['backing']['amount']

    # testIng = Backing.query.filter((Backing.reward_id == None)).all()
    print('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',request.json['backing']['reward_id'])

    # filteredBackings = Backing.query.filter((Backing.user_id == form['user_id'].data), (Backing.project_id == form['project_id'].data)).all()
    # if not request.json['backing']['reward_id']:
    #     filteredBackings = Backing.query.filter((Backing.user_id == form['user_id'].data), (Backing.project_id == form['project_id'].data), (Backing.reward_id == None)).all()
    #     print('************************************** BACK', filteredBackings)
    # print("HERE ARE THE THINGS", type(form['project_id'].data),type(form['user_id'].data) )
    # print(form['user_id'].data)

    if not request.json['backing']['reward_id']:
        filteredBackings = Backing.query.filter((Backing.user_id == form['user_id'].data), (Backing.project_id == form['project_id'].data), (Backing.reward_id == None)).all()
        print('************************************** BACK', filteredBackings)
    elif request.json['backing']['reward_id']:
        # filteredBackings = Backing.query.filter((Backing.user_id == form['user_id'].data), (Backing.project_id == form['project_id'].data), (Backing.reward_id == None)).all()
        filteredBackings = []



    if form.validate_on_submit():

        # currentProjectsBackings = Backing.query.filter(Backing.user_id == form['user_id'].data)
        # print("*******CURRENT PROJECT BACKINGS WHERE USER ID MATCHES", currentProjectsBackings)
        # if not filteredBackings:
        #     filteredBackings = []

        if(len(filteredBackings) > 0):
            # print("DID YOU HIT THIS?!?!?!?!?!?!??!?!?!")
            filteredBackings[0].amount += form['amount'].data
            db.session.add(filteredBackings[0])
            db.session.commit()
            proj_to_update = Project.query.get(form['project_id'].data)

            proj_to_update.current_funding += form['amount'].data
            db.session.add(proj_to_update)
            db.session.commit()

            return {"newBacking": filteredBackings[0].to_dict()}
        else:
            backing = Backing(
                user_id = form['user_id'].data,
                project_id = form['project_id'].data,
                reward_id = form['reward_id'].data,
                amount = form['amount'].data,
            )
            db.session.add(backing)
            db.session.commit()
            id = backing.id
            backingFromDb = Backing.query.get(id)
            newBacking = backingFromDb.to_dict()

            amountToAddToFunding = newBacking['amount']
            projectToUpdate = Project.query.get(newBacking['project_id'])
            projectToUpdate.current_funding += amountToAddToFunding
            db.session.add(projectToUpdate)
            db.session.commit()


            return {'newBacking': newBacking}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
