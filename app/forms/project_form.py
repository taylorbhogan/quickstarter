from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError, InputRequired, Length
from app.models import Project


def campaign_duration_validator(form, field):
    campaign_duration = field.data
    print("CURENTLY CHECKING",campaign_duration is None, campaign_duration == None, campaign_duration is None)
    if campaign_duration is None:
        campaign_duration = None
    elif campaign_duration > 60:
        raise ValidationError(
            'Campaign duration has to be within 60 days')
    elif campaign_duration == 0:
        campaign_duration = None
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
    funding_goal = StringField('funding_goal')
    project_image_url = StringField('project_image_url')
    title = StringField('title',validators=[Length(max=60, message='Title must be under 60 characters')])
    sub_category_id = StringField('sub_category_id')
    story = StringField('story')
