from app.models import db, Reward


# Adds a demo reward, you can add other rewards here if you want
def seed_rewards():

    reward1 =Reward(title='these are some words for the title', price=20, description='this is a really good reward', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')

    db.session.add(reward1)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the rewards table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_rewards():
    db.session.execute('TRUNCATE rewards RESTART IDENTITY CASCADE;')
    db.session.commit()
