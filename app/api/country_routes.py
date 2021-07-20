from flask import Blueprint
from app.models import db, Country

country_routes = Blueprint('countries', __name__)


@country_routes.route('/')
def get_countries():
    """
    retrieves all countries from db
    """
    all_countries = Country.query.all()
    if all_countries:
        return {'countries': [country.to_dict() for country in all_countries]}
    else:
        return {'something went wrong when getting countries from the database'}
