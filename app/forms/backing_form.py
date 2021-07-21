from flask_wtf import FlaskForm
from wtforms import StringField
from app.models import Backing

class BackingForm(FlaskForm):
    user_id = StringField('user_id')
    reward_id = StringField('reward_id')
    project_id = StringField('project_id')
    amount = StringField('amount')
