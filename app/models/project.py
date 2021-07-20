from .db import db
from datetime import datetime

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(60), nullable=True)
    sub_title = db.Column(db.String(135), nullable=False)
    story = db.Column(db.Text, nullable=True)
    funding_goal = db.Column(db.Integer, nullable=True)
    current_funding = db.Column(db.Integer, nullable=True, default = 0)
    project_image_url = db.Column(db.String(2048), nullable=True)
    project_video_url = db.Column(db.String(2048), nullable=True)
    campaign_duration = db.Column(db.Integer, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    sub_category_id = db.Column(db.Integer, db.ForeignKey("sub_categories.id"), nullable=True)
    country_id = db.Column(db.Integer, db.ForeignKey("countries.id"), nullable=False)
    is_live = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    creator = db.relationship("User", back_populates='projects')
    category = db.relationship('Category', back_populates='projects')
    sub_category = db.relationship('SubCategory', back_populates='projects')
    country = db.relationship('Country', back_populates='projects')
    rewards = db.relationship('Reward', back_populates='project')
    backers = db.relationship('Backing', back_populates='project')


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "sub_title": self.sub_title,
            "story": self.story,
            "funding_goal": self.funding_goal,
            "current_funding": self.current_funding,
            "project_image_url": self.project_image_url,
            "project_video_url": self.project_video_url,
            "campaign_duration": self.campaign_duration,
            "category_id": self.category_id,
            "sub_category_id": self.sub_category_id,
            "country_id": self.country_id,
            "is_live": self.is_live,
            "created_at": self.created_at,
            "creator": self.creator.to_dict(),
            "category": self.category.to_dict(),
            "sub_category": self.sub_category.to_dict(),
            'country': self.country.to_dict(),
            'rewards': [reward.to_dict() for reward in self.rewards],
            'backers': [backer.to_dict() for backer in self.backers]
        }
