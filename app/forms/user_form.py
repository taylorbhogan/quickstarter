from flask_wtf import FlaskForm
from wtforms import StringField

class UpdateUserForm(FlaskForm):
    user_image_url = StringField('user_image_url')
