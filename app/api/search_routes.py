from flask import Blueprint, request
from sqlalchemy import or_
from app.models import db, Project
from app.forms import SearchForm
from app.helpers import validation_errors_to_error_messages

search_routes = Blueprint('search', __name__)


@search_routes.route('')
def get_all_decks():
    projects = Project.query.filter(Project.is_live == True).all()
    return {'projects': [project.to_dict() for project in projects]}


@search_routes.route('', methods=['POST'])
def get_decks_by_search():
    form = SearchForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    search_query = form.data['searchQuery']
    category_id = form.data['categoryId']
    if form.validate_on_submit():
        if not category_id:
            filtered_projects = Project.query.filter(
                or_(
                    Project.title.ilike('%' + search_query + '%'),
                    Project.sub_title.ilike('%' + search_query + '%'))
                ).filter(Project.is_live == True).all()
            return {'filtered_projects': [project.to_dict() for project in filtered_projects]}
        else:
            filtered_projects = Project.query.filter(
                or_(
                    Project.title.ilike('%' + search_query + '%'),
                    Project.sub_title.ilike('%' + search_query + '%'))
                ).filter(Project.is_live == True
                ).filter(Project.category_id == category_id).all()
            return {'filtered_projects': [project.to_dict() for project in filtered_projects]}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
