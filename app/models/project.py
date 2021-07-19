from .db import db

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(255))
    blurb = db.Column(db.String(255))
    country = db.Column(db.String(255))

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'blurb': self.blurb,
            'country': self.country
        }
