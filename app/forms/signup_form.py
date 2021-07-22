from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired, EqualTo
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), InputRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), InputRequired(), Email(message='Please provide an valid email', check_deliverability=True), user_exists])
    password = StringField('password', validators=[DataRequired(), InputRequired()]) # EqualTo("confirm_password", message="password must match confirm passord")
    #confirm_password = StringField('confirm_password', validators=[])
