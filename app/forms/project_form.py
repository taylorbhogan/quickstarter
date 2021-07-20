from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Project

class CreateProjectForm(FlaskForm):
    category_id = StringField('category_id')
    sub_title = StringField('sub_title')
    country_id = StringField('country_id')
