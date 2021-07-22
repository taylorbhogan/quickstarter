from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired, EqualTo
from app.models import User


def user_email_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email has already been taken.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email(
        message='Please provide a valid email.', check_deliverability=True), user_email_exists])
    password = StringField('password', validators=[InputRequired(), EqualTo(
        'repeat_password', message='Password confirmation doesn\'t match Password')])
    repeat_password = StringField('repeatPassword')

    # EqualTo("confirm_password", message="password must match confirm passord")
    #confirm_password = StringField('confirm_password', validators=[])
