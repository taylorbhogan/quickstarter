from flask import Blueprint, jsonify, request, redirect
# from flask.helpers import url_for
# from flask_login import login_required
# from app.forms import CreateProjectForm
from app.models import db, Category

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def get_categories():
    """
    retrieves all categories from db
    """
    allCategories = Category.query.all()
    if allCategories:
        return {'categories': [category.to_dict() for category in allCategories]}
    else:
        return {'something went wrong when getting categories from the database'}

