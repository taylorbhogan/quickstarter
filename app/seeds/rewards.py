from app.models import db, Reward


# Adds a demo reward, you can add other rewards here if you want
def seed_rewards():
    reward1 =Reward(title='Eternal Support', price=100, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=13, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward2 =Reward(title='Thank You', price=130, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=4, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward3 =Reward(title='A Helping Hand', price=170, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward4 =Reward(title='You\'re a Star', price=170, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward5 =Reward(title='The Royal Package', price=120, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=9, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward6 =Reward(title='The Magician Package', price=130, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=11, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward7 =Reward(title='Eternal Support', price=150, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward8 =Reward(title='Thank You', price=10, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward9 =Reward(title='A Helping Hand', price=40, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward10 =Reward(title='You\'re a Star', price=30, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=4, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward11 =Reward(title='The Royal Package', price=50, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward12 =Reward(title='The Magician Package', price=100, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward13 =Reward(title='Eternal Support', price=180, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward14 =Reward(title='Thank You', price=50, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward15 =Reward(title='A Helping Hand', price=50, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=19, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward16 =Reward(title='You\'re a Star', price=40, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward17 =Reward(title='The Royal Package', price=130, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=5, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward18 =Reward(title='The Magician Package', price=200, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward19 =Reward(title='Eternal Support', price=130, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward20 =Reward(title='Thank You', price=60, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward21 =Reward(title='A Helping Hand', price=180, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward22 =Reward(title='You\'re a Star', price=100, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward23 =Reward(title='The Royal Package', price=170, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward24 =Reward(title='The Magician Package', price=80, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward25 =Reward(title='Eternal Support', price=60, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward26 =Reward(title='Thank You', price=70, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward27 =Reward(title='A Helping Hand', price=80, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward28 =Reward(title='You\'re a Star', price=200, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward29 =Reward(title='The Royal Package', price=10, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward30 =Reward(title='The Magician Package', price=80, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=5, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward31 =Reward(title='Eternal Support', price=70, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=5, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward32 =Reward(title='Thank You', price=190, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward33 =Reward(title='A Helping Hand', price=70, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward34 =Reward(title='You\'re a Star', price=20, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward35 =Reward(title='The Royal Package', price=110, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward36 =Reward(title='The Magician Package', price=160, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward37 =Reward(title='Eternal Support', price=170, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward38 =Reward(title='Thank You', price=40, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=13, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward39 =Reward(title='A Helping Hand', price=20, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward40 =Reward(title='You\'re a Star', price=110, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=9, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward41 =Reward(title='The Royal Package', price=140, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward42 =Reward(title='The Magician Package', price=70, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward43 =Reward(title='Eternal Support', price=140, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward44 =Reward(title='Thank You', price=140, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward45 =Reward(title='A Helping Hand', price=90, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward46 =Reward(title='You\'re a Star', price=50, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward47 =Reward(title='The Royal Package', price=180, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=11, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward48 =Reward(title='The Magician Package', price=40, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=4, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward49 =Reward(title='Eternal Support', price=200, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=13, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward50 =Reward(title='Thank You', price=200, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward51 =Reward(title='A Helping Hand', price=40, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward52 =Reward(title='You\'re a Star', price=90, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=11, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward53 =Reward(title='The Royal Package', price=70, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward54 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward55 =Reward(title='Eternal Support', price=190, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward56 =Reward(title='Thank You', price=160, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward57 =Reward(title='A Helping Hand', price=30, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward58 =Reward(title='You\'re a Star', price=20, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward59 =Reward(title='The Royal Package', price=200, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward60 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward61 =Reward(title='Eternal Support', price=50, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward62 =Reward(title='Thank You', price=80, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward63 =Reward(title='A Helping Hand', price=170, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward64 =Reward(title='You\'re a Star', price=90, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward65 =Reward(title='The Royal Package', price=170, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward66 =Reward(title='The Magician Package', price=140, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward67 =Reward(title='Eternal Support', price=20, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward68 =Reward(title='Thank You', price=110, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=4, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward69 =Reward(title='A Helping Hand', price=190, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward70 =Reward(title='You\'re a Star', price=30, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward71 =Reward(title='The Royal Package', price=190, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward72 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward73 =Reward(title='Eternal Support', price=170, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=17, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward74 =Reward(title='Thank You', price=180, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward75 =Reward(title='A Helping Hand', price=90, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward76 =Reward(title='You\'re a Star', price=200, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward77 =Reward(title='The Royal Package', price=150, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=5, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward78 =Reward(title='The Magician Package', price=160, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward79 =Reward(title='Eternal Support', price=90, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward80 =Reward(title='Thank You', price=70, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward81 =Reward(title='A Helping Hand', price=140, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=9, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward82 =Reward(title='You\'re a Star', price=160, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward83 =Reward(title='The Royal Package', price=100, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward84 =Reward(title='The Magician Package', price=200, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=10, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward85 =Reward(title='Eternal Support', price=140, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward86 =Reward(title='Thank You', price=60, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward87 =Reward(title='A Helping Hand', price=120, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward88 =Reward(title='You\'re a Star', price=30, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward89 =Reward(title='The Royal Package', price=20, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward90 =Reward(title='The Magician Package', price=10, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward91 =Reward(title='Eternal Support', price=60, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward92 =Reward(title='Thank You', price=130, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=13, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward93 =Reward(title='A Helping Hand', price=150, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward94 =Reward(title='You\'re a Star', price=90, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward95 =Reward(title='The Royal Package', price=200, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward96 =Reward(title='The Magician Package', price=170, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward97 =Reward(title='Eternal Support', price=190, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=5, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward98 =Reward(title='Thank You', price=50, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward99 =Reward(title='A Helping Hand', price=30, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward100 =Reward(title='You\'re a Star', price=40, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward101 =Reward(title='The Royal Package', price=160, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward102 =Reward(title='The Magician Package', price=80, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward103 =Reward(title='Eternal Support', price=120, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward104 =Reward(title='Thank You', price=130, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward105 =Reward(title='A Helping Hand', price=200, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward106 =Reward(title='You\'re a Star', price=60, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward107 =Reward(title='The Royal Package', price=20, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=9, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward108 =Reward(title='The Magician Package', price=110, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward109 =Reward(title='Eternal Support', price=150, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward110 =Reward(title='Thank You', price=90, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward111 =Reward(title='A Helping Hand', price=120, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward112 =Reward(title='You\'re a Star', price=190, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward113 =Reward(title='The Royal Package', price=190, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=14, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward114 =Reward(title='The Magician Package', price=120, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward115 =Reward(title='Eternal Support', price=60, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward116 =Reward(title='Thank You', price=140, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=19, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward117 =Reward(title='A Helping Hand', price=100, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward118 =Reward(title='You\'re a Star', price=90, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=16, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward119 =Reward(title='The Royal Package', price=100, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward120 =Reward(title='The Magician Package', price=10, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=17, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward121 =Reward(title='Eternal Support', price=130, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=1, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward122 =Reward(title='Thank You', price=90, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward123 =Reward(title='A Helping Hand', price=20, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=15, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward124 =Reward(title='You\'re a Star', price=170, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward125 =Reward(title='The Royal Package', price=110, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward126 =Reward(title='The Magician Package', price=110, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward127 =Reward(title='Eternal Support', price=120, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward128 =Reward(title='Thank You', price=170, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=17, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward129 =Reward(title='A Helping Hand', price=140, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=20, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward130 =Reward(title='You\'re a Star', price=160, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward131 =Reward(title='The Royal Package', price=80, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=19, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward132 =Reward(title='The Magician Package', price=140, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=11, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward133 =Reward(title='Eternal Support', price=170, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward134 =Reward(title='Thank You', price=120, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward135 =Reward(title='A Helping Hand', price=80, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=2, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward136 =Reward(title='You\'re a Star', price=200, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=13, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward137 =Reward(title='The Royal Package', price=170, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward138 =Reward(title='The Magician Package', price=200, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=9, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward139 =Reward(title='Eternal Support', price=190, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=19, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward140 =Reward(title='Thank You', price=20, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward141 =Reward(title='A Helping Hand', price=40, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward142 =Reward(title='You\'re a Star', price=10, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=8, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward143 =Reward(title='The Royal Package', price=160, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward144 =Reward(title='The Magician Package', price=180, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=12, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward145 =Reward(title='Eternal Support', price=80, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=6, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward146 =Reward(title='Thank You', price=80, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=3, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward147 =Reward(title='A Helping Hand', price=190, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=11, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward148 =Reward(title='You\'re a Star', price=90, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward149 =Reward(title='The Royal Package', price=110, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=18, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward150 =Reward(title='The Magician Package', price=180, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=7, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward151 =Reward(title='Eternal Support', price=190, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=130, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward152 =Reward(title='Thank You', price=200, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=108, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward153 =Reward(title='A Helping Hand', price=160, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=97, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward154 =Reward(title='You\'re a Star', price=130, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=44, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward155 =Reward(title='The Royal Package', price=90, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=94, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward156 =Reward(title='The Magician Package', price=130, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=123, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward157 =Reward(title='Eternal Support', price=40, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=120, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward158 =Reward(title='Thank You', price=90, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=50, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward159 =Reward(title='A Helping Hand', price=150, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=100, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward160 =Reward(title='You\'re a Star', price=150, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=25, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward161 =Reward(title='The Royal Package', price=170, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=114, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward162 =Reward(title='The Magician Package', price=150, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=110, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward163 =Reward(title='Eternal Support', price=50, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=124, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward164 =Reward(title='Thank You', price=80, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=56, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward165 =Reward(title='A Helping Hand', price=170, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=70, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward166 =Reward(title='You\'re a Star', price=20, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=36, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward167 =Reward(title='The Royal Package', price=160, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=79, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward168 =Reward(title='The Magician Package', price=70, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=76, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward169 =Reward(title='Eternal Support', price=20, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=76, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward170 =Reward(title='Thank You', price=110, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=87, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward171 =Reward(title='A Helping Hand', price=130, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=51, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward172 =Reward(title='You\'re a Star', price=190, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=82, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward173 =Reward(title='The Royal Package', price=180, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=38, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward174 =Reward(title='The Magician Package', price=190, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=70, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward175 =Reward(title='Eternal Support', price=130, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=76, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward176 =Reward(title='Thank You', price=20, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=29, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward177 =Reward(title='A Helping Hand', price=100, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=91, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward178 =Reward(title='You\'re a Star', price=40, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=33, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward179 =Reward(title='The Royal Package', price=40, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=70, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward180 =Reward(title='The Magician Package', price=160, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=133, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward181 =Reward(title='Eternal Support', price=100, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=27, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward182 =Reward(title='Thank You', price=190, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=74, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward183 =Reward(title='A Helping Hand', price=40, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=24, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward184 =Reward(title='You\'re a Star', price=40, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=94, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward185 =Reward(title='The Royal Package', price=120, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=70, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward186 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=110, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward187 =Reward(title='Eternal Support', price=20, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=51, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward188 =Reward(title='Thank You', price=50, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=132, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward189 =Reward(title='A Helping Hand', price=60, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=60, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward190 =Reward(title='You\'re a Star', price=20, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=35, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward191 =Reward(title='The Royal Package', price=70, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=128, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward192 =Reward(title='The Magician Package', price=190, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=51, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward193 =Reward(title='Eternal Support', price=40, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=33, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward194 =Reward(title='Thank You', price=60, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=49, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward195 =Reward(title='A Helping Hand', price=190, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=36, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward196 =Reward(title='You\'re a Star', price=160, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=115, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward197 =Reward(title='The Royal Package', price=140, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=32, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward198 =Reward(title='The Magician Package', price=70, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=52, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward199 =Reward(title='Eternal Support', price=90, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=35, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward200 =Reward(title='Thank You', price=170, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=79, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward201 =Reward(title='A Helping Hand', price=10, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=62, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward202 =Reward(title='You\'re a Star', price=170, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=26, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward203 =Reward(title='The Royal Package', price=90, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=96, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward204 =Reward(title='The Magician Package', price=40, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=79, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward205 =Reward(title='Eternal Support', price=30, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=60, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward206 =Reward(title='Thank You', price=50, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=109, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward207 =Reward(title='A Helping Hand', price=170, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=46, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward208 =Reward(title='You\'re a Star', price=90, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=59, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward209 =Reward(title='The Royal Package', price=130, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=54, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward210 =Reward(title='The Magician Package', price=60, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=93, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward211 =Reward(title='Eternal Support', price=90, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=66, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward212 =Reward(title='Thank You', price=140, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=42, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward213 =Reward(title='A Helping Hand', price=30, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=43, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward214 =Reward(title='You\'re a Star', price=10, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=54, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward215 =Reward(title='The Royal Package', price=150, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=47, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward216 =Reward(title='The Magician Package', price=40, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=63, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward217 =Reward(title='Eternal Support', price=200, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=54, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward218 =Reward(title='Thank You', price=80, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=98, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward219 =Reward(title='A Helping Hand', price=200, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=97, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward220 =Reward(title='You\'re a Star', price=80, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=30, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward221 =Reward(title='The Royal Package', price=40, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=93, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward222 =Reward(title='The Magician Package', price=190, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=42, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward223 =Reward(title='Eternal Support', price=10, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=130, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward224 =Reward(title='Thank You', price=20, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=114, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward225 =Reward(title='A Helping Hand', price=20, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=108, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward226 =Reward(title='You\'re a Star', price=140, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=92, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward227 =Reward(title='The Royal Package', price=90, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=79, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward228 =Reward(title='The Magician Package', price=40, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=71, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward229 =Reward(title='Eternal Support', price=170, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=49, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward230 =Reward(title='Thank You', price=70, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=117, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward231 =Reward(title='A Helping Hand', price=160, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=123, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward232 =Reward(title='You\'re a Star', price=200, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=47, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward233 =Reward(title='The Royal Package', price=160, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=116, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward234 =Reward(title='The Magician Package', price=160, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=72, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward235 =Reward(title='Eternal Support', price=190, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=60, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward236 =Reward(title='Thank You', price=190, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=84, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward237 =Reward(title='A Helping Hand', price=150, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=112, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward238 =Reward(title='You\'re a Star', price=100, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=82, quantity=70, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward239 =Reward(title='The Royal Package', price=20, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=119, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward240 =Reward(title='The Magician Package', price=110, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=119, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward241 =Reward(title='Eternal Support', price=150, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=81, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward242 =Reward(title='Thank You', price=60, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=48, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward243 =Reward(title='A Helping Hand', price=150, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=25, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward244 =Reward(title='You\'re a Star', price=150, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=34, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward245 =Reward(title='The Royal Package', price=110, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=87, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward246 =Reward(title='The Magician Package', price=160, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=98, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward247 =Reward(title='Eternal Support', price=160, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=75, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward248 =Reward(title='Thank You', price=70, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=61, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward249 =Reward(title='A Helping Hand', price=190, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=126, quantity=30, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward250 =Reward(title='You\'re a Star', price=150, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=45, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward251 =Reward(title='The Royal Package', price=50, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=53, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward252 =Reward(title='The Magician Package', price=90, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=62, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward253 =Reward(title='Eternal Support', price=140, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=125, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward254 =Reward(title='Thank You', price=180, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=112, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward255 =Reward(title='A Helping Hand', price=120, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=44, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward256 =Reward(title='You\'re a Star', price=170, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=21, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward257 =Reward(title='The Royal Package', price=20, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=51, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward258 =Reward(title='The Magician Package', price=60, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=30, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward259 =Reward(title='Eternal Support', price=40, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=82, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward260 =Reward(title='Thank You', price=30, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=103, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward261 =Reward(title='A Helping Hand', price=110, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=42, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward262 =Reward(title='You\'re a Star', price=130, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=118, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward263 =Reward(title='The Royal Package', price=120, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=116, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward264 =Reward(title='The Magician Package', price=120, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=123, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward265 =Reward(title='Eternal Support', price=70, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=46, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward266 =Reward(title='Thank You', price=50, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=128, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward267 =Reward(title='A Helping Hand', price=60, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=129, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward268 =Reward(title='You\'re a Star', price=120, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=26, quantity=130, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward269 =Reward(title='The Royal Package', price=140, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=58, quantity=50, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward270 =Reward(title='The Magician Package', price=120, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=82, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward271 =Reward(title='Eternal Support', price=130, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=53, quantity=150, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward272 =Reward(title='Thank You', price=70, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=70, quantity=100, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward273 =Reward(title='A Helping Hand', price=30, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=81, quantity=20, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward274 =Reward(title='You\'re a Star', price=110, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=34, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward275 =Reward(title='The Royal Package', price=160, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=21, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward276 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=87, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward277 =Reward(title='Eternal Support', price=180, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=93, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward278 =Reward(title='Thank You', price=150, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=121, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward279 =Reward(title='A Helping Hand', price=90, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=61, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward280 =Reward(title='You\'re a Star', price=110, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=60, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward281 =Reward(title='The Royal Package', price=180, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=116, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward282 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=103, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward283 =Reward(title='Eternal Support', price=60, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=123, quantity=90, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward284 =Reward(title='Thank You', price=140, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=34, quantity=160, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward285 =Reward(title='A Helping Hand', price=90, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=53, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward286 =Reward(title='You\'re a Star', price=30, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=38, quantity=60, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward287 =Reward(title='The Royal Package', price=200, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=99, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward288 =Reward(title='The Magician Package', price=160, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=30, quantity=140, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward289 =Reward(title='Eternal Support', price=140, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=79, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward290 =Reward(title='Thank You', price=90, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=95, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward291 =Reward(title='A Helping Hand', price=140, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=96, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward292 =Reward(title='You\'re a Star', price=160, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=53, quantity=170, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward293 =Reward(title='The Royal Package', price=140, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=25, quantity=180, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward294 =Reward(title='The Magician Package', price=70, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=119, quantity=200, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward295 =Reward(title='Eternal Support', price=70, description='Thank you for backing! You\'ll get a folder of digital wallpapers as thanks.', estimated_delivery='2021-07-21 19:09:38', project_id=21, quantity=110, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward296 =Reward(title='Thank You', price=110, description='Get yours a month before everyone else!', estimated_delivery='2021-07-21 19:09:38', project_id=29, quantity=190, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward297 =Reward(title='A Helping Hand', price=30, description='Make this pledge and get access to our phone lines, any time of day!', estimated_delivery='2021-07-21 19:09:38', project_id=98, quantity=10, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward298 =Reward(title='You\'re a Star', price=180, description='To thank you for backing, we\'ll include the rights to your own star name!', estimated_delivery='2021-07-21 19:09:38', project_id=67, quantity=80, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward299 =Reward(title='The Royal Package', price=70, description='Our best package. Get all the bells and whistles.', estimated_delivery='2021-07-21 19:09:38', project_id=105, quantity=120, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')
    reward300 =Reward(title='The Magician Package', price=50, description='We think this feels like magic. Come experience it yourself!', estimated_delivery='2021-07-21 19:09:38', project_id=95, quantity=40, start_date='2021-07-21 19:09:38', end_date='2021-07-21 19:09:38')

    rewards = [
        reward1,
        reward2,
        reward3,
        reward4,
        reward5,
        reward6,
        reward7,
        reward8,
        reward9,
        reward10,
        reward11,
        reward12,
        reward13,
        reward14,
        reward15,
        reward16,
        reward17,
        reward18,
        reward19,
        reward20,
        reward21,
        reward22,
        reward23,
        reward24,
        reward25,
        reward26,
        reward27,
        reward28,
        reward29,
        reward30,
        reward31,
        reward32,
        reward33,
        reward34,
        reward35,
        reward36,
        reward37,
        reward38,
        reward39,
        reward40,
        reward41,
        reward42,
        reward43,
        reward44,
        reward45,
        reward46,
        reward47,
        reward48,
        reward49,
        reward50,
        reward51,
        reward52,
        reward53,
        reward54,
        reward55,
        reward56,
        reward57,
        reward58,
        reward59,
        reward60,
        reward61,
        reward62,
        reward63,
        reward64,
        reward65,
        reward66,
        reward67,
        reward68,
        reward69,
        reward70,
        reward71,
        reward72,
        reward73,
        reward74,
        reward75,
        reward76,
        reward77,
        reward78,
        reward79,
        reward80,
        reward81,
        reward82,
        reward83,
        reward84,
        reward85,
        reward86,
        reward87,
        reward88,
        reward89,
        reward90,
        reward91,
        reward92,
        reward93,
        reward94,
        reward95,
        reward96,
        reward97,
        reward98,
        reward99,
        reward100,
        reward101,
        reward102,
        reward103,
        reward104,
        reward105,
        reward106,
        reward107,
        reward108,
        reward109,
        reward110,
        reward111,
        reward112,
        reward113,
        reward114,
        reward115,
        reward116,
        reward117,
        reward118,
        reward119,
        reward120,
        reward121,
        reward122,
        reward123,
        reward124,
        reward125,
        reward126,
        reward127,
        reward128,
        reward129,
        reward130,
        reward131,
        reward132,
        reward133,
        reward134,
        reward135,
        reward136,
        reward137,
        reward138,
        reward139,
        reward140,
        reward141,
        reward142,
        reward143,
        reward144,
        reward145,
        reward146,
        reward147,
        reward148,
        reward149,
        reward150,
        reward151,
        reward152,
        reward153,
        reward154,
        reward155,
        reward156,
        reward157,
        reward158,
        reward159,
        reward160,
        reward161,
        reward162,
        reward163,
        reward164,
        reward165,
        reward166,
        reward167,
        reward168,
        reward169,
        reward170,
        reward171,
        reward172,
        reward173,
        reward174,
        reward175,
        reward176,
        reward177,
        reward178,
        reward179,
        reward180,
        reward181,
        reward182,
        reward183,
        reward184,
        reward185,
        reward186,
        reward187,
        reward188,
        reward189,
        reward190,
        reward191,
        reward192,
        reward193,
        reward194,
        reward195,
        reward196,
        reward197,
        reward198,
        reward199,
        reward200,
        reward201,
        reward202,
        reward203,
        reward204,
        reward205,
        reward206,
        reward207,
        reward208,
        reward209,
        reward210,
        reward211,
        reward212,
        reward213,
        reward214,
        reward215,
        reward216,
        reward217,
        reward218,
        reward219,
        reward220,
        reward221,
        reward222,
        reward223,
        reward224,
        reward225,
        reward226,
        reward227,
        reward228,
        reward229,
        reward230,
        reward231,
        reward232,
        reward233,
        reward234,
        reward235,
        reward236,
        reward237,
        reward238,
        reward239,
        reward240,
        reward241,
        reward242,
        reward243,
        reward244,
        reward245,
        reward246,
        reward247,
        reward248,
        reward249,
        reward250,
        reward251,
        reward252,
        reward253,
        reward254,
        reward255,
        reward256,
        reward257,
        reward258,
        reward259,
        reward260,
        reward261,
        reward262,
        reward263,
        reward264,
        reward265,
        reward266,
        reward267,
        reward268,
        reward269,
        reward270,
        reward271,
        reward272,
        reward273,
        reward274,
        reward275,
        reward276,
        reward277,
        reward278,
        reward279,
        reward280,
        reward281,
        reward282,
        reward283,
        reward284,
        reward285,
        reward286,
        reward287,
        reward288,
        reward289,
        reward290,
        reward291,
        reward292,
        reward293,
        reward294,
        reward295,
        reward296,
        reward297,
        reward298,
        reward299,
        reward300,
    ]

    for reward in rewards:
        db.session.add(reward)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the rewards table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_rewards():
    db.session.execute('TRUNCATE rewards RESTART IDENTITY CASCADE;')
    db.session.commit()
