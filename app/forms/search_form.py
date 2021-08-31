from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField


class SearchForm(FlaskForm):
    searchQuery = StringField('search_query')
    categoryId = IntegerField('category_id')
