# Adds a demo sub_categories, you can add other sub_categories here if you want

from app.models import db, SubCategory

def seed_sub_categories():
    ceramics = SubCategory(name='Ceramics', category_id=1)
    conceptualArt = SubCategory(name='Conceptual Art', category_id=1)
    digitalArt = SubCategory(name='Digital Art', category_id=1)
    illustration = SubCategory(name='Illustration', category_id=1)
    installations = SubCategory(name='Installations', category_id=1)
    mixedMedia = SubCategory(name='Mixed Media', category_id=1)
    painting = SubCategory(name='Painting', category_id=1)
    performanceArt = SubCategory(name="Performance Art", category_id=1)
    publicArt = SubCategory(name="Public Art", category_id=1)
    sculpture = SubCategory(name='Sculpture', category_id=1)
    socialPractice = SubCategory(name='Social Practice', category_id=1)
    textiles = SubCategory(name='Textiles', category_id=1)
    videoArt = SubCategory(name='Video Art', category_id=1)
    anthologies1 = SubCategory(name='Anthologies', category_id=2)
    comicBooks = SubCategory(name='Comic Books', category_id=2)
    events1 = SubCategory(name='Events', category_id=2)
    graphicNovels = SubCategory(name='Graphic Novels', category_id=2)
    webcomics = SubCategory(name='Webcomics', category_id=2)
    candles = SubCategory(name='Candles', category_id=3)
    crochet = SubCategory(name='Crochet', category_id=3)
    diy = SubCategory(name='DIY', category_id=3)
    embroidery = SubCategory(name='Embroidery', category_id=3)
    glass = SubCategory(name='Glass', category_id=3)
    knitting = SubCategory(name='Knitting', category_id=3)
    pottery = SubCategory(name='Pottery', category_id=3)
    printing = SubCategory(name='Printing', category_id=3)
    quilts = SubCategory(name='Quilts', category_id=3)
    stationary = SubCategory(name='Stationary', category_id=3)
    taxidermy = SubCategory(name='Taxidermy', category_id=3)
    weaving = SubCategory(name='Weaving', category_id=3)
    woodworking = SubCategory(name='Woodworking', category_id=3)
    performances = SubCategory(name='Performances', category_id=4)
    residencies = SubCategory(name='Residencies', category_id=4)
    spaces1 = SubCategory(name='Spaces', category_id=4)
    workshops = SubCategory(name='Workshops', category_id=4)
    architecture = SubCategory(name='Architecture', category_id=5)
    civicDesign = SubCategory(name='Civic Design', category_id=5)
    graphicDesign = SubCategory(name='Graphic Design', category_id=5)
    interactiveDesign = SubCategory(name='Interactive Design', category_id=5)
    productDesign = SubCategory(name='Product Design', category_id=5)
    toys = SubCategory(name='Toys', category_id=5)
    typography = SubCategory(name='Typography', category_id=5)
    accessories = SubCategory(name="Accessories", category_id=6)
    apparel = SubCategory(name="Apparel", category_id=6)
    childrenswear = SubCategory(name="Childrenswear", category_id=6)
    couture = SubCategory(name="Couture", category_id=6)
    footwear = SubCategory(name="Footwear", category_id=6)
    jewelry = SubCategory(name="Jewelry", category_id=6)
    petFashion = SubCategory(name="Pet Fashion", category_id=6)
    readyToWear = SubCategory(name='Ready-to-wear', category_id=6)
    action = SubCategory(name="Action", category_id=7)
    animation = SubCategory(name="Animation", category_id=7)
    comedy1 = SubCategory(name="Comedy", category_id=7)
    documentary = SubCategory(name="Documentary", category_id=7)
    drama = SubCategory(name="Drama", category_id=7)
    experimental = SubCategory(name="Experimental", category_id=7)
    family = SubCategory(name="Family", category_id=7)
    fantasy = SubCategory(name="Fantasy", category_id=7)
    festivals = SubCategory(name="Festivals", category_id=7)
    horror = SubCategory(name="Horror", category_id=7)
    movieTheaters = SubCategory(name="Movie Theaters", category_id=7)
    musicVideos = SubCategory(name="Music Videos", category_id=7)
    narrativeFilm = SubCategory(name="Narrative Film", category_id=7)
    romance = SubCategory(name="Romance", category_id=7)
    scienceFiction = SubCategory(name="Science Fiction", category_id=7)
    shorts = SubCategory(name="Shorts", category_id=7)
    television = SubCategory(name="Television", category_id=7)
    thrillers = SubCategory(name="Thrillers", category_id=7)
    webseries = SubCategory(name="Webseries", category_id=7)
    bacon = SubCategory(name="Bacon", category_id=8)
    communityGardens = SubCategory(name="Community Gardens", category_id=8)
    cookbooks = SubCategory(name="Cookbooks", category_id=8)
    drinks = SubCategory(name="Drinks", category_id=8)
    events2 = SubCategory(name="Events", category_id=8)
    farmersMarkets = SubCategory(name="Farmer\'s Markets", category_id=8)
    farms = SubCategory(name="Farms", category_id=8)
    foodTrucks = SubCategory(name="Food Trucks", category_id=8)
    restaurants = SubCategory(name="Restaurants", category_id=8)
    smallBatch = SubCategory(name="Small Batch", category_id=8)
    spaces2 = SubCategory(name="Spaces", category_id=8)
    vegan = SubCategory(name="Vegan", category_id=8)
    gamingHardware = SubCategory(name='Gaming Hardware', category_id=9)
    liveGames = SubCategory(name='Live Games', category_id=9)
    mobileGames = SubCategory(name='Mobile Games', category_id=9)
    playingCards = SubCategory(name='Playing Cards', category_id=9)
    puzzles = SubCategory(name='Puzzles', category_id=9)
    tabletopGames = SubCategory(name='Tabletop Games', category_id=9)
    videoGames = SubCategory(name='Video Games', category_id=9)
    audio = SubCategory(name="Audio", category_id=10)
    photo = SubCategory(name="Photo", category_id=10)
    prints = SubCategory(name="Print", category_id=10)
    video = SubCategory(name="Video", category_id=10)
    web1 = SubCategory(name="Web", category_id=10)
    blues = SubCategory(name="Blues", category_id=11)
    chiptune = SubCategory(name="Chiptune", category_id=11)
    classicalMusic = SubCategory(name="Classical Music", category_id=11)
    comedy2 = SubCategory(name="Comedy", category_id=11)
    countryFolk = SubCategory(name="Country & Folk", category_id=11)
    electronicMusic = SubCategory(name="Electronic Music", category_id=11)
    faith = SubCategory(name="Faith", category_id=11)
    hipHop = SubCategory(name="Hip-Hop", category_id=11)
    indieRock = SubCategory(name="Indie Rock", category_id=11)
    jazz = SubCategory(name="Jazz", category_id=11)
    kids = SubCategory(name="Kids", category_id=11)
    latin = SubCategory(name="Latin", category_id=11)
    metal = SubCategory(name="Metal", category_id=11)
    pop = SubCategory(name="Pop", category_id=11)
    punk = SubCategory(name="Punk", category_id=11)
    rAndB = SubCategory(name="R&B", category_id=11)
    rock = SubCategory(name="Rock", category_id=11)
    worldMusic = SubCategory(name="World Music", category_id=11)
    animals = SubCategory(name="Animals", category_id=12)
    fineArt = SubCategory(name="Fine Art", category_id=12)
    nature = SubCategory(name="Nature", category_id=12)
    people = SubCategory(name="People", category_id=12)
    photobooks = SubCategory(name="Photobooks", category_id=12)
    places = SubCategory(name="Places", category_id=12)
    academic = SubCategory(name="Academic", category_id=13)
    anthologies2 = SubCategory(name="Anthologies", category_id=13)
    artBooks = SubCategory(name="Art Books", category_id=13)
    calendars = SubCategory(name="Calendars", category_id=13)
    childrensBooks = SubCategory(name="Children's Books", category_id=13)
    comedy3 = SubCategory(name="Comedy", category_id=13)
    fiction = SubCategory(name="Fiction", category_id=13)
    letterpress = SubCategory(name="Letterpress", category_id=13)
    literaryJournals = SubCategory(name="Literary Journals", category_id=13)
    literarySpaces = SubCategory(name="Literary Spaces", category_id=13)
    nonfiction = SubCategory(name="Nonfiction", category_id=13)
    periodicals = SubCategory(name="Periodicals", category_id=13)
    poetry = SubCategory(name="Poetry", category_id=13)
    radioPodcasts = SubCategory(name="Radio & Podcasts", category_id=13)
    translations = SubCategory(name="Translations", category_id=13)
    youngAdult = SubCategory(name="Young Adult", category_id=13)
    zines = SubCategory(name="Zines", category_id=13)
    threeDprinting = SubCategory(name="3D Printing", category_id=14)
    apps = SubCategory(name="Apps", category_id=14)
    cameraEquipment = SubCategory(name="Camera Equipment", category_id=14)
    diyElectronics = SubCategory(name="DIY Electronics", category_id=14)
    fabricationTools = SubCategory(name="Fabrication Tools", category_id=14)
    flight = SubCategory(name="Flight", category_id=14)
    gadgets = SubCategory(name="Gadgets", category_id=14)
    hardware = SubCategory(name="Hardware", category_id=14)
    makerspaces = SubCategory(name="Makerspaces", category_id=14)
    robots = SubCategory(name="Robots", category_id=14)
    software = SubCategory(name="Software", category_id=14)
    sound = SubCategory(name="Sound", category_id=14)
    spaceExploration = SubCategory(name="Space Exploration", category_id=14)
    wearables = SubCategory(name="Wearables", category_id=14)
    web2 = SubCategory(name="Web", category_id=14)
    comedy4 = SubCategory(name="Comedy", category_id=15)
    experimental = SubCategory(name="Experimental", category_id=15)
    festivals = SubCategory(name="Festivals", category_id=15)
    immersive = SubCategory(name="Immersive", category_id=15)
    musical = SubCategory(name="Musical", category_id=15)
    plays = SubCategory(name="Plays", category_id=15)
    spaces3 = SubCategory(name="Spaces", category_id=15)

    sub_categories = [
        ceramics,
        conceptualArt,
        digitalArt,
        illustration,
        installations,
        mixedMedia,
        painting,
        performanceArt,
        publicArt,
        sculpture,
        socialPractice,
        textiles,
        videoArt,
        anthologies1,
        comicBooks,
        events1,
        graphicNovels,
        webcomics,
        candles,
        crochet,
        diy,
        embroidery,
        glass,
        knitting,
        pottery,
        printing,
        quilts,
        stationary,
        taxidermy,
        weaving,
        woodworking,
        performances,
        residencies,
        spaces1,
        workshops,
        architecture,
        civicDesign,
        graphicDesign,
        interactiveDesign,
        productDesign,
        toys,
        typography,
        accessories,
        apparel,
        childrenswear,
        couture,
        footwear,
        jewelry,
        petFashion,
        readyToWear,
        action,
        animation,
        comedy1,
        documentary,
        drama,
        experimental,
        family,
        fantasy,
        festivals,
        horror,
        movieTheaters,
        musicVideos,
        narrativeFilm,
        romance,
        scienceFiction,
        shorts,
        television,
        thrillers,
        webseries,
        bacon,
        communityGardens,
        cookbooks,
        drinks,
        events2,
        farmersMarkets,
        farms,
        foodTrucks,
        restaurants,
        smallBatch,
        spaces2,
        vegan,
        gamingHardware,
        liveGames,
        mobileGames,
        playingCards,
        puzzles,
        tabletopGames,
        videoGames,
        audio,
        photo,
        prints,
        video,
        web1,
        blues,
        chiptune,
        classicalMusic,
        comedy2,
        countryFolk,
        electronicMusic,
        faith,
        hipHop,
        indieRock,
        jazz,
        kids,
        latin,
        metal,
        pop,
        punk,
        rAndB,
        rock,
        worldMusic,
        animals,
        fineArt,
        nature,
        people,
        photobooks,
        places,
        academic,
        anthologies2,
        artBooks,
        calendars,
        childrensBooks,
        comedy3,
        fiction,
        letterpress,
        literaryJournals,
        literarySpaces,
        nonfiction,
        periodicals,
        poetry,
        radioPodcasts,
        translations,
        youngAdult,
        zines,
        threeDprinting,
        apps,
        cameraEquipment,
        diyElectronics,
        fabricationTools,
        flight,
        gadgets,
        hardware,
        makerspaces,
        robots,
        software,
        sound,
        spaceExploration,
        wearables,
        web2,
        comedy4,
        experimental,
        immersive,
        musical,
        plays,
        spaces3,

    ]

    for sub_category in sub_categories:
        db.session.add(sub_category)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the sub_categories table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_sub_categories():
    db.session.execute('TRUNCATE sub_categories RESTART IDENTITY CASCADE;')
    db.session.commit()
