from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Project

class CreateProjectForm(FlaskForm):
    category = StringField('category')
    subTitle = StringField('subTitle')
    country = StringField('country')

class UpdateProjectForm(FlaskForm):
    category = StringField('category')
    subTitle = StringField('subTitle')
    country = StringField('country')
    campaign_duration = StringField('campaign_duration')
    funding_goal =StringField('funding_goal')
    project_image_url =StringField('project_image_url')
    title = StringField('title')
    sub_category_id = StringField('sub_category_id')
    story = StringField('story')
