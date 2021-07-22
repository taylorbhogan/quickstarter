from flask import Blueprint, jsonify, request, redirect
# from flask.helpers import url_for
# from flask_login import login_required
# from app.forms import CreateProjectForm
from app.models import db, Country

country_routes = Blueprint('countries', __name__)


@country_routes.route('')
def get_countries():
    """
    retrieves all categories from db
    """
    allCountries = Country.query.all()
    if allCountries:
        return {'countries': [country.to_dict() for country in allCountries]}
    else:
        return {'something went wrong when getting countries from the database'}
