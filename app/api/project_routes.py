from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import CreateProjectForm
from app.models import db, Project

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


# @project_routes.route('/')
# @login_required
# def projects():
#     projects = Project.query.all()
#     return {'projects': [project.to_dict() for project in projects]}

@project_routes.route('/create', methods=['POST'])
def create_project():
    """
    Creates a project in the database
    """
    print('---------------api/projects---------------')
    form = CreateProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = Project(
            category='AAArt',
            blurb='BBBlurb',
            country='CCCountry'
        )
        # project = Project(
        #     category=form.data['category'],
        #     blurb=form.data['blurb'],
        #     country=form.data['country']
        # )
        # print(project)
        db.session.add(project)
        db.session.commit()
        # login_user(user)
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
