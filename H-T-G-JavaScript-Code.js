/* Array of viral hashtags */
const hashtagsByCategory = {
"General Trending": [
    "viral", "trending", "news", "breaking", "hot", "latest", "new", "update", "buzz", "mustsee", 
    "instagood", "photooftheday", "picoftheday", "bestoftheday", "instadaily", "like4like", "followme",
    "love", "selfie", "nofilter", "instamood", "igers", "instalike", "life", "nature", "style", "beautiful",
    "happy", "amazing", "cute", "tbt", "repost", "friends", "fun", "smile", "photo", "music",
    "sun", "night", "cool", "work", "fitness", "travel", "food", "adventure", "summer", "art",
    "family", "beach", "ootd", "party", "makeup", "fashionista", "wanderlust", "motivation", "gym", "health",
    "design", "funny", "quote", "inspire", "regram", "artist", "daily", "goals", "fit", "quotes",
    "dream", "healthy", "weekend", "follow4follow", "lifestyle", "loveit", "motivate", "beautifulday", "explore", "workout",
    "success", "dog", "cats", "cuteanimals", "wellness", "business", "goals", "happy", "life", "mondaymotivation",
    "tech", "future", "weekendvibes", "inspo", "mood", "positive", "thankful", "foodie", "yummy", "delicious",
    "coffee", "tea", "book", "reading", "author", "quotesoftheday", "poetry", "poem", "literature", "write",
    "script", "screenplay", "director", "actor", "actress", "movie", "film", "cinema", "hollywood", "bollywood",
    "culture", "tradition", "festival", "celebration", "holiday", "vacation", "relax", "naturelovers", "wildlife", "ocean",
    "mountains", "travelgram", "traveller", "exploremore", "wander", "roamtheplanet", "city", "urban", "architecture", "landscape",
    "skyscraper", "nightlife", "street", "streetstyle", "fashionblogger", "styleblogger", "mensfashion", "womensfashion", "outfit", "clothing",
    "sneakers", "shoes", "jewelry", "accessories", "bags", "handmade", "craft", "diy", "homedecor", "interior",
    "designinspiration", "architecturephotography", "luxury", "home", "house", "garden", "plants", "flowers", "naturephotography", "landscapephotography",
    "portrait", "portraitphotography", "selfportrait", "headshot", "blackandwhite", "bnw", "monochrome", "colors", "streetphotography", "travelphotography",
    "photoart", "photographyislife", "photographyeveryday", "lens", "camera", "dslr", "mirrorless", "photooftheweek", "editorial", "magazine",
    "press", "newsupdate", "breakingnews", "journalism", "reporter", "newsreport", "trendingnow", "hotnews", "worldnews", "usnews",
    "politics", "election", "government", "law", "justice", "court", "rights", "freedom", "democracy", "vote",
    "economy", "finance", "money", "stockmarket", "investment", "trading", "crypto", "bitcoin", "blockchain", "forex",
    "businessnews", "entrepreneur", "startup", "innovation", "technology", "science", "space", "astronomy", "nasa", "research",
    "healthcare", "medicine", "doctor", "nurse", "hospital", "treatment", "wellness", "fitnessmotivation", "yoga", "meditation",
    "mindfulness", "nutrition", "diet", "vegan", "vegetarian", "organic", "cleaneating", "recipe", "foodstagram", "foodporn",
    "chef", "cooking", "baking", "dessert", "cake", "chocolate", "icecream", "pizza", "burger", "sushi",
    "breakfast", "lunch", "dinner", "brunch", "snack", "healthyfood", "delicious", "yummy", "foodlover", "foodphotography",
    "drink", "cocktail", "wine", "beer", "coffee", "tea", "bar", "mixology", "brewery", "winery",
    "travelblogger", "backpacker", "luxurytravel", "adventuretime", "roadtrip", "vacationmode", "beachlife", "sunset", "sunrise", "sky",
    "clouds", "naturewalk", "forest", "jungle", "safari", "animalsofinstagram", "petstagram", "dogsofinstagram", "catsofinstagram", "animallovers",
    "wildlifephotography", "zoophotography", "birdwatching", "insects", "marine", "underwater", "sealife", "fish", "aquarium", "coral",
    "technologytrends", "innovationnews", "gadgets", "smartphone", "apps", "software", "coding", "programming", "developer", "technews",
    "techupdate", "futuretech", "ai", "artificialintelligence", "robotics", "machinelearning", "datascience", "bigdata", "cybersecurity", "hackers",
    "networking", "cloudcomputing", "saas", "iot", "internetofthings", "wearables", "vr", "virtualreality", "ar", "augmentedreality",
    "gaming", "gamer", "game", "videogames", "esports", "twitch", "streaming", "youtube", "youtuber", "contentcreator",
    "vlogger", "vlog", "livestream", "gamingcommunity", "gamersofinstagram", "instagamer", "gamestagram", "gameon", "levelup", "playstation",
    "xbox", "pcgaming", "nintendo", "switch", "retro", "arcade", "8bit", "pixelart", "gameart", "indiedev",
    "gamedev", "unity3d", "unrealengine", "gamedevelopment", "indiegames", "gamersunite", "gaminglife", "gamingmemes", "gamingchannel", "gamingvideos"
],

"Social Media": [
    "follow", "like", "share", "comment", "subscribe", "trend", "viral", "post", "instagood", "photooftheday",
    "picoftheday", "fashion", "instadaily", "like4like", "followme", "tagsforlikes", "beautiful", "nature", 
    "happy", "cute", "tbt", "repost", "smile", "friends", "fun", "love", "selfie", "instapic", "socialmedia",
    "influencer", "instafamous", "likesforlikes", "f4f", "followback", "lfl", "likeforfollow", "tagsforlikes", "likeforlike", "commentback",
    "photo", "photography", "photooftheweek", "photographer", "instaphoto", "bestphoto", "capture", "moment", "snapshot", "pictures",
    "art", "artist", "instaart", "drawing", "sketch", "painting", "digitalart", "artoftheday", "creative", "graphicdesign",
    "design", "illustration", "doodle", "colorful", "creative", "artwork", "artoftheday", "graphic", "graphics", "adobe",
    "adobeillustrator", "photoshop", "adobephotoshop", "aftereffects", "cinema4d", "3d", "3dart", "c4d", "animation", "animator",
    "motiongraphics", "motiondesign", "cinematography", "video", "videoedit", "videographer", "videography", "vfx", "fx", "specialeffects",
    "music", "musician", "musicproducer", "song", "musicvideo", "instamusic", "singer", "musiclover", "musicislife", "instasong",
    "songwriter", "recording", "recordingstudio", "mixing", "mix", "dj", "deejay", "club", "dance", "dancer",
    "dancersofinstagram", "dancemoms", "dancelife", "danceteam", "danceschool", "dancelove", "dancelover", "danceclass", "dancers",
    "dancefloor", "dancevideo", "choreography", "choreographer", "dancing", "dancedance", "instadance", "streetdance", "ballet", "hiphop",
    "modernart", "contemporaryart", "streetart", "publicart", "visualart", "fineart", "artgallery", "artcollector", "artlife", "artistsoninstagram",
    "artlovers", "abstractart", "popart", "modernart", "artworld", "gallery", "collector", "artsy", "artstagram", "art_spotlight",
    "artofvisuals", "visualsoflife", "visualartist", "visualdiary", "visualcontent", "visualart", "visualinspiration", "visualambassadors", "visualsgang",
    "visualsofearth", "visualmobs", "visual_heaven", "visual_creatorz", "visualartistry", "visualscollective", "visualjourney", "visual_creator", "visualscollective", "visualauthority",
    "instaphotography", "instaartwork", "instaartist", "instaartsy", "instaartistic", "instaartoftheday", "instaartpop", "instaartlife", "instaartistsoninstagram", "instaartlove",
    "instaartistic", "instaartgallery", "instaartshow", "instaartstudio", "instaartstyle", "instaartgallery", "instaartwork", "instaartistic", "instaartoftheday", "instaartpop",
    "instaartlife", "instaartsoninstagram", "instaartlove", "instaartistic", "instaartgallery", "instaartshow", "instaartstudio", "instaartstyle", "instaartfair", "instaartpiece",
    "instaartexhibition", "instaartpop", "instaartpost", "instaartistic", "instaartwork", "instaartist", "instaartsy", "instaartistic", "instaartoftheday", "instaartpop",
    "instaartlife", "instaartistsoninstagram", "instaartlove", "instaartistic", "instaartgallery", "instaartshow", "instaartstudio", "instaartstyle", "instaartfair", "instaartpiece",
    "instaartexhibition", "instaartpop", "instaartpost"
],

"Motivation and Inspiration": [
    "motivation", "inspiration", "quote", "positivity", "success", "dream", "goal", "believe", "achieve", 
    "focus", "determination", "mindset", "strength", "courage", "confidence", "life", "passion", "grateful",
    "wisdom", "ambition", "drive", "persistence", "dedication", "growth", "empower", "motivationalquotes",
    "inspirationalquotes", "dailyquotes", "staypositive", "keepgoing", "nevergiveup", "hardwork", 
    "selflove", "selfcare", "selfdevelopment", "personaldevelopment", "positivethinking", "mindfulness", 
    "meditation", "mindful", "mindfulnessmeditation", "spirituality", "mentalhealth", "wellbeing", 
    "happiness", "joy", "selfmotivation", "selfbelief", "selfconfidence", "selfawareness", "innerpeace",
    "innerstrength", "overcome", "resilience", "perseverance", "patience", "achievement", "successmindset",
    "positivemindset", "growthmindset", "gratitude", "appreciation", "blessed", "affirmation", "lawofattraction",
    "manifestation", "abundance", "wealth", "money", "financialfreedom", "entrepreneur", "startup", "business",
    "leadership", "boss", "ceo", "founder", "invest", "investor", "investment", "strategy", "planning",
    "execution", "vision", "mission", "purpose", "legacy", "impact", "influence", "inspire", "mentor",
    "coaching", "coach", "training", "educate", "learn", "growthhacking", "personalbranding", "branding",
    "marketing", "digitalmarketing", "socialmarketing", "contentmarketing", "influencer", "socialinfluence",
    "impactful", "transformation", "change", "innovation", "creativity", "creative", "artist", "visionary",
    "artistic", "art", "design", "architecture", "landscape", "creativelife", "create", "creativeprocess",
    "artistry", "expression", "imagination", "visionary", "forwardthinking", "improvement", "evolve", "inspirational",
    "motivational", "motivated", "inspired", "visionboard", "dreambig", "visionary", "makeithappen", "hustle",
    "grind", "hardworkpaysoff", "workhard", "dreamchaser", "lifegoals", "dreamcatcher", "passion",
    "purposeful", "missiondriven", "visionaryleader", "mindsetiseverything", "focusonthegood", "goodvibes",
    "positivevibes", "believeinyourself", "trusttheprocess", "staystrong", "stayhumble", "stayfocused",
    "staymotivated", "staypositive", "neverquit", "stayinspired", "dailymotivation", "dailyinspiration",
    "inspireothers", "motivateothers", "uplift", "encourage", "positivityiskey", "positiveenergy",
    "positivelife", "positivethoughts", "positivevibesonly", "positivequotes", "positivemind",
    "positivemindset", "positiveselftalk", "positiveaffirmations", "positivethinking", "positiveoutlook",
    "positivestart", "positivechanges", "positivesteps", "positiveattitude", "positivechange", "positivewords",
    "positiveattitude", "positiveselfimage", "positiveresults", "positiveoutcome", "positivelifesyle",
    "positivechange", "positiveimpact", "positiveenergy", "positivemind", "positivethoughts", "positivelife",
    "positiveselftalk", "positiveaffirmations", "positivethinking", "positiveoutlook", "positivestart",
    "positiveattitude", "positivechange", "positivewords", "positivemindset", "positiveselfimage", "positiveresults",
    "positiveoutcome", "positivelifestyle", "positiveimpact", "positiveinfluence", "positivequote", "positivemotivation",
    "positivemindset", "positivethought", "positivethinking", "positivemindsetonly", "positivethinkingonly", "positiveresultsonly",
    "positivechangeonly", "positivethoughtsonly", "positivevibesonly", "positivequotesonly", "positivemindonly", "positivemindsetonly",
    "positivethoughtsonly"
],

"Health and Fitness": [
    "health", "fitness", "exercise", "workout", "gym", "training", "fitfam", "fitspo", "fitlife", 
    "fitgirl", "fitboy", "gymlife", "fitnessmotivation", "fitgoals", "fitnessjourney", "getfit", "cardio",
    "strength", "muscle", "weightlifting", "lifting", "bodybuilding", "powerlifting", "crossfit", "yoga",
    "pilates", "stretching", "flexibility", "mobility", "aerobics", "zumba", "dancefitness", "kickboxing",
    "boxing", "mma", "running", "jogging", "trailrunning", "marathon", "halfmarathon", "cycling", "biking",
    "mountainbiking", "swimming", "triathlon", "ironman", "nutrition", "healthyfood", "cleaneating", "eatclean",
    "nutritiontips", "mealprep", "protein", "carbs", "fats", "vitamins", "minerals", "supplements", "smoothie",
    "juicing", "hydration", "water", "healthylifestyle", "wellness", "selfcare", "mentalhealth", "stressrelief",
    "meditation", "mindfulness", "wellbeing", "healthychoices", "healthyliving", "healthylife", "healthylifestyle",
    "healthylunch", "healthybreakfast", "healthydinner", "healthyrecipes", "healthymeals", "healthysnack", "healthymealprep",
    "weightloss", "fatloss", "losingweight", "burnfat", "weightlossjourney", "weightlossmotivation", "weightlosstips",
    "weightlosssupport", "fitnessgoals", "goalsetting", "motivation", "inspiration", "determination", "commitment",
    "progress", "transformation", "beforeandafter", "fitover40", "fitover50", "fitover60", "fitover70", "fitover80",
    "fitnessaddict", "fitnessfreak", "fitnesslife", "fitnessinspiration", "fitnessmodel", "fitnesscoach", "fitnessgirls",
    "fitnessboy", "fitnessjourney", "fitnessgoal", "fitnessmotivationdaily", "fitnessgirl", "fitnessman", "fitnesslove",
    "fitnessmodels", "fitnesslifestyle", "fitnessphysique", "fitnessfood", "fitnessaddicted", "fitnesscoachonline", "fitnesslover",
    "fitnessinspo", "fitnesswear", "fitnessquotes", "fitnesstips", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes", "fitnessjunkie", "fitnessinstructor", "fitnessadict", "fitnesslife", "fitnesspageforall", "fitnesslover",
    "fitnessphysique", "fitnessworld", "fitnessforlife", "fitnesslifestyles", "fitnessfashion", "fitnesswomen", "fitnessinspiration",
    "fitnesstime", "fitnessforlife", "fitnessforwomen", "fitnessinstructor", "fitnessmom", "fitnesslife", "fitnesstime",
    "fitnessgear", "fitnessguru", "fitnesslife", "fitnessfirst", "fitnessforlife", "fitnesslove", "fitnessfashion", "fitnessjourney",
    "fitnessforlife", "fitnessisfun", "fitnessguy", "fitnessgoal", "fitnessjunkie", "fitnesslifestyle", "fitnesslover",
    "fitnessgirls", "fitnessmen", "fitnessmotivation", "fitnessphysique", "fitnesslife", "fitnesswomen", "fitnessmen",
    "fitnesscoach", "fitnesscoachonline", "fitnessquotes", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes", "fitnessjunkie", "fitnessinstructor", "fitnessadict", "fitnesslife", "fitnesspageforall", "fitnesslover",
    "fitnessphysique", "fitnessworld", "fitnessforlife", "fitnesslifestyles", "fitnessfashion", "fitnesswomen", "fitnessinspiration",
    "fitnesstime", "fitnessforlife", "fitnessforwomen", "fitnessinstructor", "fitnessmom", "fitnesslife", "fitnesstime",
    "fitnessgear", "fitnessguru", "fitnesslife", "fitnessfirst", "fitnessforlife", "fitnesslove", "fitnessfashion", "fitnessjourney",
    "fitnessforlife", "fitnessisfun", "fitnessguy", "fitnessgoal", "fitnessjunkie", "fitnesslifestyle", "fitnesslover",
    "fitnessgirls", "fitnessmen", "fitnessmotivation", "fitnessphysique", "fitnesslife", "fitnesswomen", "fitnessmen",
    "fitnesscoach", "fitnesscoachonline", "fitnessquotes", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes", "fitnessjunkie", "fitnessinstructor", "fitnessadict", "fitnesslife", "fitnesspageforall", "fitnesslover",
    "fitnessphysique", "fitnessworld", "fitnessforlife", "fitnesslifestyles", "fitnessfashion", "fitnesswomen", "fitnessinspiration",
    "fitnesstime", "fitnessforlife", "fitnessforwomen", "fitnessinstructor", "fitnessmom", "fitnesslife", "fitnesstime",
    "fitnessgear", "fitnessguru", "fitnesslife", "fitnessfirst", "fitnessforlife", "fitnesslove", "fitnessfashion", "fitnessjourney",
    "fitnessforlife", "fitnessisfun", "fitnessguy", "fitnessgoal", "fitnessjunkie", "fitnesslifestyle", "fitnesslover",
    "fitnessgirls", "fitnessmen", "fitnessmotivation", "fitnessphysique", "fitnesslife", "fitnesswomen", "fitnessmen",
    "fitnesscoach", "fitnesscoachonline", "fitnessquotes", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes", "fitnessjunkie", "fitnessinstructor", "fitnessadict", "fitnesslife", "fitnesspageforall", "fitnesslover",
    "fitnessphysique", "fitnessworld", "fitnessforlife", "fitnesslifestyles", "fitnessfashion", "fitnesswomen", "fitnessinspiration",
    "fitnesstime", "fitnessforlife", "fitnessforwomen", "fitnessinstructor", "fitnessmom", "fitnesslife", "fitnesstime",
    "fitnessgear", "fitnessguru", "fitnesslife", "fitnessfirst", "fitnessforlife", "fitnesslove", "fitnessfashion", "fitnessjourney",
    "fitnessforlife", "fitnessisfun", "fitnessguy", "fitnessgoal", "fitnessjunkie", "fitnesslifestyle", "fitnesslover",
    "fitnessgirls", "fitnessmen", "fitnessmotivation", "fitnessphysique", "fitnesslife", "fitnesswomen", "fitnessmen",
    "fitnesscoach", "fitnesscoachonline", "fitnessquotes", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes", "fitnessjunkie", "fitnessinstructor", "fitnessadict", "fitnesslife", "fitnesspageforall", "fitnesslover",
    "fitnessphysique", "fitnessworld", "fitnessforlife", "fitnesslifestyles", "fitnessfashion", "fitnesswomen", "fitnessinspiration",
    "fitnesstime", "fitnessforlife", "fitnessforwomen", "fitnessinstructor", "fitnessmom", "fitnesslife", "fitnesstime",
    "fitnessgear", "fitnessguru", "fitnesslife", "fitnessfirst", "fitnessforlife", "fitnesslove", "fitnessfashion", "fitnessjourney",
    "fitnessforlife", "fitnessisfun", "fitnessguy", "fitnessgoal", "fitnessjunkie", "fitnesslifestyle", "fitnesslover",
    "fitnessgirls", "fitnessmen", "fitnessmotivation", "fitnessphysique", "fitnesslife", "fitnesswomen", "fitnessmen",
    "fitnesscoach", "fitnesscoachonline", "fitnessquotes", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes", "fitnessjunkie", "fitnessinstructor", "fitnessadict", "fitnesslife", "fitnesspageforall", "fitnesslover",
    "fitnessphysique", "fitnessworld", "fitnessforlife", "fitnesslifestyles", "fitnessfashion", "fitnesswomen", "fitnessinspiration",
    "fitnesstime", "fitnessforlife", "fitnessforwomen", "fitnessinstructor", "fitnessmom", "fitnesslife", "fitnesstime",
    "fitnessgear", "fitnessguru", "fitnesslife", "fitnessfirst", "fitnessforlife", "fitnesslove", "fitnessfashion", "fitnessjourney",
    "fitnessforlife", "fitnessisfun", "fitnessguy", "fitnessgoal", "fitnessjunkie", "fitnesslifestyle", "fitnesslover",
    "fitnessgirls", "fitnessmen", "fitnessmotivation", "fitnessphysique", "fitnesslife", "fitnesswomen", "fitnessmen",
    "fitnesscoach", "fitnesscoachonline", "fitnessquotes", "fitnesstrainer", "fitnesswomen", "fitnessmen", "fitnesscoachonline",
    "fitnessquotes"
],

"Technology": [
    "technology", "tech", "innovation", "futuretech", "techie", "technews", "techworld", "techgeek", 
    "technologynews", "emergingtech", "techlover", "digital", "digitaltransformation", "digitization", 
    "techlife", "technologies", "techies", "iot", "internetofthings", "cloud", "cloudcomputing", 
    "bigdata", "datascience", "machinelearning", "deeplearning", "artificialintelligence", "ai", 
    "robotics", "automation", "cybersecurity", "infosec", "blockchain", "cryptocurrency", "bitcoin", 
    "ethereum", "blockchaintechnology", "smarttechnology", "smartcity", "smartphones", "mobile", 
    "mobileapps", "appdevelopment", "webdevelopment", "software", "programming", "coding", "developer", 
    "programmer", "code", "coder", "webdesign", "ux", "ui", "userexperience", "userinterface", 
    "digitalmarketing", "socialmedia", "socialmediamarketing", "onlinebusiness", "ecommerce", 
    "startup", "entrepreneur", "entrepreneurship", "business", "smallbusiness", "techstartup", 
    "innovate", "innovators", "invention", "gadget", "gadgets", "wearabletech", "ar", "vr", 
    "augmentedreality", "virtualreality", "techblog", "techblogger", "techtrends", "technologyrocks", 
    "technologylover", "technologyaddict", "technologist", "futuretechnology", "hightech", 
    "cuttingedgetechnology", "techtalk", "techworld", "techgeek", "technerd", "techsavy", 
    "techupdate", "techgadgets", "techlovers", "techtoys", "technophile", "geek", "nerd", 
    "gametech", "it", "informationtechnology", "computerscience", "digitalrevolution", 
    "roboticsengineering", "engineering", "stem", "science", "scientist", "research", 
    "researchanddevelopment", "techtrends", "techrevolution", "futuristic", "future", 
    "techinvasion", "emergingtech", "moderntechnology", "techgenius", "techindustry", 
    "techteam", "techcommunity", "technologysolutions", "techworld", "techculture", 
    "techreviews", "techknowledge", "techsolution", "techpartners", "techtutorial", 
    "techeducation", "techclass", "techlab", "techstudio", "techconference", "techcompany", 
    "techuniverse", "techsavvy", "techadvice", "techhelp", "techforum", "techsupport", 
    "techconsulting", "techtips", "techtrends", "techstartups", "techcompany"
],

"Entertainment": [
    "entertainment", "movies", "music", "celebrity", "hollywood", "bollywood", "cinema", "film", 
    "acting", "actor", "actress", "director", "producer", "screenplay", "blockbuster", "boxoffice", 
    "awards", "redcarpet", "premiere", "star", "superstar", "popculture", "entertainer", "entertain", 
    "showbiz", "celeb", "fame", "fans", "fanclub", "idol", "idolize", "glamour", "style", "fashion", 
    "trend", "celebratelife", "celebration", "party", "musician", "band", "concert", "performance", 
    "livemusic", "rocknroll", "singer", "songwriter", "hit", "album", "charttopper", "musicindustry", 
    "popmusic", "classicalmusic", "hiphop", "rap", "countrymusic", "dance", "dancer", "choreography", 
    "dancefloor", "dancelife", "choreographer", "dancingqueen", "performer", "stage", "theatre", 
    "musical", "broadway", "play", "drama", "comedy", "tragedy", "actorlife", "actresslife", 
    "script", "screen", "cast", "crew", "filmmaker", "filmmaking", "cinematography", "editing", 
    "specialeffects", "hollywoodlife", "bollywoodlife", "moviebuff", "filmlover", "movienight", 
    "filmfestival", "filmography", "filmcritic", "moviegeek", "moviemagic", "moviequotes", 
    "moviemaking", "movieaddict", "movietime", "filmindustry", "filmreview", "tvshow", 
    "television", "tvseries", "bingewatch", "netflix", "amazonprime", "hulu", "streaming", 
    "tvactor", "tvactress", "tvshowtime", "tvaddict", "tvbinge", "tvlife", "tvlover", 
    "tvseriesaddict", "tvwatching", "tvshowaddict", "tvtime", "series", "episode", 
    "seasonpremiere", "seasonfinale", "tvstreaming", "tvnetwork", "tvprogram", 
    "tvstation", "tvcomedy", "tvdrama", "tvfan", "tvshowquotes", "tvshowmarathon", 
    "tvshowtime", "tvaddiction", "tvshowlover", "tvseriesjunkie", "tvshowobsessed"
],

"Fashion": [
    "fashion", "style", "fashionblogger", "fashionista", "ootd", 
    "instafashion", "fashionstyle", "fashiongram", "fashionable", "fashionaddict", 
    "fashionlover", "fashiondiaries", "fashionweek", "fashionblog", "fashiondesign", 
    "fashionmodel", "fashiondaily", "fashionpost", "fashioninspiration", "fashionista", 
    "streetstyle", "outfit", "outfitoftheday", "fashionphotography", "moda", 
    "styleinspiration", "stylish", "trend", "trendy", "lookbook", 
    "ootdfashion", "fashionista", "instastyle", "fashionlovers", "fashiongoals", 
    "fashionicon", "styleblogger", "highfashion", "couture", "chic", 
    "styleblog", "fashionweek", "runway", "streetwear", "fashionaddict", 
    "fashiondesigners", "mensfashion", "womensfashion", "fashiontrends", "fashioninfluencer", 
    "fashiontips", "vintagefashion", "fashionbloggerstyle", "fashionista", "fashioneditorial", 
    "fashionart", "fashionlover", "fashionphotographer", "fashionpost", "fashionbrand", 
    "fashionstyle", "fashionmood", "fashionlife", "fashiondaily", "fashiondiary", 
    "streetfashion", "fashionbloggers", "fashionmodels", "fashionqueen", "fashioncommunity", 
    "fashionstyles", "fashionvibes", "fashionbloggerlife", "fashiontrends", "fashionworld", 
    "fashionaddicts", "fashionclothing", "fashionlook", "fashionillustration", "fashionlifestyle", 
    "fashionoutfit", "fashioncampaign", "fashionforward", "fashionjunkie", "fashionlover", 
    "fashionparis", "fashionpeople", "fashionportrait", "fashionphotograph", "fashionseason", 
    "fashionupdate", "fashionweeks", "fashionweekparis", "fashionweeks", "fashion", 
    "fashionshow", "fashionmagazine", "fashiondesigner", "fashiondailystyle", "fashionmoda", 
    "fashionperfection", "fashionstreetstyle"
],

"Travel": [
    "travel", "travelgram", "traveling", "travelling", "travelphotography", "travelblogger", 
    "traveler", "wanderlust", "vacation", "holiday", "trip", "explore", "adventure", 
    "instatravel", "travellife", "tourist", "tourism", "traveldiaries", "traveladdict", 
    "globetrotter", "traveltheworld", "exploretheworld", "travelmore", "igtravel", 
    "instavacation", "passportready", "roadtrip", "jetsetter", "lovetotravel", 
    "worldtraveler", "travelpics", "travelphoto", "travelblog", "travelguide", 
    "adventureseeker", "explorer", "solotravel", "backpacker", "nature", "beach", 
    "mountains", "landscape", "sunset", "sunrise", "beautifuldestinations", "paradise", 
    "wanderer", "roamtheplanet", "worldtour", "globetrotter", "vacationmode", 
    "traveljunkie", "exploring", "adventuretime", "instapassport", "mytravelgram", 
    "traveldeeper", "wonderlust", "igworldclub", "travelbug", "touristlife", 
    "holidayvibes", "instavacation", "travelgoals", "bucketlist", "travelawesome", 
    "postcardsfromtheworld", "travelinspiration", "doyoutravel", "traveller", 
    "travelblogging", "welivetoexplore", "worldcaptures", "adventureawaits", 
    "exploremore", "travelcommunity", "stayandwander", "openmyworld", "exploretocreate", 
    "letsgosomewhere", "welivetoexplore", "vacationtime", "instatrip", "exploringtheglobe", 
    "getaway", "travelwithme", "aroundtheworld", "instago", "travelawesome", 
    "travelpicsdaily", "travel_drops", "wildernessculture", "worldingram", "ourplanetdaily", 
    "travel_drops", "earthpix", "fantastic_earth", "discoverearth", "ig_masterpiece", 
    "awesome_earthpix", "theglobewanderer", "earthofficial", "lonelyplanet", 
    "stayandwander", "travelandlife", "natgeotravel", "tourtheplanet", "travelcouple", 
    "lifeofadventure", "letsgoeverywhere", "visualsoflife", "voyaged", "adventurenthusiasts", 
    "discover_vacations", "passionpassport", "wonderful_places", "ig_exquisite"
],

"Food": [
    "food", "foodie", "foodporn", "instafood", "yummy", "delicious", "foodgasm", 
    "foodlover", "foodphotography", "foodstagram", "foodblogger", "foodpics", 
    "foodies", "foodcoma", "foodblog", "foodiesofinstagram", "foodgram", "foodoftheday", 
    "foodislife", "eat", "eating", "hungry", "tasty", "yummyfood", "chef", "cheflife", 
    "homemade", "cooking", "cook", "recipe", "recipes", "cookingtips", "dinner", 
    "lunch", "breakfast", "brunch", "dessert", "sweets", "snack", "fastfood", "foodart", 
    "foodlover", "foodiesunite", "foodiegram", "foodjourney", "foodspotting", "fooddiary", 
    "foodshare", "eathealthy", "healthyeating", "healthylifestyle", "healthyfood", 
    "nutrition", "organic", "cleaneating", "vegan", "vegetarian", "glutenfree", 
    "dairyfree", "wholefoods", "superfood", "freshfood", "seasonalfood", "farmtotable", 
    "locallysourced", "foodadventure", "foodstory", "foodculture", "worldfood", 
    "foodheaven", "foodfantasy", "foodpassion", "foodtrip", "foodoftheworld", 
    "foodanddrink", "foodlover", "foodlife", "fooddaily", "foodaddict", "foodblogfeed", 
    "foodfeature", "foodgallery", "foodheaven", "foodphotograph", "foodpic", "foodpicsdaily", 
    "foods", "foodspotting", "foodstyling", "foodstylist", "foodwaste", "foodwithaview", 
    "forkyeah", "gastroart", "getinmybelly", "gourmet", "gourmetfood", "huffposttaste", 
    "huffpostgram", "iifym", "igfood", "igfoodies", "ilovefood", "inmykitchen", 
    "instafoodie", "instafoods", "instayum", "kitchen", "kitchenlife", "localfood", 
    "localfoods", "lovefood", "makesmewhole", "mealprep", "mealprepping", "myfood", 
    "myfoodgram", "nomnom", "onthetable", "onthetableproject", "onthetablemagazine", 
    "onthetablephotography", "paleo", "paleodiet", "paleofood", "plantbased", 
    "plantbaseddiet", "plantbasedfood", "realfood", "realfooding", "realfoods", 
    "recipeoftheday", "recipesofinstagram", "recipeshare", "recipetime", "shareyourtable", 
    "superfoods", "tastespotting", "thekitchn", "thenewhealthy", "thefeedfeed", 
    "wholefood", "wholefoodsmarket", "wholefoodsfaves", "wholesomefood", "wholesomefoods", 
    "wholesomeingredients", "yum", "yummie", "yummiest", "yummyinmytummy", "yummytime", 
    "feedfeed", "buzzfeast", "forkfeed", "huffposttaste", "eatfamous", "yougottaeatthis", 
    "eattheworld", "devourpower", "lovefood", "foodstagram", "foodgawker", "eatingfortheinsta", 
    "forkyeah", "dailyfoodfeed", "huffposttaste", "food52", "yahoofood", "mywilliamssonoma"
],

"Beauty": [
    "beauty", "makeup", "skincare", "beautyblogger", "beautytips",
    "beautycare", "instabeauty", "makeuptutorial", "beautyproducts", "selfcare",
    "makeuplover", "makeupartist", "glow", "beautyinfluencer", "cosmetics",
    "makeuplife", "beautyroutine", "naturalbeauty", "beautyjunkie", "makeupaddict",
    "beautycommunity", "beautyblog", "skincareroutine", "beautyproduct", "beautylover",
    "skincarejunkie", "skincareproducts", "makeupgoals", "beautyessentials", "beautybloggers",
    "makeupideas", "beautytrends", "beautyobsessed", "makeupcommunity", "makeuptips",
    "skincareaddict", "beautyfavorites", "beautyguru", "makeuplooks", "beautyreview",
    "makeupart", "beautyaddict", "skincareblogger", "beautygoals", "beautyinspo",
    "makeupblogger", "beautybloggerlife", "makeupcollection", "skincarelover", "makeupjunkie",
    "beautyshop", "makeupinspiration", "beautyblogging", "skincarecommunity", "makeuplovers",
    "beautycaretips", "beautytherapy", "skincareroutine", "makeupproducts", "makeupporn",
    "beautygirls", "beautyface", "beautybox", "makeuplove", "beautyhaul",
    "makeupobsessed", "beautyblogger", "makeuptransformation", "beautyvideo", "makeupenthusiast",
    "beautyinspiration", "makeupartistsworldwide", "beautyqueen", "skincareaddicts", "beautytrends",
    "makeupmua", "beautyskin", "makeuprevolution", "beautytutorials", "makeuptime",
    "beautytalk", "makeupinspo", "beautyjunkies", "makeuplook", "beautyblogger",
    "makeupbloggers", "beautyforever", "makeupfreak", "beautyeditor", "makeupbysarah",
    "beautymakeup", "skincaregoals", "beautylife", "makeupfanatic", "beautyshots",
    "makeupstories", "beautyschool", "makeuploversunite", "beautyislife", "makeupfun",
    "beautyshopper", "skincareessentials", "beautyinfluencers", "makeupstash", "beautybloggerworld"
],

"Lifestyle": [
    "lifestyle", "lifestyleblogger", "instalifestyle", "lifestylephotography", "lifestyleblog",
    "lifestyleinspo", "lifestyleinspiration", "lifestylechanges", "lifestylegoals", "lifestylevlogger",
    "lifestylecoach", "lifestylepost", "lifestylechoice", "lifestylejourney", "lifestylechange",
    "lifestylephotographer", "lifestylemagazine", "lifestylefitness", "lifestylebusiness", "lifestylemodel",
    "lifestyledesign", "lifestylebrand", "lifestyletravel", "lifestylebeauty", "lifestylefood",
    "lifestyledaily", "lifestyleentrepreneur", "lifestylemotivation", "lifestylestore", "lifestylebloggers",
    "lifestyler", "lifestylefamily", "lifestyletrend", "lifestylewoman", "lifestylekids",
    "lifestylereview", "lifestyleandtravel", "lifestyleluxury", "lifestylenews", "lifestyleforyou",
    "lifestylemood", "lifestylecontent", "lifestylewellness", "lifestyleliving", "lifestylefitnessmotivation",
    "lifestyleupdate", "lifestylereporter", "lifestylefashion", "lifestylemag", "lifestyleblogging",
    "lifestylehealth", "lifestylelook", "lifestylechoices", "lifestyleover40", "lifestyleover50",
    "lifestyledesigners", "lifestylewriter", "lifestylehacks", "lifestyleposts", "lifestylemodeling",
    "lifestylefun", "lifestylediaries", "lifestyleaccount", "lifestyledecor", "lifestylevideo",
    "lifestylemindset", "lifestylelovers", "lifestyleadvice", "lifestylegoals", "lifestylerecipes",
    "lifestyleblogger", "lifestyleworld", "lifestylefitnessjourney", "lifestylenetwork", "lifestyletips",
    "lifestylecollective", "lifestylephotograph", "lifestyleinvesting", "lifestyleartist", "lifestyletoday",
    "lifestyleadventures", "lifestyleguide", "lifestyledesign", "lifestyleroutine", "lifestylefitness",
    "lifestylecoach", "lifestylebloggerlife", "lifestyleportrait", "lifestylefitnesscoach", "lifestylenews",
    "lifestyle", "lifestylepost", "lifestylemom", "lifestylekids", "lifestylefamily",
    "lifestylereporter", "lifestyletraveller", "lifestylehunter", "lifestyleenthusiast", "lifestylefashion",
    "lifestyleexpert", "lifestyleplanning", "lifestylecreatives", "lifestylechoices", "lifestyleforyou"
],

"Finance": [
    "finance", "financialfreedom", "financetips", "financialliteracy", "financeblogger", 
    "financemotivation", "financialindependence", "financegoals", "financialplanning", 
    "finances", "financialadvisor", "financeblog", "financialeducation", 
    "financialadvice", "financecoach", "financelife", "financetips", "financialsuccess", 
    "financialwellness", "financetoday", "financejourney", "financialadvisor", 
    "financialgrowth", "finance101", "financialgoals", "financeworld", "financialfreedom", 
    "financeblogger", "financialplanning", "financemotivation", "financialeducation", 
    "financialliteracy", "financeblog", "financialadvice", "financelife", 
    "financeguru", "financialsuccess", "financehelp", "financesavvy", "financehacks", 
    "financestrategy", "financialwellbeing", "financejourney", "financialcoach", 
    "financepro", "financialadvisor", "financegoals", "financialgrowth", 
    "financeinvesting", "financialindependence", "financetips", "financeplan", 
    "financialeducation", "financecommunity", "financialadvisor", "financeliteracy", 
    "financialcoaching", "financebloggers", "financialpeace", "financeadvice", 
    "financialfreedom", "financeblog", "financialwellness", "financetoday", 
    "financialadvisor", "financegoals", "financialplanner", "financelife", 
    "financialwellbeing", "financeblogger", "financialsuccess", "financemotivation"
],

"Education": [
    "education", "learning", "teaching", "school", "students", "teacher", "teachers", 
    "kids", "study", "classroom", "knowledge", "learningisfun", "educationmatters", 
    "educational", "teach", "learn", "student", "class", "edtech", "homeschool", 
    "teacherlife", "parenting", "children", "college", "university", "elearning", 
    "preschool", "edchat", "edutainment", "primaryschool", "middleschool", 
    "highschool", "curriculum", "onlinelearning", "stem", "studentlife", 
    "backtoschool", "reading", "writing", "mathematics", "science", "socialstudies", 
    "history", "geography", "languagearts", "literacy", "teachergram", "teachersfollowteachers", 
    "teacherresources", "teachersofinstagram", "iteach", "iteachtoo", "teachersofig", 
    "teachingideas", "teachertribe", "teacherssupportteachers", "specialeducation", 
    "sped", "elementaryeducation", "earlychildhoodeducation", "educationquotes", 
    "teacherproblems", "studentteacher", "studentengagement", "teachertips", 
    "educationfirst", "edtechchat", "educationforall", "teachingresources", 
    "futureteacher", "teacherlifeisthebestlife", "educationispower", "teacherstyle", 
    "teachertalk", "futureteachers", "teachingresources", "iteachfirst", "iteachk", 
    "iteachsecond", "iteachthird", "iteachfourth", "iteachfifth", "iteachsped", 
    "teacherstuff", "teacherfashion", "teacherideas", "teacherfriends", "teacherhacks", 
    "teacherblogger", "teacherblog", "teachercommunity", "teachersrock"
],

"Sports": [
    "sports", "fitness", "sport", "workout", "training", 
    "exercise", "gym", "fitnessmotivation", "healthy", "fit",
    "football", "basketball", "soccer", "baseball", "running",
    "athlete", "gymmotivation", "instasport", "sportswear", "team",
    "yoga", "sportslife", "sportsnews", "sportsphotography", "active",
    "sportstraining", "sportsday", "sportsperformance", "sportsfit", "sportsman",
    "sportsclub", "sportsfun", "sportsgoals", "sportslover", "sportsaddict",
    "sportsgear", "sportsnutrition", "sportsphysiology", "sportsfitness", "sportsathlete",
    "sportslove", "sportsblogger", "sportsvibes", "sportsperson", "sportsmindset",
    "sportsrecovery", "sportsfashion", "sportsfan", "sportslifestyle", "sportsmanagement",
    "sportsbrand", "sportsenthusiast", "sportscoach", "sportsbetting", "sportsfanatic",
    "sportstravel", "sportsupdates", "sportsfocus", "sportsjourney", "sportsmedicine",
    "sportspodcast", "sportstech", "sportsinspiration", "sportsandfitness", "sportshub",
    "sportsperformancecoach", "sportsanalysis", "sportsbettingtips", "sportshighlights", "sportsquotes",
    "sportsphysiotherapy", "sportscontent", "sportsmind", "sportsarena", "sportsleague",
    "sportsillustrated", "sportsanalytics", "sportsscience", "sportschallenge", "sportsreporter",
    "sportsbroadcast", "sportscommentary", "sportscommunity", "sportstv", "sportsnewsupdate",
    "sportseditorial", "sportscoverage", "sportsaction", "sportsworkout", "sportstherapy",
    "sportswellness", "sportschampion", "sportsnutritiontips", "sportsnetwork", "sportsmanagement",
    "sportsupdate", "sportsperformance", "sportsrecovery", "sportsblog", "sportsbrand",
    "sportscoach", "sportsmindset", "sportsnutrition", "sportsgear", "sportslife"
],

"Politics": [
    "politics", "political", "news", "government", "election",
    "vote", "democracy", "politicalnews", "politician", "politicalscience",
    "politicsnews", "politicsmatter", "politicalcampaign", "politicaldebate", "politicsdaily",
    "politicsandnews", "politicalissues", "politicalviews", "politics", "politicalanalysis",
    "politicsworld", "politicslife", "politicsdiscussion", "politicsblog", "politicschat",
    "politicsinamerica", "politicsforum", "politicstoday", "politicsmatter", "politicsupdate",
    "politicswatch", "politicscoverage", "politicalcommentary", "politicalviews", "politicaldebate",
    "politicsnow", "politicsblogger", "politicsforyou", "politicsglobal", "politicslive",
    "politicalleaders", "politicalmovement", "politicalevents", "politicsandgovernment", "politicscommunity",
    "politicsontheweb", "politicsandmedia", "politicsmatter", "politicsandculture", "politicsandlife",
    "politicsandelections", "politicsaroundtheworld", "politicsbriefing", "politicsandpolicies", "politicsnow",
    "politicsmedia", "politicscoverage", "politicalviews", "politicaldiscourse", "politicszone",
    "politicscentral", "politicsblog", "politicalscience", "politicsnewsupdate", "politicsroundup",
    "politicsinfo", "politics", "politicsmatters", "politicsdailyupdate", "politicschat",
    "politicalscienceblog", "politicalnews", "politicsforum", "politicsandnewsupdate", "politicsreview",
    "politicsdebate", "politicaldebates", "politicsdiscussion", "politicsreports", "politicsforyou",
    "politicswatch", "politicalwatch", "politicsandpolicy", "politicsamerica", "politicsblogger",
    "politicsnews", "politics", "politicscoverage", "politicalviews", "politicaldebate",
    "politicszone", "politicalanalysis", "politicsupdates", "politicswatchlive", "politicsdaily",
    "politicscommunity", "politicsmatters", "politicslive", "politicalforum", "politicalnewsupdate"
],

"News and Information": [
    "news", "breakingnews", "worldnews", "newsupdate", "trendingnews",
    "latestnews", "newstoday", "newsalert", "headlines", "currentevents",
    "newsoftheday", "dailynews", "newsreport", "newsfeed", "newshour",
    "newsworthy", "newspaper", "newsmedia", "newsreporter", "newsroom",
    "newscoverage", "localnews", "globalnews", "newsupdates", "newschannel",
    "newsheadlines", "newsnow", "newslive", "newsnetwork", "newsbreaking",
    "newstrends", "newsbulletin", "newsstories", "newsblog", "newsblogger",
    "newsanchor", "newsmagazine", "newspaperheadline", "newssource", "newsinfo",
    "newspost", "newstalk", "newsportal", "newslatest", "newstodaylive",
    "newshub", "newscommunity", "newscontent", "newscoverage", "newssite",
    "newsstory", "newsbuzz", "newscast", "newsdesk", "newsjournal",
    "newsworld", "newsjournalist", "newsupdatesdaily", "newsweekly", "newsflash",
    "newstrend", "newsbrief", "newsvideo", "newsclip", "newsphoto",
    "newsinsight", "newsarticle", "newsbroadcast", "newsspecial", "newscorner",
    "newsreel", "newsinsider", "newsmaker", "newsrepublic", "newsaddict",
    "newsbits", "newslink", "newsexclusive", "newscenter", "newsvibes",
    "newsfacts", "newsexpress", "newsportal", "newsroomlive", "newssnippet",
    "newsperspective", "newsline", "newshighlights", "newscircles", "newsblogpost",
    "newsroundup", "newsreview", "newscircle", "newsdaily", "newsinsights",
    "newsandinfo", "newsbeat", "newsdesk", "newswire", "newsinstant",
    "newshourlive", "newstop", "newsknow", "newsworthycontent", "newsonline"
],

"Science": [
    "science", "sciencenews", "sciencefacts", "scienceisawesome", "sciencerules",
    "scientist", "scienceeveryday", "sciencelover", "sciencefactsdaily", "sciencelife",
    "sciencegeek", "scienceexperiment", "scienceteacher", "scienceofnature", "scienceeducation",
    "sciencefun", "scienceclass", "scienceforkids", "scienceblogger", "scienceandnature",
    "sciencegram", "sciencephotography", "sciencekids", "sciencefair", "scienceiscool",
    "sciencenerd", "scienceart", "scienceandtech", "sciencematters", "scienceexplorer",
    "sciencelab", "scienceworld", "sciencetime", "sciencemuseum", "sciencejournal",
    "sciencefactsforyou", "sciencerules", "scienceiscool", "scienceillustration", "sciencecenter",
    "scienceblog", "sciencestudent", "sciencefacts", "scienceoflife", "sciencelovers",
    "sciencenerd", "scienceculture", "scienceandtechnology", "scienceexperiments", "scienceeducation",
    "scienceofeverything", "sciencesharing", "scienceandmore", "sciencetime", "scienceworld",
    "sciencefun", "scienceandtech", "sciencefactsforyou", "sciencereport", "sciencelab",
    "scienceandnature", "sciencekids", "sciencepics", "sciencerules", "sciencefair",
    "sciencenews", "sciencefactsdaily", "scienceiscool", "scienceisawesome", "scienceblogger",
    "sciencephotography", "sciencenerd", "sciencelover", "scienceforkids", "sciencegeek",
    "sciencegram", "sciencetime", "sciencefair", "scienceclass", "scienceeducation",
    "scienceforkids", "sciencerocks", "sciencereport", "sciencefacts", "scienceexplorer",
    "scienceandtech", "scienceiscool", "scienceclub", "scienceisfun", "scienceofnature",
    "scienceteachers", "scienceclub", "scienceiscool", "sciencegeek", "scienceeveryday",
    "sciencenerd", "scienceandtechnology", "scienceworld", "scienceoftheday", "scienceiscool"
],

"Relationships": [
    "relationships", "love", "relationshipgoals", "couplegoals", "relationshipadvice",
    "dating", "relationshiptips", "lovequotes", "relationshipquotes", "relationshipproblems",
    "relationshipgoals❤️", "relationshipstatus", "relationshiphelp", "relationshipadvice",
    "relationshipmatters", "relationshiptalk", "relationshipgoals👫", "relationshipcoach", "relationshipquotesdaily",
    "relationshiptherapy", "relationshipblogger", "relationshipmemes", "relationshiphumor", "relationshipissues",
    "relationshipbuilding", "relationshipsuccess", "relationshiplife", "relationshipquotes💑", "relationshiptipsandadvice",
    "relationshipcoach", "relationshipadviceoftheday", "relationshipposts", "relationshipblog", "relationshipvibes",
    "relationshipquotes💕", "relationshipjourney", "relationshipbonding", "relationshipadvice101", "relationshipadviceforyou",
    "relationshiphacks", "relationshiprules", "relationshipadvicefromwomen", "relationshiptalks", "relationshipexperts",
    "relationshipadviceforwomen", "relationshipadviceformen", "relationshipquotesforyou", "relationshipstrong", "relationshiptalk",
    "relationshipstrength", "relationshipquotesdaily", "relationshipadviceblog", "relationshipadviceposts", "relationshipquotesgram",
    "relationshipquotes❤️", "relationshipquotesoftheday", "relationshipgoal", "relationshipbuildingblocks", "relationshipfocus",
    "relationshiptruth", "relationshipgrowth", "relationshipblogging", "relationshipposts", "relationshipquotesinspiration",
    "relationshipadviceandtips", "relationshipadviceandguidance", "relationshipadviceblog", "relationshipguidance", "relationshipcounseling",
    "relationshipcoaching", "relationshipfacts", "relationshiptipsforyou", "relationshipquotespage", "relationshipinspo",
    "relationshipcommunity", "relationshipquotesinspirational", "relationshipadvice101", "relationshipquotesforyou❤️", "relationshipquotesoftheday💕",
    "relationshipstronger", "relationshipgoalsinspiration", "relationshipquotesforhim", "relationshipquotesforher", "relationshiplove",
    "relationshipstrengthening", "relationshipinspiration", "relationshipquotestogoals", "relationshipadvicecommunity", "relationshipquoteschallenge",
    "relationshipadvicefromexperts", "relationshipquotesoflove", "relationshipquotesdaily❤️", "relationshiptipsdaily", "relationshiplovequotes",
    "relationshipwisdom", "relationshipstrengthquotes", "relationshiptipsblog", "relationshipquotesforever", "relationshipadviceforever",
    "relationshipquotesfortoday", "relationshipwisdomquotes", "relationshipgoals❤️👫", "relationshipquote", "relationshipadvice💑"
],

"Business": [
    "business", "entrepreneur", "startup", "businessowner", "smallbusiness",
    "businessman", "businesswoman", "entrepreneurship", "businessgrowth", "businessideas",
    "businesslife", "businessminded", "businessstrategy", "businessdevelopment", "businesstips",
    "businesssuccess", "businessopportunity", "businesstalk", "businessgoals", "businessmindset",
    "businesscoach", "businessmotivation", "businessmantra", "businessmentor", "businessquotes",
    "businessadvice", "businessnetworking", "businessexpert", "businessmarketing", "businessplanning",
    "businessconsulting", "businessmanagement", "businessleaders", "businessjourney", "businesspassion",
    "businesssolutions", "businessgoals", "businessstrategy", "businessownerlife", "businessblog",
    "businessideas", "businessconsultant", "businesstraining", "businessblogger", "businessleadership",
    "businessforlife", "businessvision", "businessmind", "businessgrind", "businessinnovation",
    "businessonline", "businessgrowthtips", "businessplanner", "businessbuilder", "businesswomen",
    "businessnetwork", "businessbranding", "businesstipsdaily", "businessmeetings", "businesscoaching",
    "businessinsider", "businesspartner", "businessdevelopmenttips", "businessmentor", "businesshacks",
    "businessadvicefromthepros", "businessstrategies", "businessopportunities", "businessownerlife", "businessowners",
    "businessnetworkingtips", "businessmanagementtips", "businessmarketingtips", "businessjourney", "businessplans",
    "businessleaders", "businessmotivationdaily", "businessmindset", "businessquotesdaily", "businesscoachingtips",
    "businessmentor", "businessadvice", "businessmentoring", "businessstartups", "businessstrategies",
    "businesspassion", "businessplanning", "businessconsulting", "businesssolutions", "businessgrowthhacks",
    "businessblogging", "businessleadersdaily", "businessstrategyhacks", "businessgrowthstrategies", "businessopportunities",
    "businessforlife", "businessinnovation", "businessminded", "businessstrategyplanner", "businessplanningtips",
    "businessbranding", "businesscoachingdaily", "businessnetworking", "businessconsultingtips", "businessadvicefromexperts"
],

"Career": [
    "career", "careerdevelopment", "careergoals", "careeradvice", "careercoach",
    "careerpath", "careerchange", "careeropportunities", "careeradvancement", "careersuccess",
    "careerplanning", "careerbuilding", "careermentor", "careerprogress", "careerjourney",
    "careerfocus", "careerstrategy", "careergoals", "careergrowth", "careermotivation",
    "careertransition", "careerexploration", "careertips", "careeradvice", "careerplanning",
    "careerdevelopmenttips", "careerstrategies", "careerexplorer", "careermindset", "careerhacks",
    "careeradvicefromthepros", "careergoalsdaily", "careerchangetips", "careerinspiration", "careersteps",
    "careerdriven", "careeroptions", "careerexpert", "careerlife", "careerpassion",
    "careermove", "careerready", "careershift", "careerfulfillment", "careerservices",
    "careerguide", "careerdevelopmentplan", "careerchoices", "careerpathways", "careerjourney",
    "careersuccess", "careergoalsplanner", "careersearch", "careerroadmap", "careermentor",
    "careercoaching", "careerconsultant", "careerplanningguide", "careercoachingtips", "careerexploration",
    "careerbuilding", "careerready", "careerresources", "careerchangeadvice", "careertransitiontips",
    "careerempowerment", "careerhelp", "careercoaching", "careermentoradvice", "careerstrategytips",
    "careerpathway", "careeradviceforyou", "careerboost", "careergoalsplanner", "careerchoices",
    "careerexplorationdaily", "careerambition", "careercoach", "careeropportunity", "careerdevelopmentplan",
    "careersearchtips", "careermoves", "careerachievement", "careernetworking", "careerpath",
    "careertransitionadvice", "careerplanningtips", "careerbuildingblocks", "careerdrive", "careeropportunities",
    "careernavigation", "careerexplorationguide", "careerpassion", "careercoachingadvice", "careerguidance",
    "careeradvicetoday", "careerbuildingtools", "careerjourneyguide", "careercoachingonline", "careermentorhelp",
    "careerdevelopmenttools", "careerplanningresources", "careersearch", "careergoalsguide", "careeradvicefromexperts"
],

"Animals and Pets": [
    "animals", "pets", "petsofinstagram", "animallovers", "petlovers",
    "dogsofinstagram", "catsofinstagram", "instapet", "instaanimal", "petstagram",
    "animalphotography", "petphotography", "puppylove", "kittylove", "doglover",
    "catlover", "animallover", "petlife", "petcare", "petlove",
    "animalsofinstagram", "doglife", "catlife", "furbaby", "petparents",
    "dogmom", "catmom", "animallove", "petfamily", "petscorner",
    "petadventures", "animalfriends", "petfriends", "petsagram", "animalcare",
    "petsofIG", "animalrescue", "petrescue", "puppiesofinstagram", "kittensofinstagram",
    "petsofig", "animalplanet", "petsarefamily", "animalplanet", "petstagram",
    "petlifestyle", "pets_of_instagram", "animalworld", "petsarelife", "animalkingdom",
    "petcommunity", "animalrescue", "petsrule", "animalplanet", "petsofinsta",
    "petday", "petfashion", "animalslover", "petsdaily", "animalfun",
    "petsoftheday", "animalsinfluence", "petsworld", "animalloversunite", "petsofinsta",
    "animalsofinstagram", "petlife", "animalsofig", "petsforever", "animalsareawesome",
    "pets4life", "animalantics", "petantics", "animalvideos", "petvideos",
    "petgram", "animalshelter", "petshelter", "petadoption", "animaladoption",
    "petsarelove", "animaladdicts", "petaddicts", "animalfriends", "petfriends",
    "animalspics", "petpics", "animalsnap", "petsnap", "animalpal",
    "petsgram", "animallifestyle", "petlifestyle", "animalpics", "petpics",
    "animalinsta", "petinsta", "animaltales", "pettales", "animalworld"
],

"Photography": [
    "photography", "photooftheday", "photographer", "instaphoto", "photographylovers",
    "photo", "photographyeveryday", "photographyislife", "photographyart", "photographylover",
    "photographysouls", "photographyday", "photographyislifee", "photographyworld", "photographyislife",
    "photographylife", "photographylove", "photographyaddict", "photographygeek", "photographyskills",
    "photographyislove", "photographystudio", "photographybusiness", "photographyislifee", "photographyblog",
    "photographymagazine", "photographyislifee", "photographyisart", "photography_daily", "photographysouls",
    "photographyislife", "photographyislifee", "photographyeveryday", "photography_daily", "photographyblogger",
    "photography_videos", "photographyislove", "photographyeverywhere", "photographyislife", "photographymaster",
    "photographydaily", "photographyart", "photographyislifee", "photographyskills", "photography_love",
    "photographyislife", "photographyoftheday", "photographydaily", "photographyeveryday", "photographysouls",
    "photographytips", "photographyislifee", "photographyoftheday", "photographyaddict", "photographyislove",
    "photography_skills", "photography_daily", "photographygear", "photographylover", "photographyeverywhere",
    "photographyart", "photographysouls", "photographydaily", "photography_love", "photographymagazine",
    "photographyskills", "photographyislifee", "photography_love", "photographyislife", "photographylovers",
    "photographysoul", "photographyart", "photographylove", "photographyblogger", "photographyeverywhere",
    "photographyisart", "photography_daily", "photographyislife", "photographylover", "photographymaster",
    "photographygear", "photography_love", "photographyislife", "photographyislove", "photographydaily",
    "photographytips", "photography_skills", "photographysoul", "photographyart", "photography_blog",
    "photographyskills", "photographygear", "photographyisart", "photographyaddict", "photographyisart",
    "photographyislifee", "photography_skills", "photographylife", "photography_love", "photographymagazine"
],

"Music": [
    "music", "musiclover", "musicislife", "musician", "musiclife",
    "musicfestival", "musicvideo", "musicproducer", "musical", "musiclovers",
    "musicindustry", "musicians", "musicianlife", "musiciansofinstagram", "musicismylife",
    "musicalbum", "musicartist", "musictime", "musiclove", "musicproduction",
    "musicstudio", "musicgram", "musicianslife", "musicphotography", "musicproducerlife",
    "musicmonday", "musiciansofinstagram", "musicislove", "musicoftheday", "musicaddict",
    "musicianswanted", "musicworld", "musiciansdaily", "musicvibes", "musicsession",
    "musicman", "musicality", "musicismylife🎶", "musicfan", "musicfans",
    "musicaddiction", "musicdaily", "musicvideooftheday", "musichits", "musiccover",
    "musicjourney", "musicfam", "musicalgenius", "musicnotes", "musicislove🎶",
    "musicloverforever", "musicgeek", "musically", "musicmaster", "musiccommunity",
    "musicband", "musicplaylist", "musicforever", "musictime🎶", "musicculture",
    "musicfreak", "musicpassion", "musicwave", "musiccity", "musicteacher",
    "musicallyminded", "musicstars", "musicalbumrelease", "musicianlife🎶", "musicproducergram",
    "musicvideooftheday🎶", "musictalent", "musiccreation", "musicproductionlife", "musicmaker",
    "musicianworld", "musicfeature", "musictour", "musicexplorer", "musicjam",
    "musicmagic", "musicmind", "musicalgenius🎶", "musicnerd", "musicvisuals",
    "musicianship", "musiceducation", "musiccreators", "musicart", "musicmagazine",
    "musicartistry", "musicreview", "musictalentsearch", "musicphotographer", "musicpromotion",
    "musicjourney🎶", "musichouse", "musicvibes🎶", "musictalk", "musicblog"
],

"Art": [
    "art", "artist", "artwork", "artoftheday", "artistic",
    "artistic_nation", "artistic_share", "artlife", "artlovers", "artgallery",
    "artworld", "artstagram", "artstudio", "art_spotlight", "artcollective",
    "artlover", "artworks", "artshow", "artisticdreamers", "artofvisuals",
    "artofinstagram", "artislife", "artistry", "artisticexpression", "artisticcommunity",
    "artisticview", "artisticmind", "artisticminds", "artistic_unity", "artistic_visions",
    "artistic_features", "artisticnature", "artistic_eye", "artisticstyle", "artistic_share",
    "artisticminds", "artisticphotography", "artisticphoto", "artistic_unity", "artisticmindset",
    "artisticnature", "artisticexpression", "artisticcommunity", "artisticphotographer", "artisticphotographers",
    "artistic_view", "artisticvision", "artisticdesign", "artisticexpressionist", "artisticnaturelover",
    "artisticdesigns", "artisticcommunity", "artisticmindfulness", "artisticphotographers", "artisticstyle",
    "artisticview", "artisticart", "artisticmood", "artisticexpressionism", "artisticcommunity",
    "artisticnature", "artisticview", "artisticvision", "artisticphoto", "artistic_souls",
    "artisticexpression", "artisticcommunity", "artisticview", "artisticnaturephotography", "artistic_unity",
    "artisticstyle", "artisticvision", "artisticphotographer", "artistic_unity", "artisticmindset",
    "artisticnature", "artisticexpression", "artisticcommunity", "artisticminds", "artisticdreams",
    "artisticnaturephotographer", "artisticview", "artisticvision", "artisticexpressionist", "artisticnaturelover",
    "artisticdesigns", "artisticcommunity", "artisticmindfulness", "artisticphotographers", "artisticstyle",
    "artisticview", "artisticart", "artisticmood", "artisticexpressionism", "artisticcommunity"
],
  
"Gaming": [
    "gamer", "game", "videogames", "gamingcommunity", "gaminglife", "gamers",
    "gamingsetup", "pcgaming", "gamingmemes", "gamingislife", "gamingnews",
    "gaminggirl", "gamingposts", "gamingroom", "gamingstation", "gaminggear",
    "gamingaddict", "gamingtime", "gamingphotography", "gamingkeyboard", "gamingconsole",
    "gamingchair", "gamingart", "gamingworld", "gamingclips", "gamingchannel",
    "gaminglove", "gamingfun", "gamingfamily", "gamingandfitness", "gamingaddiction",
    "gaminggirls", "gaminglifestyle", "gamingday", "gamingnerd", "gaming4ever",
    "gamingnation", "gamingguru", "gamingindustry", "gamingstuff", "gamingmode",
    "gamingdaily", "gamingpassion", "gamingsetupgoals", "gamingkeyboard", "gamingposts",
    "gamingworld", "gaminglove", "gaminggear", "gamingroom", "gaminglife",
    "gamingfun", "gamingtime", "gamingchannel", "gaminggirl", "gamingmeme",
    "gamingandfitness", "gaming4life", "gamingsetup", "gamingphotography", "gamingconsole",
    "gamingstation", "gamingclips", "gamingart", "gamingaddict", "gamingcommunity",
    "gamingroom", "gaminglife", "gamingfun", "gamingtime", "gamingsetup",
    "gamingchannel", "gaminggirl", "gamingmeme", "gamingandfitness", "gaming4life",
    "gamingsetup", "gamingphotography", "gamingconsole", "gamingstation", "gamingclips",
    "gamingart", "gamingaddict", "gamingcommunity", "gamingchair", "gamingworld",
    "gamingsetup", "gaminglife", "gamingposts", "gamingsetup", "gamingmemes",
    "gamingchannel", "gaminglove", "gamingnation", "gamingroom", "gamingfun",
    "gaminglifestyle", "gaminggear", "gamingindustry", "gamingstuff", "gamingmode",
    "gamingnation", "gamingdaily", "gamingpassion", "gamingsetupgoals", "gamingkeyboard",
    "gamingposts", "gamingworld"
],

"Books": [
    "books", "booklover", "bookworm", "bibliophile", "bookstagram",
    "bookish", "reading", "booknerd", "bookaddict", "bookcommunity",
    "bookaholic", "booksofinstagram", "booklove", "bookrecommendations", "bookclub",
    "bookphotography", "bookblogger", "readersofinstagram", "instabook", "bookobsessed",
    "booklife", "bookcollection", "bookstore", "goodreads", "bookquotes",
    "bookreview", "bookishfeatures", "amreading", "bookporn", "bookoftheday",
    "igreads", "booktag", "bookcover", "bookloverforlife", "currentlyreading",
    "bookaesthetic", "bookgeek", "ilovebooks", "bookishlove", "booksbooksbooks",
    "bookart", "bookstack", "booknerdigans", "bookgram", "bookaddiction",
    "totalbooknerd", "bookblog", "bookhaul", "bookaddicts", "booknerdigan",
    "bookmarks", "bookclubofinstagram", "bookstoread", "bookcommunitylove", "bookdragons",
    "booksarelife", "readinglife", "bookchallenges", "booktography", "bookshelf",
    "bookwormlife", "bookhoarder", "bookrecommendation", "bookfeature", "bookishcommunity",
    "bookloverlife", "bookreader", "bookcollector", "booksforever", "bookgrammer",
    "bookreading", "bookjourney", "bookloverclub", "bookstacks", "bookobsession",
    "booknerdlife", "bookaddictionisreal", "bookhaulshare", "bookphoto", "bookcommunitylove",
    "bookwormsunite", "bookaestheticgoals", "bookishfeatures", "bookishpost", "bookreaderlife",
    "bookrecommendationsarelife", "booksharks", "bookishthings", "bookaholics", "bookbloggersofinstagram",
    "bookhoarding", "booksaremagic", "readingchallenge", "booksonbooksonbooks", "bookgeeks",
    "readingforfun", "booksonly", "readersgonnaread", "booktuber", "bookishaf"
],

"Nature": [
    "nature", "naturelovers", "naturephotography", "naturegram", "naturelover",
    "nature_perfection", "nature_seekers", "nature_brilliance", "nature_shooters", "nature_wizards",
    "natureaddict", "natureonly", "nature_obsession", "naturewalk", "naturecaptures",
    "naturegeography", "naturebeauty", "naturephoto", "naturestyles", "naturediversity",
    "natureisbeautiful", "naturehippys", "naturelove", "natureplanet", "natureshot",
    "nature_good", "nature_prefection", "natureshots", "nature_seek", "natureisawesome",
    "natureaddicts", "naturepicture", "nature_hub", "nature_wonder", "nature_sky",
    "naturemoments", "naturemagical", "naturephotographer", "nature_specialist", "nature_earthpix",
    "naturepix", "naturephotography_lovers", "nature_photo", "nature_enthusiast", "natureseekers",
    "nature_perfection", "nature_brilliance", "nature_shooters", "nature_wizards", "natureadventure",
    "natureview", "naturegrammer", "natureshoot", "natureheals", "natureshot",
    "naturefreak", "naturewalks", "naturez", "nature_good", "naturewonder",
    "naturephotograph", "naturewatching", "natureperfection", "natureexplore", "natures",
    "nature_of_our_world", "nature_of_our_planet", "nature_of_the_earth", "nature_or_nothing", "nature_of_earth",
    "nature_of_plants", "nature_of_animals", "nature_of_trees", "nature_of_wildlife", "nature_of_life",
    "natureloversgallery", "natureupclose", "naturesbeauty", "natureaddiction", "naturephotos",
    "naturelove", "nature_hub", "nature_prefection", "nature_shooters", "nature_seekers",
    "naturehippys", "naturestyles", "natureinspired", "nature_vibes", "natureloverforlife",
    "natureandwildlife", "natureseekers", "naturegeography", "natureloverclub", "nature_captures",
    "nature_perfection", "naturegrammers", "nature_lovers_united", "nature_of_our_lives", "natureandme",
    "natureinspiredphotos", "nature_love_photography", "naturetrails", "nature_lovers", "nature_hiking"
],

"Movies and TV Shows": [
    "movies", "tvshows", "movienight", "cinema", "film",
    "movielover", "tvseries", "moviebuff", "television", "movietime",
    "filmmaking", "instamovies", "movieaddict", "filmlover", "cinematography",
    "movielovers", "tvfan", "movielife", "filmmaker", "movieposter",
    "binge", "moviequotes", "tvshow", "movietheater", "films",
    "filmcommunity", "moviefan", "moviegeek", "movienews", "moviemagic",
    "filmbuff", "cinemalovers", "moviestar", "movienerd", "cinemagram",
    "tvaddict", "moviemania", "movieworld", "moviejunkie", "filmphotography",
    "tvlover", "movienight🍿", "filmaddict", "movietrailers", "tvserieslover",
    "moviegram", "filmlife", "moviecritic", "tvcommunity", "filmisnotdead",
    "movieculture", "tvjunkie", "moviefreak", "filmlover", "cinemaaddict",
    "moviereview", "moviecollection", "filmfan", "moviescenes", "movietime🎥",
    "tvaddiction", "moviepremiere", "moviecommunity", "tvgeek", "filmmakers",
    "movieclub", "filmlovers", "movielove", "tvseriesaddict", "filmfestival",
    "movienightout", "moviewatchers", "filming", "moviemoments", "tvfanatic",
    "filmposter", "movielife🎬", "tvfilm", "moviefans", "movienights",
    "cinemalife", "moviebuffs", "filmnerd", "tvdrama", "moviesandtv",
    "filmcritics", "movieobsessed", "cinemafan", "filminglife", "movieworld🎬",
    "filmcommunity📽", "moviemagic🎥", "tvseriesjunkie", "filmobsessed", "moviegoers",
    "movielover🍿", "cinemaphile", "tvshowlover", "filmaddicts", "movienight📽",
    "cinemalovers🎬", "moviescene", "filmreview", "tvseriesfan", "movienerd🎥"
],

"History": [
    "history", "historical", "historylovers", "ancienthistory", "worldhistory",
    "historybuff", "historygeek", "historicalphotos", "historyfacts", "historians",
    "archaeology", "historicalplaces", "historynerd", "historic", "historicalfiction",
    "historyinpictures", "historychannel", "medievalhistory", "militaryhistory", "historicalfacts",
    "vintage", "ancient", "historicalarchitecture", "historicalevents", "historyofart",
    "past", "culturalheritage", "historicalsite", "historyiscool", "historicalbuildings",
    "historyphoto", "artifacts", "historicalfigure", "historicplaces", "historygram",
    "historylover", "historyinpictures", "historicalmemes", "historyteacher", "historyclass",
    "archaeologist", "historyofwar", "historicphotography", "ancientart", "historicaltravel",
    "worldwar", "historystudent", "historybooks", "historicalresearch", "medieval",
    "prehistoric", "historicalmonument", "historicalsite", "historyfactsdaily", "historicalpics",
    "ancientcivilization", "historicaltruth", "historicalartifacts", "historymuseum", "historicaltreasures",
    "historymatters", "historicalsociety", "historicalpreservation", "historyblogger", "historicalstudies",
    "historyclassroom", "historicalphotos", "historicaldocuments", "historyeducation", "historicalcollection",
    "historicallandmarks", "historyfun", "historicmoment", "historytoday", "ancientworld",
    "historylesson", "historicalcostume", "historyofscience", "historicalfigure", "historyiscool",
    "historyofcivilization", "historicalknowledge", "ancientartifacts", "historyenthusiast", "historymemes",
    "historypics", "historicalstory", "historyblog", "historicalmoments", "historysnapshots",
    "historyloversclub", "historicalfinds", "historicalperspective", "historyeveryday", "ancienthistoryfacts",
    "historicalfictionbooks", "historybuffs", "historicaljourney", "historyfactsandstories", "historicalfigures",
    "historyuncovered", "historyfacts", "historicalquotes", "historyenthusiasts", "historicalresearcher"
],

"Comedy": [
    "comedy", "funny", "comedylife", "comedian", "standup",
    "humor", "jokes", "fun", "hilarious", "laugh",
    "comedyclub", "standupcomedy", "comedyshow", "comedycentral", "funnyvideos",
    "comedyvideos", "funnyjokes", "comedynight", "funnymemes", "funnyposts",
    "funnytweets", "comedywriter", "funnylife", "comedyking", "funnyfaces",
    "comedyqueen", "laughing", "standupcomic", "comedygold", "funnypic",
    "comedytime", "comedyactor", "comedylovers", "funnyquotes", "funnytext",
    "comedymovie", "laughalot", "comedyfestival", "comedylove", "comedyseries",
    "funnyskits", "comedyfan", "laughhard", "comedymeme", "funnypranks",
    "comedycontent", "funnystories", "comedyday", "laughinghard", "comedyhour",
    "funnybone", "comedygram", "laughoutloud", "funnyvids", "comedywriting",
    "funnystuff", "comedyactor", "comedyclips", "laughs", "funnypeople",
    "comedyart", "funnyfails", "comedysketch", "laughriot", "funnycomedy",
    "comedymovies", "funnytimes", "laughoftheday", "funnypost", "comedyskits",
    "funnyclips", "comedyworld", "laugher", "funnyreels", "comedygold",
    "comedyfanatics", "laughingmatters", "funnycomedians", "comedyaddict", "laughcentral",
    "funnycontent", "comedyhour", "funnymoments", "comedyzone", "funnytalk",
    "comedybits", "funnyasheck", "comedygigs", "funnyposts", "comedykingdom",
    "laughaday", "funnyinsta", "comedyflicks", "laughfest", "comedyinspiration",
    "funnymemesdaily", "comedygenius", "laughchallenge", "funnygags", "comedygod",
    "laughfunny", "funnyandtrue", "comedylovers", "laughmore", "comedyfans"
],

"Viral Challenges": [
    "viralpics", "viralvideos", "viralchallenge", "challenges", "trending",
    "fun", "challengeaccepted", "viral", "trend", "socialmediachallenge",
    "challenge", "viralpost", "challengeyourself", "funnychallenge", "trendingnow",
    "viraltrend", "viralvideo", "challengeoftheday", "funchallenge", "viralchallenges",
    "challengewinner", "newchallenge", "crazychallenge", "dancechallenge", "viralchallenges",
    "funnyvideos", "viralmoment", "instachallenge", "challengeyourfriends", "popularchallenge",
    "funtimes", "viralposts", "instatrend", "darechallenge", "challengeyourfriends",
    "viral", "challengeideas", "popularchallenges", "funvideos", "trendchallenge",
    "viralhits", "socialchallenge", "crazychallenges", "dare", "viraltrending",
    "popularvideos", "viralcontent", "dailychallenge", "funnystuff", "latestchallenge",
    "challengeyourlimits", "trendingchallenge", "viralpic", "trendingnow", "challengetime",
    "viraltrends", "challengegame", "dareaccepted", "challenges", "popularchallenge",
    "viralvibes", "viralchallenge", "funnymoments", "trendingvideos", "dailychallenges",
    "trendingchallenge", "viral", "viralhits", "populartrending", "funchallenge",
    "instaviral", "funtrend", "viralchallenge", "fun", "trendingposts",
    "viralvideos", "trendychallenge", "viralpics", "instachallenges", "trendinghits",
    "viralcontent", "challengeaccepted", "socialmediachallenges", "funchallenge", "trendingmoments",
    "viralhits", "darechallenge", "challengeyourself", "trendychallenge", "socialchallenge",
    "instatrending", "viraltrending", "challengevideos", "popularhits", "viraltrendinghits",
    "instachallenge", "viralpost", "funtrending", "trendmoments", "viralhitsnow",
    "viralchallenge", "viralchallengehits", "trendingchallengehits", "challengeof", "trendingviral"
],

"Life Hacks": [
    "lifehacks", "lifehack", "tips", "diy", "hacks",
    "lifehacksdaily", "lifehackers", "lifetips", "smartideas", "tricks",
    "lifehacktips", "lifehacks", "lifehackersunite", "lifehackideas", "lifehacking",
    "dailyhacks", "easyhacks", "simplehacks", "quicktips", "diyhacks",
    "productivity", "smarttips", "lifehackers", "hacksandtips", "lifehacksforall",
    "everydayhacks", "lifetip", "lifeskills", "smartlife", "diyideas",
    "hacksdaily", "hacksthatwork", "lifetipsdaily", "simplelifehacks", "easyideas",
    "dailylifehacks", "lifetricks", "usefultips", "lifehackblog", "diyprojects",
    "smarthacks", "quickhacks", "lifeimprovement", "cleverideas", "lifehackersclub",
    "lifetipsandtricks", "easytricks", "lifehackersguide", "hackyourlife", "lifehackstips",
    "diylifehacks", "dailytricks", "lifehackersdaily", "simpletricks", "productivityhacks",
    "hackyourway", "lifehacktools", "easyhack", "lifetipsthatwork", "quickfixes",
    "dailyimprovements", "lifehackexpert", "tricksandtips", "everydaylifehacks", "easylifehacks",
    "lifehackideas", "smarterliving", "hacklife", "everydaytips", "diytips",
    "lifehackersunited", "hacksthathelp", "lifehacktipsandtricks", "improveyourlife", "quicksolutions",
    "lifehacksolutions", "everydayimprovement", "lifetipsandhacks", "hackideas", "easytips",
    "dailyhackstips", "usefullifehacks", "improvelife", "everydaytricks", "quickideas",
    "lifehackertips", "easylifehack", "simplehack", "lifehackdaily", "everydayhacksandtips",
    "diyhacksandtips", "improveeveryday", "smartliving", "lifehackcommunity", "lifehackhints",
    "dailyimprovementtips", "quicklifehacks", "lifehack", "smartlifehacks", "lifehackerideas",
    "dailyhacks", "easyhacksandtips", "smarthacktips", "lifehackersclub", "quicklifehacktips"
],

"Fitness Tips": [
    "fitnesstips", "fitness", "workout", "health", "fit",
    "fitnessmotivation", "fitlife", "exercise", "gym", "fitnessjourney",
    "fitnessgoals", "healthy", "workoutmotivation", "fitnesslife", "fitnessaddict",
    "fitfam", "fitnesslifestyle", "personaltrainer", "fitnessfreak", "getfit",
    "training", "fitnessinspiration", "healthylifestyle", "workouttips", "fitnesscoach",
    "fitnessmodel", "fitspiration", "gymlife", "fitspo", "gymmotivation",
    "fitnesslover", "fitnessgirl", "fitforlife", "strong", "fitnesslove",
    "bodybuilding", "fitnessfun", "fitgirls", "fitbody", "fitnessplan",
    "fitnessroutine", "trainhard", "fitnesstrainer", "fitnessfood",
    "healthychoices", "fitnessprogress", "workoutplan", "fitnessaddiction", "fitnesscommunity",
    "fitnesstip", "fitnessblogger", "train", "healthandfitness", "fitnessfirst",
    "fitnesstipsdaily", "workouttime", "fitnesslifehacks", "fitnesstips", "fitnessmotivation",
    "workoutideas", "fitnesstipsandtricks", "gymtips", "fitnessprogram", "stayfit",
    "fitnessadvice", "fitnesschallenge", "getstrong", "fitnessgoals", "workoutinspiration",
    "gymaddict", "fitnesscoach", "trainharder", "workoutvideos", "fitnesstransformation",
    "fitnesstipsforall", "exerciseadvice", "fitnessfreaks", "fitnessexpert", "fitnesstipsoftheday",
    "gymroutine", "fitnesshacks", "workoutplan", "gethealthy", "fitnessmindset",
    "fitnesstipsandadvice", "workoutroutine", "stayhealthy", "fitnessmotivationtips", "getfitstayfit",
    "healthtips", "exerciseplan", "fitnessguru", "fitnessjourney", "workoutgoals",
    "fitnesstipsdaily", "healthyliving", "fitnessblog", "workouttricks",
    "fitnessenthusiast", "fitnessexercise", "fitnessinspo"
],

"Cooking Recipes": [
    "cooking", "recipes", "food", "foodie", "cook",
    "yummy", "delicious", "homemade", "recipe", "foodlover",
    "chef", "foodporn", "cookingathome", "recipeoftheday", "foodstagram",
    "instafood", "tasty", "foodblogger", "easyrecipes", "foodgasm",
    "kitchen", "homecooking", "foodies", "cookbook", "foodpics",
    "healthyrecipes", "cookingtime", "dinner", "foodphotography", "foodiesofinstagram",
    "mealprep", "foodblog", "yum", "cookingram", "cookingrecipes",
    "eat", "cookinglife", "foodpic", "cookingisfun", "foodlover",
    "chefmode", "cookathome", "recipeideas", "mealideas", "foodforfoodies",
    "cookingideas", "chefsofinstagram", "tastemade", "cookingtips", "homechef",
    "kitchenlife", "quickrecipes", "foodlovers", "recipeinspiration", "foodvideo",
    "foodiegram", "cookingvideo", "recipevideos", "meal", "homechef",
    "culinary", "foodnetwork", "dinnerideas", "chefstyle", "cookingtutorial",
    "foodheaven", "recipeoftheweek", "eating", "fooddiary", "cookinglove",
    "recipeinspo", "kitchenhacks", "homemaderecipes", "foodshare", "foodforthought",
    "cookingday", "cookingtime", "cookingtipsandtricks", "foodhacks", "mealprepideas",
    "cookingfun", "foodcravings", "recipeoftheday", "foodinspiration", "deliciousfood",
    "homemadecooking", "mealprepping", "cheflife", "foodlover", "cookingfun",
    "foodadventures", "recipesideas", "foodrecipe", "kitchenadventures", "foodmagic",
    "cookingdelicious", "mealplan", "foodtime", "cookinggoals", "recipebook",
    "homecooked", "foodart", "recipeoftheday", "foodcreations", "mealpreparation"
],

"Gardening": [
    "gardening", "garden", "plants", "nature", "flowers",
    "gardener", "plantlover", "growyourown", "plantstagram", "gardenlife",
    "gardeninspiration", "gardens", "greenthumb", "gardendesign", "gardenlove",
    "homegarden", "urbangarden", "gardeningtips", "backyardgarden", "gardeners",
    "gardenideas", "flowergarden", "plantsofinstagram", "vegetablegarden", "plantsmakepeoplehappy",
    "gardenstyle", "gardeninglife", "gardeningisfun", "instagarden", "organicgardening",
    "gardentherapy", "gardenersofinstagram", "gardenbed", "gardenmagic", "gardenlove",
    "growyourownfood", "plantlove", "gardening101", "greenhouse", "gardenflowers",
    "gardeninghacks", "gardeningcommunity", "gardenfresh", "gardeningjoy", "gardenofinstagram",
    "gardenart", "growyourownveggies", "permaculture", "plantparenthood", "plantsplantsplants",
    "succulents", "gardenersworld", "flowerpower", "plantcommunity", "gardenwork",
    "gardenbeauty", "gardeningdaily", "plantaddict", "bloom", "plantcollection",
    "ediblegarden", "planting", "plantslover", "gardenfun", "gardeningtime",
    "gardentherapy", "plantparent", "plantobsessed", "gardenlife", "urbanjungle",
    "organicgarden", "growfood", "greengarden", "greenliving", "raisedbeds",
    "bloomandgrow", "gardeningseason", "plantsofinsta", "plantmom", "gardendecor",
    "gardentotable", "gardenphotography", "plantsofig", "gardeningtipsandtricks", "naturelover",
    "homegardening", "gardenhappy", "plantlife", "botanical", "gardenfarm",
    "plantlover", "gardenplants", "vegetablegardening", "gardenbeauty", "gardenerlife",
    "gardenersofinstagram", "gardengram", "gardenparty", "gardeningaddict", "gardeningfun",
    "gardenjoy", "gardenerslife", "plantlovers", "gardengoodies", "gardenwonder"
],

"Mindfulness": [
    "mindfulness", "meditation", "mindful", "selfcare", "wellness",
    "mentalhealth", "selflove", "meditate", "peace", "mindset",
    "calm", "health", "yoga", "selfcarematters", "relax",
    "selfawareness", "mindfulliving", "selfcompassion", "spirituality", "consciousness",
    "breathe", "awareness", "selfgrowth", "mentalwellness", "zen",
    "mindfulnesstraining", "positivity", "stressrelief", "mindfulnesspractice", "mindfulmovement",
    "healing", "mindfullife", "selfhealing", "innerpeace", "mindfulmoment",
    "wellbeing", "mindfullifestyle", "meditationtime", "selfreflection", "peaceofmind",
    "mindfulnessmeditation", "mindfulliving", "meditationpractice", "mindfulthinking", "mentalhealthawareness",
    "mindfulpractice", "mindfulnessexercises", "mindfulnesscoach", "selfcaretips", "mindfulnessmatters",
    "selfacceptance", "mindfullness", "selfdevelopment", "meditationspace", "mindfulnessjourney",
    "mindfulawareness", "mindfulnessquotes", "meditationtime", "mindfulbreathing", "mindfulnessmoment",
    "mindfulparenting", "meditationeveryday", "mindfulnessbasedcognitivetherapy", "mindfulnesstraining", "mindfulnessmeditation",
    "mindfulmovement", "mindfulthinking", "mindfulpractice", "mindfulnesscoach", "mindfulnessmatters",
    "mindfullness", "mindfulawareness", "mindfulnessquotes", "mindfulbreathing", "mindfulnessjourney",
    "mindfulparenting", "meditationtime", "mindfulnessbasedcognitivetherapy", "mindfulnessmeditation", "mindfulnessmoment",
    "mindfulnessexercises", "selfdiscovery", "mindfulhabits", "mindfulnesstechniques", "mindfulnessworkshop",
    "mindfulmoments", "mindfulnessforbeginners", "mindfulnesspractice", "mindfulphotography", "mindfulnesssoul",
    "mindfulmovement", "mindfulnature", "mindfulart", "mindfulcommunity", "mindfulninja",
    "mindfuleating", "mindfulnessmeditation", "mindfulnessjourney", "mindfulnesscoach", "mindfulnessquotes",
    "mindfulbreathing", "mindfulpractice", "mindfulnessmatters", "mindfulawareness", "mindfulnessquotes",
    "mindfulbreathing", "mindfulparenting", "mindfulnessbasedcognitivetherapy", "mindfulnessmeditation", "mindfulnessmoment",
],

"Wedding Ideas": [
    "wedding", "weddingideas", "bridetobe", "groomtobe", "weddinginspiration",
    "weddingplanning", "weddingday", "weddingdecor", "bride", "groom",
    "weddingphotography", "weddingdress", "bridal", "weddinginspo", "weddingdetails",
    "weddingstyle", "weddingflowers", "weddingparty", "weddingseason", "weddingfun",
    "bridestyle", "weddingcake", "weddinggoals", "weddingvenue", "weddingtime",
    "weddingvibes", "bridalshower", "weddingceremony", "weddingbells", "bridallook",
    "weddingphotographer", "weddingrings", "weddingfashion", "bridalstyle", "weddinghair",
    "weddinginvitation", "weddingreception", "weddingmakeup", "bridalmakeup", "groomstyle",
    "weddingdecorations", "bridalgown", "weddingplanningtips", "weddingtable", "weddingcakeideas",
    "weddingfavors", "weddingdressinspiration", "weddingflowersideas", "weddingvenueideas", "weddingbackdrop",
    "weddingarch", "weddingstationery", "weddingceremonyideas", "weddingpartyideas", "weddingentertainment",
    "weddingmusic", "weddinglighting", "weddingtransport", "weddingringsideas", "weddingjewelry",
    "weddingaccessories", "weddingveil", "weddingbouquet", "weddingcenterpieces", "weddingtablescape",
    "weddingseating", "weddingwelcome", "weddingguestbook", "weddingphotos", "weddingvideography",
    "weddingdance", "weddingtoast", "weddingdressshopping", "weddingdresstrends", "weddingplanningadvice",
    "weddingplanner", "weddingcoordinator", "weddingstylist", "weddingtrends", "weddingdaydetails",
    "weddingblog", "weddingblogger", "weddingmagazine", "weddingguide", "weddingtips",
    "weddinghacks", "weddingbudget", "weddinginspo", "weddinginspiration", "weddingdesign",
    "weddingcreative", "weddingstyling", "weddingcrafts", "weddingprojects", "weddingthemes",
    "weddingmotif", "weddingcolorpalette", "weddingceremonydecor", "weddingreceptiondecor", "weddingceremonyideas",
    "weddinginvitations", "weddingprograms", "weddingfavorsideas", "weddingguestideas", "weddingdayfun"
],

"Pet Care": [
    "petcare", "pets", "petlover", "petstagram", "doglover",
    "catlover", "petsofinstagram", "petlove", "puppy", "kitten",
    "dog", "cat", "pethealth", "petwellness", "petgrooming",
    "petfood", "petnutrition", "pettraining", "animalcare", "animallovers",
    "petadvice", "pethealthtips", "petlife", "petowner", "petsafety",
    "petparent", "dogcare", "catcare", "petwellbeing", "petfirstaid",
    "petvet", "petcheckup", "petsitter", "petboarding", "petdaycare",
    "petspa", "petmassage", "petexercise", "petactivity", "petplaytime",
    "dogwalk", "catplay", "petdiet", "petdietplan", "healthypet",
    "fitpet", "petnutritiontips", "petlovers", "pethealthcare", "petwellnesscenter",
    "petgroomer", "petshampoo", "petbrushing", "petteeth", "petdentalcare",
    "petcleaning", "petbath", "petwash", "petconditioner", "petcaretips",
    "pethealthcaretips", "petoftheday", "petsofig", "dogsofinstagram", "catsofinstagram",
    "puppylove", "kittenlove", "petparenting", "petsrule", "petmania",
    "petobsessed", "petgram", "petlifehacks", "petmom", "petdad",
    "dogmom", "catmom", "dogdad", "catdad", "petsarefamily",
    "petcommunity", "petsquad", "animalhealth", "animallover", "animalloversofinstagram",
    "petwellnesstips", "healthypets", "petcareadvice", "vetvisit", "petclinic",
    "petdoctor", "petsurgery", "petmeds", "petmedicine", "petlifestyle",
    "petfitness", "pettrainingtips", "pethealthandwellness", "petactivities", "pettips"
],

"Holiday Destinations": [
    "holidaydestinations", "travel", "vacation", "holiday", "wanderlust",
    "travelgram", "explore", "adventure", "beach", "tourism",
    "travelphotography", "instatravel", "travelling", "vacationmode", "traveladdict",
    "traveler", "holidayvibes", "getaway", "bucketlist", "roadtrip",
    "travelblogger", "holidaytime", "summerholiday", "traveling", "exploration",
    "paradise", "holidayfun", "dreamdestination", "holidaytrip", "naturetravel",
    "holidaymood", "luxurytravel", "travelholic", "travelpics", "adventuretime",
    "holidayinspo", "vacationvibes", "worldtraveler", "travelbug", "holidayseason",
    "holidayideas", "traveldestinations", "travelinspiration", "exploremore", "beachvacation",
    "holidayfun", "holidayideas", "holidayplanning", "holidayguide", "exploretheworld",
    "touristdestination", "holidayviews", "holidayescape", "holidaygoals", "vacationgoals",
    "adventureawaits", "vacationinspo", "holidaytrip", "traveldeeper", "traveladventures",
    "holidaylove", "vacationideas", "beachholiday", "travelstories", "seetheworld",
    "traveldiaries", "travelpicsdaily", "holidaydiary", "holidaymagic", "holidayplanner",
    "adventureseeker", "worldtravel", "holidaydreams", "beachtime", "discoverearth",
    "scenicview", "explorepage", "holidayparadise", "holidayphotos", "holidaybliss",
    "destinationholiday", "holidayinspiration", "travelcouple", "adventuredestination", "holidayescape",
    "holidayplaces", "touristspots", "holidayexperience", "vacationmemory", "traveldiary",
    "travelnow", "travellifestyle", "holidayadventures", "holidayspot", "holidaytravel",
    "holidaytravels", "holidayjourney", "holidaytrip", "holidayexplorer", "holidayresorts"
],

"Workout Routines": [
    "workout", "fitness", "exercise", "gym", "fitlife",
    "fitfam", "training", "healthylifestyle", "fitnessmotivation", "cardio",
    "strengthtraining", "workoutroutine", "fitspo", "fitnessjourney", "gymmotivation",
    "workoutmotivation", "health", "getfit", "fit", "fitnessaddict",
    "wellness", "muscle", "fitnesstraining", "fitnessgoals", "gymtime",
    "fitnesslife", "fitnessfreak", "fitnesslover", "workouttime", "exerciseideas",
    "gymlife", "bodybuilding", "weightlifting", "personaltrainer", "workoutideas",
    "workoutplan", "fitnessplans", "homeworkout", "gymworkout", "fitnesslifestyle",
    "workouts", "hiit", "yoga", "pilates", "stretching",
    "flexibility", "workoutoftheday", "instafit", "trainingday", "trainhard",
    "noexcuses", "gymlifestyle", "fitnessinspiration", "healthybody", "healthandfitness",
    "strength", "workoutathome", "workoutvideo", "fitgirls", "fitnessprogram",
    "sweat", "lifting", "fitspiration", "abs", "workouttips",
    "fitstagram", "gymshark", "muscles", "workoutgear", "workoutvideos",
    "fitnessroutine", "legday", "armworkout", "coreworkout", "fullbodyworkout",
    "fitnesschallenge", "fitnessaddiction", "fitgoals", "fitnessblogger", "squats",
    "pushups", "workoutflow", "cardioworkout", "strengthworkout", "weighttraining",
    "fitnesscoach", "dailyworkout", "workoutdiary", "fitnessdiary", "fitday",
    "workoutgoals", "burncalories", "workoutsession", "gymworkouts", "fitnesscommunity",
    "healthyliving", "workoutplans", "gymrat", "fitjourney", "workoutlover"
],

"Investment Tips": [
    "investmenttips", "investing", "finance", "investment", "wealth",
    "financialfreedom", "money", "financialliteracy", "stocks", "stockmarket",
    "investmentstrategy", "financialgoals", "wealthbuilding", "investingforbeginners", "personalfinance",
    "moneymanagement", "investmentportfolio", "financialplanning", "investmentadvice", "financialindependence",
    "wealthmanagement", "passiveincome", "investments", "retirementplanning", "financialeducation",
    "financialadvisor", "financialsuccess", "investmentopportunities", "financialgrowth", "investmentplan",
    "wealthcreation", "investmentstrategies", "smartinvesting", "financialwellness", "moneytips",
    "financialsecurity", "investmentfunds", "financialknowledge", "investmentideas", "financialfuture",
    "wealthgoals", "investingtips", "financialinvestments", "investor", "stockstoinvestin",
    "investmentplanner", "financetips", "investingwisely", "wealthbuildingtips", "investmentmentor",
    "financialadvisor", "investmentblog", "moneyinvesting", "investmentjourney", "financialmentor",
    "investmenthacks", "financialplanningtips", "financialfreedomtips", "wealthadvice", "investmentblogger",
    "investmentinsights", "financialhealth", "investmenttipsandtricks", "investmentstrategytips", "financialtips",
    "wealthmanagementtips", "investmentplanning", "financialindependencetips", "investmentfundtips", "moneywise",
    "financialgoalsplanning", "investmentguidance", "investmentexpert", "financialgrowthtips", "investmentsuccess",
    "wealthplanning", "investmentresources", "financialwellbeing", "investmenteducation", "financialadvisorinsights",
    "investmentportfoliotips", "investmentguides", "financialconsultant", "wealthsuccess", "investingsuccess",
    "financialjourney", "investmentplannerinsights", "investmentinspiration", "financialdreams", "investmentpotential",
    "wealthplanningtips", "investmentadvisor", "financialplanningadvice", "investmentopportunity", "moneyinvestmenttips",
    "financialinsights", "wealthstrategies", "investmentexpertadvice", "investmentmanagement", "moneystrategies",
    "investmentconsulting", "investmentwisdom", "financialadvisoradvice", "investmenttipsandadvice", "wealthbuildingstrategies"
],

"Health Tips": [
    "healthtips", "healthyliving", "wellness", "fitness", "nutrition",
    "healthylifestyle", "selfcare", "mentalhealth", "wellbeing", "healthyhabits",
    "health", "fitnessmotivation", "healthylife", "healthyeating", "healthandwellness",
    "healthychoices", "exercise", "fitlife", "healthylivingtips", "holistichealth",
    "wellnessjourney", "mindfulness", "lifestyle", "healthyeats", "healthybody",
    "diet", "healthcare", "fitfam", "healthymind", "healthylifechoices",
    "wellnesstips", "healthmatters", "cleaneating", "nutritiontips", "healthyfood",
    "healthy", "healthylivinghabits", "workout", "healthbenefits", "healthcoaching",
    "healthgoals", "wellnesscoach", "healthadvice", "healthylifestylechoices", "selflove",
    "fitnessjourney", "eatingclean", "healthfirst", "naturalhealth", "mentalwellness",
    "healthiness", "healthimprovement", "lifestylechange", "healthybodyandmind", "wellnesswarrior",
    "healthmotivation", "selfimprovement", "healthyandhappy", "healthjourney", "healthawareness",
    "nutritioncoach", "fitandhealthy", "healthcoach", "fitnessgoals", "livewell",
    "eathealthy", "wellnessblogger", "healthgoals2021", "holisticwellness", "wellnesscommunity",
    "mindandbody", "healthtipsforlife", "healthylifestylejourney", "selfcaretips", "nutritionadvice",
    "healthygut", "healthyfamily", "healthyme", "wellnessthatworks", "healthyish",
    "healthydiet", "fitspiration", "healthtipsdaily", "wellnessblog", "healthwellness",
    "fitnessadvice", "wellnesslifestyle", "healthliving", "healthandfitness", "healthhacks",
    "healthyisthenewskinny", "wellnessinspiration", "healthytips", "healthandnutrition", "wellnessliving",
    "healthfreak", "healthyfoodtips", "mindbodyhealth", "holisticliving", "healthierme",
    "eatclean", "stayhealthy", "nutritionfacts", "wellnessadvocate", "fitlife"
],

"Yoga Practices": [
    "yoga", "yogapractice", "yogalife", "yogainspiration", "yogalove",
    "yogadaily", "yogafit", "yogajourney", "yogachallenge", "yogapose",
    "yogateacher", "yogastudent", "yogaflow", "yogafun", "yogagirl",
    "yogaboy", "yogisofinstagram", "yogaforlife", "yogacommunity", "yogaforbeginners",
    "yogagoals", "yogabody", "yogafamily", "yogatherapy", "yogaposes",
    "yogaeveryday", "yogainstructor", "yogaforall", "yogamom", "yogadad",
    "yogakids", "yogapracticenotperfection", "yogafitlife", "yogameditation", "yogafitness",
    "yogaeverywhere", "yogapracticedaily", "yogaaddict", "yogastyle", "yogaforhealth",
    "yogaforwellbeing", "yogaforeveryone", "yogabalance", "yogaposesdaily", "yogainternational",
    "yogamind", "yogafunpose", "yogastrong", "yogisoul", "yogamotivation",
    "yogaformentalhealth", "yogapower", "yogachallengeaccepted", "yogaathome", "yogaforstrength",
    "yogaretreat", "yogapassion", "yogawisdom", "yogaforhappiness", "yogashala",
    "yogapractices", "yogalifestyle", "yogadailypractice", "yogaeverydamnday", "yogaenergy",
    "yogasequence", "yogaforflexibility", "yogaforbeginners", "yogabeginners", "yogaforbalance",
    "yogapath", "yogaaddicted", "yogaforpeace", "yogawithfriends", "yogateacherlife",
    "yogateachertraining", "yogaposeoftheday", "yogaoutdoors", "yogabreath", "yogaposesandpostures",
    "yogapracticeandalliscoming", "yogatherapyforhealth", "yogaforstrengthandflexibility", "yogameditationpractice", "yogaforinnerpeace",
    "yogajourneycontinues", "yogatribe", "yogainspirationdaily", "yogawellness", "yogaholic",
    "yogabeginner", "yogaforeverybody", "yogahomepractice", "yogaforrelaxation", "yogaforfitness",
    "yogaforallages", "yogaforathletes", "yogaforlifeandbeyond", "yogaforeveryonealways", "yogaforever",
    "yogadailyflow", "yogadailyinspiration", "yogadailypracticeandalliscoming", "yogameditationandrelaxation", "yogaforbodyandmind"
],

"Programming and Coding": [
    "programming", "coding", "developer", "webdevelopment", "softwareengineering",
    "programmer", "javascript", "python", "code", "tech",
    "codinglife", "programminglife", "coder", "dev", "developerlife",
    "frontend", "backend", "fullstack", "webdesign", "html",
    "css", "reactjs", "nodejs", "angular", "vuejs",
    "java", "cplusplus", "rubyonrails", "php", "swift",
    "kotlin", "dart", "golang", "typescript", "sql",
    "nosql", "database", "machinelearning", "artificialintelligence", "datascience",
    "bigdata", "cloudcomputing", "aws", "azure", "devops",
    "blockchain", "cryptography", "cybersecurity", "networking", "linux",
    "opensource", "programminglanguages", "codingcommunity", "learncoding", "codingbootcamp",
    "codingisfun", "codingchallenge", "codingjourney", "programminglife", "codeeveryday",
    "programmingmemes", "codingmemes", "codingaddict", "techlife", "programmingjokes",
    "programminghumor", "codingfun", "developerslife", "codeislife", "techcommunity",
    "programmingtutorial", "codetutorial", "learnprogramming", "codepen", "github",
    "stackoverflow", "codingproblems", "codingbootcamp", "developerhumor", "programmingaddict",
    "codingforbeginners", "programmingforbeginners", "codechallenge", "programmingchallenges", "softwaredeveloper",
    "webdev", "mobiledevelopment", "appdevelopment", "gamedevelopment", "unity3d",
    "unrealengine", "codinglifehacks", "techsavvy", "programminghacks", "developerhacks",
    "codingskills", "programmingtips", "codingtips", "codewars", "techenthusiast",
    "techgeek", "programmingenthusiast", "programminglove", "coderlife", "devlife"
],

"Startup Stories": [
    "startup", "entrepreneur", "business", "startuplife", "innovation",
    "entrepreneurship", "founder", "smallbusiness", "businessowner", "techstartup",
    "startups", "startupstory", "startupjourney", "startuplifestyle", "startupsuccess",
    "businessideas", "businessgrowth", "startupbusiness", "entrepreneurlife", "startupideas",
    "startuptips", "startupinspiration", "startuplove", "startupcommunity", "startupgrind",
    "startupnation", "startuplifehacks", "startupsuccessstory", "startuptipsandtricks", "startupfunding",
    "venturecapital", "angelinvestors", "businessstrategy", "businessmotivation", "businessdevelopment",
    "innovationhub", "techinnovation", "startupworld", "startupsupport", "entrepreneurmindset",
    "businessmindset", "scalingup", "bootstrapping", "startupfounders", "startupgrowth",
    "startuphustle", "entrepreneurjourney", "startuppassion", "startupweekend", "businessjourney",
    "entrepreneurinspiration", "founderlife", "startupstories", "startupwins", "startupgoals",
    "startupmentor", "techfounder", "startuplifehacks", "entrepreneurtips", "startupadvice",
    "startuptime", "techentrepreneur", "startupventures", "startupsrock", "smallbiz",
    "startuplifestylegoals", "startuplifetips", "entrepreneurgoals", "businessownerlife", "startupcommunitysupport",
    "founderstories", "startuphustleandgrind", "startuplifejourney", "smallbusinessowner", "entrepreneurlifestyle",
    "startuplifeadvice", "startuplifeinspiration", "startupquotes", "businessquotes", "entrepreneurquotes",
    "startuplifeinspo", "startuplifegoals", "startuplifejourney", "entrepreneurlifequotes", "businesssuccess",
    "startuplifetipsandtricks", "startupmentorship", "startuplifeadviceandtips", "startuptech", "startuplifequotes",
    "entrepreneurlifehacks", "startupgrindlife", "startupstoriesinspiration", "startupfounderstories", "startupstorysharing",
    "businessminded", "startupmotivation", "startupsupportcommunity", "entrepreneurshipjourney", "businesshustle"
],

"Coding Tips": [
    "codingtips", "programming", "coding", "developer", "code",
    "programmer", "webdevelopment", "softwaredevelopment", "codinglife", "programminglife",
    "learncoding", "codingcommunity", "codeeveryday", "dev", "frontend",
    "backend", "fullstack", "webdesign", "html", "css",
    "javascript", "python", "java", "cplusplus", "php",
    "ruby", "swift", "kotlin", "typescript", "sql",
    "nosql", "databases", "machinelearning", "ai", "datascience",
    "bigdata", "cloudcomputing", "aws", "azure", "devops",
    "blockchain", "cybersecurity", "networking", "linux", "opensource",
    "codingforbeginners", "learntocode", "codingbootcamp", "programmingtips", "coders",
    "developerlife", "codingisfun", "codingaddict", "codeislife", "codinghacks",
    "programminghacks", "codetips", "techlife", "programminghumor", "programmingmemes",
    "codingmemes", "developerhumor", "codingfun", "codereview", "debugging",
    "softwareengineer", "techcommunity", "codinginterview", "leetcode", "programmingchallenge",
    "codingchallenge", "techcareers", "developerjourney", "codingjourney", "codewithme",
    "codinglove", "programminglove", "codewars", "freecodecamp", "codecademy",
    "codepen", "github", "stackoverflow", "codingprojects", "buildtheweb",
    "developercommunity", "codinggoals", "codingbootcamp", "hackathon", "codinginterviews",
    "programminginterviews", "codereviewtips", "codingproductivity", "efficientcoding", "cleanarchitecture",
    "codeoptimization", "refactoring", "coderefactoring", "techblogs", "devto",
    "codingresources", "codingguides", "programmingresources", "codingtutorials", "programmingtutorials"
]
};

/* Function to generate hashtags based on user input and selected category */
function generateHashtags() {
    const inputWord = document.getElementById('inputWord').value.trim();
    const selectedCategory = document.getElementById('categoryDropdown').value;

    const inputField = document.getElementById('inputWord');
    const categoryField = document.getElementById('categoryDropdown');

    // Reset error classes
    inputField.classList.remove('error');
    categoryField.classList.remove('error');

    if (inputWord === '') {
        inputField.classList.add('error');
        alert('Please enter a word');
        return;
    }

    if (!selectedCategory) {
        categoryField.classList.add('error');
        alert('Please select a category');
        return;
    }

    // Show loading circle
    document.getElementById('loadingCircle').style.display = 'block';
    document.getElementById('hashtagsContainerWrapper').style.display = 'none';

    // Hide the reset button initially
    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = 'none';

    // Simulate a delay of 3 seconds (3000 milliseconds) before showing hashtags
    setTimeout(() => {
        // Hide loading circle
        document.getElementById('loadingCircle').style.display = 'none';

        document.getElementById('hashtagsContainerWrapper').style.display = 'flex';
        resetButton.style.display = 'block';
        resetButton.style.backgroundColor = 'black';  // Reset button color set to black

        const containerIds = [
            'hashtagsContainer1', 
            'hashtagsContainer2', 
            'hashtagsContainer3', 
            'hashtagsContainer4', 
            'hashtagsContainer5'
        ];

        containerIds.forEach(id => {
            const container = document.getElementById(id);
            container.innerHTML = '';
            const relatedWords = generateRelatedWords(inputWord, selectedCategory);
            appendHashtags(container, relatedWords);
        });
    }, 3000); // 3 seconds delay
}
  
/* Function to generate related words by combining input word with category-specific hashtags */
function generateRelatedWords(word, category) {
    const categoryTags = hashtagsByCategory[category] || [];
    // Shuffle the array and take the first 17 items
    const shuffledTags = categoryTags.sort(() => 0.5 - Math.random()).slice(0, 17);
    return shuffledTags.map(tag => `${word}${tag}`);
}

/* Function to append generated hashtags to the container */
function appendHashtags(container, words) {
    const fragment = document.createDocumentFragment();

    words.forEach(word => {
        const hashtag = document.createElement('span');
        hashtag.className = 'hashtag';
        hashtag.textContent = `#${word}`;

        const count = document.createElement('span');
        count.className = 'count';
        count.textContent = `${getRandomCount()}`;

        const removeIcon = document.createElement('span');
        removeIcon.className = 'remove-icon';
        removeIcon.textContent = '×';
        removeIcon.onclick = () => hashtag.remove();

        hashtag.appendChild(count);
        hashtag.appendChild(removeIcon);
        fragment.appendChild(hashtag);
    });

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy hashtags';
    copyButton.onclick = () => copyHashtags(container);
    const copyButtonContainer = document.createElement('div');
    copyButtonContainer.className = 'copy-button';
    copyButtonContainer.appendChild(copyButton);
    fragment.prepend(copyButtonContainer);

    container.appendChild(fragment);
}
  
/* Function to get a random count from the randomCounts array */
function getRandomCount() {
    const randomCounts = [
        "50K", "60K", "70K", "85K", "123K", "125K", "136K", "144K", "172K", "188K", 
        "196K", "223K", "239K", "248K", "295K", "362K", "386K", "437K", "479K", "492K", 
        "581K", "585K", "594K", "658K", "676K", "699K", "763K", "789K", "798K", "844K", 
        "877K", "895K", "955K", "988K", "999K", "1M", "1.5M", "1.8M", "2M", "2.3M", "2.6M", 
        "3M", "3.4M", "3.7M", "4M", "4.3M", "4.7M", "4.9M", "5M", "5.2M", "5.5M", 
        "5.8M", "5.9M", "6M", "6.2M", "6.4M", "6.7M", "6.9M", "7M", "7.3M", "7.6M", 
        "7.9M", "8M", "8.1M", "8.4M", "8.7M", "9M", "9.5M", "9.7M", "9.8M", "9.9M", 
        "10M", "10.1M", "10.4M", "10.6M", "10.8M", "10.9M"
    ];
    return randomCounts[Math.floor(Math.random() * randomCounts.length)];
}

/* Function to copy hashtags to clipboard */
function copyHashtags(container) {
    const hashtags = container.querySelectorAll('.hashtag');
    let hashtagText = '';

    hashtags.forEach(hashtag => {
        hashtagText += `${hashtag.childNodes[0].textContent.trim()} `;
    });

    navigator.clipboard.writeText(hashtagText.trim()).then(() => {
        alert('Hashtags copied to clipboard');
    }).catch(err => {
        alert('Could not copy hashtags');
        console.error('Could not copy text: ', err);
    });
}

/* Function to reset the page */
function resetPage() {
    document.getElementById('inputWord').value = '';
    document.getElementById('categoryDropdown').value = '';
    document.getElementById('hashtagsContainerWrapper').style.display = 'none';
    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = 'none';
    const containerIds = [
        'hashtagsContainer1', 
        'hashtagsContainer2', 
        'hashtagsContainer3', 
        'hashtagsContainer4', 
        'hashtagsContainer5'
    ];
    containerIds.forEach(id => {
        const container = document.getElementById(id);
        container.innerHTML = '';
    });
}

/* Function to toggle dark mode */
function toggleDarkMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        showToast('Dark mode activated');
    } else {
        document.body.classList.remove('dark-mode');
        showToast('Light mode activated');
    }
}

/* Function to show toast notification */
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        document.body.removeChild(toast);
    }, 3100);
}

/* Event listener for DOM content loaded */
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('modeDropdown');
    dropdown.addEventListener('change', (event) => {
        toggleDarkMode(event.target.value);
    });
});

// Function to Set Cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to Get Cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to Accept Cookies
    function acceptCookies() {
        setCookie('cookieConsent', 'accepted', 30);
        document.getElementById('cookieBox').classList.remove('show');
        loadGoogleAds();
    }

    // Function to Reject Cookies
    function rejectCookies() {
        setCookie('cookieConsent', 'rejected', 30); // Set a cookie to remember the rejection
        document.getElementById('cookieBox').classList.remove('show');
    }

    // Show Cookie Box on Window Load
    window.onload = function() {
        var cookieConsent = getCookie('cookieConsent');
        if (cookieConsent !== 'accepted' && cookieConsent !== 'rejected') {
            setTimeout(function() {
                document.getElementById('cookieBox').classList.add('show');
            }, 5000); // Show popup after 5 seconds
        } else if (cookieConsent === 'accepted') {
            loadGoogleAds(); // Load ads only if user has accepted
        }
    }

    // Function to Load Google Ads
    function loadGoogleAds() {
        // Google Ads script
        (adsbygoogle = window.adsbygoogle || []).push({});
    }