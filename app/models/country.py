from .db import db
from .country_to_reward import countries_to_rewards

class Country(db.Model):
    __tablename__= 'countries'

    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100), nullable=True)

    projects = db.relationship("Project", back_populates='country')
    rewards = db.relationship('Reward', secondary='countries_to_rewards', back_populates='ships_to')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'projects': [project.to_dict() for project in self.projects],
            # 'rewards': [reward.to_dict() for reward in self.rewards]
        }
