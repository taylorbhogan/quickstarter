from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', biography='Test user biography! I like sports!', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', biography='Test user biography! I like business!', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', biography='Testing a long user biography, it is true that I do indeed enjoy both sports and business. I also enjoy playing video games with buddies on the weekends!', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
