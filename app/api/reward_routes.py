from flask import Blueprint
from app.models import db, Reward, Project

reward_routes = Blueprint('rewards', __name__)


@reward_routes.route('')
def get_rewards():
    """
    retrieves all rewards from db
    """
    all_rewards = Reward.query.all()
    if all_rewards:
        return {'rewards': [reward.to_dict() for reward in all_rewards]}
    else:
        return {'something went wrong when getting categories from the database'}


#Project.project.id
