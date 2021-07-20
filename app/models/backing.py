from .db import db

class Backing(db.Model):
    __tablename__ = 'backings'

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    reward_id = db.Column(db.Integer, db.ForeignKey('rewards.id'), nullable=True)

    backer = db.relationship("User", back_populates='backings')
    project = db.relationship('Project', back_populates='backers')
    reward = db.relationship('Reward', back_populates='backers')

    def to_dict(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "user_id": self.user_id,
            "project_id": self.project_id,
            "reward_id": self.reward_id,
            "backer": self.backer.to_dict(),
            "project": self.project.to_dict(),
            "reward": self.reward.to_dict(),
        }
