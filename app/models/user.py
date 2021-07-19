from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    biography = db.Column(db.String(300), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    projects = db.relationship("Project", back_populates='creator')
    websites = db.relationship('Website', back_populates='user')
    backings = db.relationship('Backing', back_populates='backer')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'biography': self.biography,
            "projects": [project.to_dict() for project in self.projects],
            "websites": [website.to_dict() for website in self.websites]
        }
