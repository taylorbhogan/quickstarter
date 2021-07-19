from .db import db

class Website(db.Model):
    __tablename__ = 'websites'

    id = db.Column(db.Integer,primary_key=True),
    url = db.Column(db.String(2048), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id') ,nullable=False)

    user = db.relationship('User', back_populates='websites')

    def to_dict(self):
        return {
            'id': self.id,
            "url": self.url,
            'user_id': self.user_id,
            'user': self.user.to_dict()
        }

