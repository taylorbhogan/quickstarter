from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Project

class CreateProjectForm(FlaskForm):
    category = StringField('category')
    blurb = StringField('blurb')
    country = StringField('country')
