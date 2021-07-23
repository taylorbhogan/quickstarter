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

@reward_routes.route('/<int:id>', methods=['DELETE'])
def delete_reward(id):
    """
    retrieves delete single reward from db
    """
    rewardToDelete = Reward.query.get(id)
    if rewardToDelete:
        db.session.delete(rewardToDelete)
        db.session.commit()
        return {"success": f"successful delete of reward {id}"}
    return {"Failure": f"No reward with the id of {id}"}



#Project.project.id
