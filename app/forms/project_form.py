from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, InputRequired, Length, NumberRange
from app.models import Project


def campaign_duration_validator(form, field):
    campaign_duration = field.data
    if campaign_duration is None:
        campaign_duration = None
    elif campaign_duration > 60:
        raise ValidationError(
            'Campaign duration has to be within 60 days')
    elif campaign_duration <= 0:
        campaign_duration = None

def funding_goal_validator(form, field):
    funding_goal = field.data
    print("CURENTLY CHECKING^^^^^^^^^^^^^^^^^^^^^^^^^^^^", funding_goal)
    if funding_goal is None:
        return
    if funding_goal <= 0:
        # funding_goal = None
        raise ValidationError(
            'Funding goal must be greater than or equal to $1'
        )

def is_live_validator(form, field):
    is_live = field.data
    if is_live:
        raise ValidationError(
            'Sorry, you cannot edit your project if it is already live'
        )

# def test_validator(form, field):
#     if field.data is not None:
#         return NumberRange(
#             min=1, max=100000, message='Must be a number between 1 and 100000')

# def project_video_url(form, field):
#     #checking the video url character length is
#     video_url = field.data
#     project_video_url = Project.query.filter(Project.project_video_url == video_url).first()
#     if len(project_video_url) > 2048:
#         raise ValidationError('The video url provided had too many characters, please provide a suitable image url')


class CreateProjectForm(FlaskForm):
    category = StringField('category')
    subTitle = StringField('subTitle')
    country = StringField('country')


class UpdateProjectForm(FlaskForm):
    category = StringField('category', validators=[DataRequired()])
    subTitle = StringField('subTitle',  validators=[DataRequired(), Length(max=135, message='Subtitle must be under 135 characters')])
    country = StringField('country', validators=[DataRequired()])
    campaign_duration = StringField('campaign_duration', validators=[campaign_duration_validator])
    # campaign_duration = StringField('campaign_duration', validators=[Length(max=60, min =1, message='Campaign duration has to be within 60 days and greater than 0')])
    # funding_goal = StringField('funding_goal', validators=[NumberRange(min=1, message='Funding Goal must be greater than or equal to $1')])
    funding_goal = StringField('funding_goal', validators=[funding_goal_validator])
    project_image_url = StringField('project_image_url')
    title = StringField('title',validators=[Length(max=60, message='Title must be under 60 characters')])
    sub_category_id = StringField('sub_category_id')
    story = StringField('story')

class CreateProjectRewardForm(FlaskForm):
    estimated_delivery = StringField('estimated_delivery', validators=[DataRequired(message="You must enter an estimated delivery date")])
    # price =
