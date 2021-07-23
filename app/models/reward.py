from .db import db
from .country_to_reward import countries_to_rewards

class Reward(db.Model):
    __tablename__= 'rewards'

    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String(60), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    estimated_delivery = db.Column(db.Date, nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=True)
    start_date = db.Column(db.DateTime, nullable=True)
    end_date = db.Column(db.DateTime, nullable=True)

    project = db.relationship('Project', back_populates='rewards')
    ships_to=db.relationship('Country', secondary='countries_to_rewards', back_populates='rewards')
    backers = db.relationship('Backing', back_populates='reward')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "description": self.description,
            'quantity': self.quantity,
            "estimated_delivery": self.estimated_delivery,
            'project_id': self.project_id,
            'start_date': self.start_date,
            'end_date': self.end_date,
            "backers": [backer.to_dict() for backer in self.backers]
            # 'ships_to': [country.to_dict() for country in self.ships_to],
            # 'project': self.project.to_dict()
        }

