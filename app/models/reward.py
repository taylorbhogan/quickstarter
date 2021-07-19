from .db import db

class Reward(db.Model):
    __tablename__= 'rewards'

    id = db.Column(db.Integer,primary_key=True),
    title = db.Column(db.String(60), nullable=False),
    price = db.Column(db.Integer, nullable=False),
    description = db.Column(db.String(1000), nullable=False),
    estimated_delivery = db.Column(db.Date, nullable=False)

