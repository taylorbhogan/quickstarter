from app.models import db, Project


def seed_projects():
    project1 = Project(
        user_id=1,
        title='Photography Gloves: Extend your session in style',
        sub_title='Warm hands and full access to your camera dials. Just flip the finger cap and forget about freezing photog hands in Winter.',
        story='No story at this moment.',
        funding_goal=25000,
        current_funding=50,
        project_image_url='https://ksr-ugc.imgix.net/assets/012/315/200/35c9af8bdc0d71f1927a7f4a83cf1b2a_original.jpg?ixlib=rb-2.1.0&crop=faces&w=560&h=315&fit=crop&v=1463755534&auto=format&frame=1&q=92&s=80b1676951e5bf30b43d397f21ee4200',
        campaign_duration=40,
        category_id=1,
        sub_category_id=1,
        country_id=1,
        is_live=True,
        created_at='2021-07-21 19:09:38'
    )

    project2 = Project(
        user_id=1,
        title='Your 5 in 1 Multi-functional Kitchen Partner',
        sub_title='Chop food. Weight food. Check nutrition. Explore healthy recipe. Share ideas. With just one utensil.',
        funding_goal=11800,
        current_funding=13597,
        project_image_url='https://ksr-ugc.imgix.net/assets/030/318/425/88693f97df9a0a639738b45f535754d3_original.png?ixlib=rb-2.1.0&crop=faces&w=560&h=315&fit=crop&v=1598262851&auto=format&frame=1&q=92&s=1252f6cdc4967b0318076f6df14f9167',
        campaign_duration=30,
        category_id=2,
        sub_category_id=2,
        country_id=2,
        is_live=True,
        created_at='2021-07-21 19:09:38'
    )

    db.session.add(project1)
    db.session.add(project2)
    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
