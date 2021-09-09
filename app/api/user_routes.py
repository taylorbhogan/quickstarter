from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms import UpdateUserForm
from app.models import db, User

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            # errorMessages.append(f'{field} : {error}')
            errorMessages.append(f'* {error}')
    return errorMessages

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
    Updates a user in the database
    """
    form = UpdateUserForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    form['user_image_url'].data = request.json['user_image_url']

    if form.validate_on_submit():
        user = User.query.get(id)
        user.user_image_url = form['user_image_url'].data
        print('-------------------------------user',user)
        print('-------------------------------user_image_url',user.user_image_url)
        db.session.add(user)
        db.session.commit()
        return user.to_dict()
    print('----------------form.errors',form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
