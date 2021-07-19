from .db import db

countries_to_rewards = db.Table(
    "countries_to_rewards", ## name of table
    db.Column('reward_id', db.Integer, db.ForeignKey('rewards.id')),
    db.Column("country_id", db.Integer, db.ForeignKey("countries.id"))
)
