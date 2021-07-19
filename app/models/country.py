from .db import db

class Country(db.Model):
    __tablename__= 'countries'

    id = db.Column(db.Integer,primary_key=True),
    name = db.Column(db.String(100), nullable=True),

    projects = db.relationship("Project", back_populates='country')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
            'projects': [project.to_dict() for project in self.projects]
        }

    

