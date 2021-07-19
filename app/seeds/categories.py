from app.models import db, Category


# Adds a demo categories, you can add other categories here if you want
def seed_categories():
    Art = Category(name='Art')
    Comics = Category(name='Comics')
    Crafts = Category(name='Crafts')
    Dance = Category(name='Dance')
    Design = Category(name='Design')
    Fashion = Category(name='Fashion')
    FilmAndVideo = Category(name='Film & Video')
    Food = Category(name='Food')
    Games = Category(name='Games')
    Journalism = Category(name='Journalism')
    Music = Category(name='Music')
    Photography = Category(name='Photography')
    Publishing = Category(name='Publishing')
    Technology = Category(name='Technology')
    Theater = Category(name='Theater')

    categories = [
        Art,
        Comics,
        Crafts,
        Dance,
        Design,
        Fashion,
        FilmAndVideo,
        Food,
        Games,
        Journalism,
        Music,
        Photography,
        Publishing,
        Technology,
        Theater,
    ]

    for category in categories:
        db.session.add(category)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
