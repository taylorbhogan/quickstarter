from flask import Blueprint
from app.models import db, Category

category_routes = Blueprint('categories', __name__)


@category_routes.route('')
def get_categories():
    """
    retrieves all categories from db
    """
    all_categories = Category.query.all()
    if all_categories:
        return {'categories': [category.to_dict() for category in all_categories]}
    else:
        return {'something went wrong when getting categories from the database'}
