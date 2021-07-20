from flask import Blueprint, jsonify, request, redirect
# from flask.helpers import url_for
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


@project_routes.route('/')
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
    if form.validate_on_submit():
        project = request.json['project']
        project = Project(
            category_id=project['category_id'],
            sub_title=project['sub_title'],
            country_id=project['country_id']
        )

        db.session.add(project)
        db.session.commit()

        id = project.id
        projectFromDb = Project.query.get(id)
        newProject = projectFromDb.to_dict()

        return {'newProject': newProject}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
