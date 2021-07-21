from flask import Blueprint
from app.models import db, SubCategory

sub_category_routes = Blueprint('subcategories', __name__)


@sub_category_routes.route('/')
def get_sub_categories():
    """
    retrieves all subcategories from db
    """
    all_sub_categories = SubCategory.query.all()
    print('@@@@@@@@@@@')
    if all_sub_categories:
        return {'sub_categories': [sub_category.to_dict() for sub_category in all_sub_categories]}
    else:
        return {'something went wrong when getting subcategories from the database'}
    # return {'something went wrong when getting subcategories from the database'}
