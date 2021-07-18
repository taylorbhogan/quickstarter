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


@project_routes.route('/create', methods=['POST'])
@login_required
def create_project():
    """
    Creates a project in the database
    """
    print('request.json',request.json)
    form = CreateProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project = request.json['project']
        project = Project(
            category=project['category'],
            blurb=project['blurb'],
            country=project['country']
        )
        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
