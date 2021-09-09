from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import UpdateUserForm
from app.models import db, User
from app.helpers import validation_errors_to_error_messages

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    # users = User.query.all()
    # print(users)
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def update_user(id):
    """
    Updates a user in the database - currently only used to add a profile image
    """
    form = UpdateUserForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    form['user_image_url'].data = request.json['user_image_url']

    if form.validate_on_submit():
        user = User.query.get(id)
        user.user_image_url = form['user_image_url'].data

        db.session.add(user)
        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
