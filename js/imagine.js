// The Creation
var started;
var eye;
var you;
var begin = new Location("begin",
                 "A forest clearing.", 
                 "You wake up on the grass in a clearing, somewhere in some forest.", 
                 "The forest clearing, where you woke up earlier. <br/> You see your footprints on the ground.");

var forestPath = new Location( "forestPath",
                              "A muddy path.",
                              "The path winds its way through the forest.",
                              "The path winds its way through the forest. <br/> You see your footprints on the ground.");

var forestCrossroads = new Location( "forestCrossroads",
                                    "A crossroads.",
                                    "It seems as though a few well used paths cross ways.",
                                    "The crossroads looks as familiar as ever. <br/> You see your footprints on the ground.");

var forestClearing = new Location("forestClearing",
                                  "A clearing.",
                                  "An area where no trees have grown, letting the undergrowth flourish and flower.",
                                  "The clearing is the same, a cat is frolicing in the field. <br/> You see your footprints in the grass.");

var forestTemple = new Location("forestTemple",
                                  "A Forest Temple.", 
                          "A white temple looms up infront of you. Wondering what it is for, you go inside.", 
                          "It looks like someone has shut the temple doors. <br/> You see your footprints on the ground.");

var forestPath2 = new Location("forestPath2",
                                  "A lakeside path.", 
                         "The path heads towards a lake, skirting the shoreline.", 
                         "The path heads towards a lake, skirting the shoreline. <br/> You see your footprints on the ground.");

var forestLake = new Location("forestLake",
                                  "A large lake.", 
                              "The lake glistens in the sunlight, the opposite shore barely visible.", 
                              "The lake glistens in the sunlight, as fish jump in the distance. <br/> You see your footprints on the ground");

var forestBridge = new Location("forestBridge",
                                  "A stone bridge.",
                                "A large stone bridge crosses a stream.", 
                                "The bridge looks the same. You notice some bones scattered around the sides. <br/> You see your footprints on the ground");

var forestTrollden = new Location("forestTrollden",
                                  "A trolls cave underneath the bridge.",
                                  "The smell of rotten meat chokes the air. You see many bones on the ground of the cave.", 
                                  "Still smelly, still full of bones. <br/> You see your footprints where there are no bones.");

var forestPath3 = new Location("forestPath3",
                                  "A forest path.", 
                               "The path heads straight, as the trees start to thin.",
                               "The path heads straight, as the trees start to thin. <br/> You see your footprints on the ground.");

var forestEnd = new Location("forestEnd",
                                  "The edge of the forest.",
                             "The edge of the forest is bright and sunny, you see a village in the valley in the distance.", 
                             "The edge of the forest is bright and sunny, the village bustling in the valley below. <br/> You see your footprints on the ground.");

var townSGate = new Location("townSGate",
                                  "The town's south gate.", 
                             "The towns gate is open wide, and two gaurds stand on either side.", 
                             "The towns gate is open wide, the two gaurds nod at you as you pass.");

var townCenter = new Location("townCenter",
                                  "The town's center.", 
                              "The towns center is busy, with villagers walking through on errands.", 
                              "The towns center is still busy, nobody giving you a second look as your walk past them.");

var townMarket = new Location("townMarket",
                                  "The town's market.", 
                              "The towns market is loud, merchants yelling over eachother trying to sell.", 
                              "The towns market is loud, as merchants who recognize you try to get you to buy their wares.");

var townBlkSmith = new Location("townBlkSmith",
                                  "A blacksmiths shop.", 
                                "The shop is bellowing smoke and the forge inside is busy working.", 
                                "The shop is loud as you hear metal being worked inside.");

var townBlkSAttic = new Location("townBlkSAttic",
                                  "The blacksmiths attic.", 
                                 "The attic of the shop is full of tools and smells of smoke from below.", 
                                 "The attic seems the same as the last time you were up here.");

var townInn = new Location("townInn",
                                  "The town's inn.", 
                           "The town's inn is busy as people walk in and out of the bar on the main floor.",
                           "The town's drunkard recognizes you as he stumbles around the inn's bar.");

var townGarden = new Location("townGarden",
                                  "The town's garden.", 
                              "The town's garden is full of life, and you catch a glimpse of an elf jumping over the town walls.", 
                              "The garden is green as ever, no sign of the elf though.");

var townNGate = new Location("townNGate",
                                  "The town's north gate.",
                             "The towns gate is open.",
                             "The town's gate is open. <br/> You see your footprints on the road.");

var mountPath = new Location("mountPath",
                                  "A path towards the mountains.", 
                             "The mountain path roams through the foothills towards the mountains.", 
                             "The mountain path roams through the foothills. <br/> You spot your footprints on multiple areas of the long trail.");

var mountPass1 = new Location("mountPass1",
                                  "The beginnings of the mountain pass.", 
                              "The pass starts climbing steeply, getting snowy near the top.", 
                              "The pass starts climbing steeply, the snowy path showing your footprints along the way.");

var mountPass2 = new Location("mountPass2",
                                  "The snowy pass.", 
                              "The pass cuts through two huge mountains, covered in miles of snow.", 
                              "The snowy mountain valley is quite except your footfall. <br/> You see you footsteps in the snow.");

var mountCave = new Location("mountCave",
                                  "A cave in the mountain.", 
                             "The cave smells damp, with the cold wind flowing through the entrance.", 
                             "The cave smells damp, and some warm air is flowing up through the depths. <br/> You see your footprints at the entrance.");

var mountStairs = new Location("mountStairs",
                                  "Carved Stairs.", 
                               "The stairs carved into the rock are icy, off to the side there is a cliff.", 
                               "The stairs have proven their danger, you walk carefully.");

var mountPool = new Location("mountPool",
                                  "Inspect the cliff edge.", 
                             "As you inspect the cliff edge, you slip and fall. <br/> You've fallen into a pool at the bottom of the cliff. Luckily you are unhurt.", 
                             "Again? really?");

var castleGate = new Location("castleGate",
                                  "A Gate.", 
                              "The castle gate lies ajar. You push it open to reveal an inner courtyard.",
                              "The door being pushing open, it is easy to walk in and out of the castle.");

var castleCourt = new Location("castleCourt",
                                  "The castle courtyard.", 
                               "The heavy snow obscures the real extent of the castle, but you see entry into the two towers.",
                               "You can discerne some features of the courtyard, including war machines.<br/> You see your footprints in the snow.");

var castleEastT = new Location("castleEastT",
                                  "The castle's east tower.", 
                               "The tower is warm inside, with torches lining the walls.",
                               "The tower is warm inside, rich carpets lining the floors.");

var castlePara = new Location("castlePara",
                                  "The castles parapets.", 
                              "It is cold on the wall, but you see someone elses footprints in the snow.",
                              "Your footprints are there as well as the others.");

var castleMages = new Location("castleMages",
                                  "The castles mages quarters.", 
                               "The mages quarters is full of books. Weird machines are scattered here and there.", 
                               "You wonder why this mage is here all alone.");

var castleWestT = new Location("castleWestT",
                                  "The castles west tower.", 
                               "The tower is warm inside, suits of armor line the walls.",
                               "The tower is warm inside. The suits seem to be watching you.");

var castleCorr1 = new Location("castleCorr1",
                                  "A Corridor.", 
                               "Paintings of past kinds line the walls of this long hallway.", 
                               "The paintings seem kind and cruel at the same time, as they watch you walk past.");

var castleCorr2 = new Location("castleCorr2",
                                  "A Corridor.", 
                               "The corridor is line with ornate melee weapons of all sizes.", 
                               "The weapons on the wall look deadly and beautiful at the same time.");

var castleArmory = new Location("castleArmory",
                                  "The Armory.", 
                                "Utilitarian weapons and armor line the walls in racks. You wonder where all the people are.", 
                                "The weapons in this room look used and deadly, the creations and masters of war.");

var castleThrone = new Location("castleThrone",
                                  "The Throneroom.", 
                                "You walk into the room, experiencing a feeling of recognition. Have you been here before? <br/> A heavy layer of dust has settled over the throne. It hasn't been used in ages.",
                                "Walking back into the throne room, you feel haunted. Empty.");


var sword = new Item("sword",
                     "A shiny sword that scares trolls.");

var hammer = new Item("hammer",
                      "A Blacksmiths main tool.");

var magicTome = new Item("magic tome",
                         "A Tome full of magical spells.");

var lostAmulet = new Item("lost amulet",
                          "A lost amulet, giving off a faint glow.");

var aleMug = new Item("ale mug",
                      "A worn ale mug, with some initials carved into the bottom.");

var crown = new Item("crown",
                      "A heavy gold crown with inset jewels.");

var troll = new Npc("troll",
                    "hairy troll",
                    "NO SHALL PASS",
                    "I don't fight. go pass.",
                    0, "sword");

var blacksmith = new Npc("blacksmith",
                         "grizzled blacksmith",
                         "I can't do any work without my favorite hammer..",
                         "Ah, there it is. Thankyou. Now if only the king would come back..",
                         4, "hammer");

var mage = new Npc("mage",
                   "grizzled mage",
                   "Why hello there. I can't seem to find my book of spells. Have you seen it?",
                   "Ah, there it is, now I can cast my sight spell... there. <br/>Oh! Sire! We have not seen you in years. Where have you been? <br/> Your wife and most the court left, nobody thought you were coming back. <br/> After you ran off when that huge eye appeared in the sky, we all thought you were gone for good. <br/> The commoners are still in the village, I suppose they have nowhere else to go.. <br/>",
                  -1, "magic tome");

var wraith = new Npc("wraith",
                     "glowing wraith",
                     "What are yoouu dooing heere? I've lost myy amuulett....",
                     "The kingg wass a nicee perrsoon. Nobody know's why hee leftt...",
                    -1, "lost amulet");

var innkeeper = new Npc("innkeeper",
                        "burley innkeep",
                        "Where is that damn mug?",
                        "Thankye, have you heard what happened to the king?.",
                       0, "ale mug");

var guard = new Npc("guard",
                    "guard in heavy armour",
                    "Only men bearing the signit of the king shall pass!",
                    "Oh, you found the crown. Go through.",
                    0, "crown");


    

// Worldbuilder
$(document).ready(function () {
    started = false;
    eye = $("#game").html();
    $("#typebox").focus();
   
    begin.setPaths([forestPath,0,0,0,0,0]);
    forestPath.setPaths([forestCrossroads,begin,0,0,0,0]);
    forestCrossroads.setPaths([forestBridge,forestPath,forestClearing,forestPath2,0,0]);
    forestClearing.setPaths([0,0,forestTemple,forestCrossroads,0,0]);
    forestTemple.setPaths([0,0,0,forestClearing,0,0]);
    forestPath2.setPaths([0,0,forestCrossroads,forestLake,0,0]);
    forestLake.setPaths([forestBridge,0,forestPath2,0,0,0]);
    forestBridge.setPaths([forestPath3,forestCrossroads,0,forestLake,0,forestTrollden]);
    forestTrollden.setPaths([0,0,0,0,forestBridge,0]);
    forestPath3.setPaths([forestEnd,forestBridge,0,0,0,0]);
    forestEnd.setPaths([townSGate,forestPath3,0,0,0,0]);
    townSGate.setPaths([townCenter,forestEnd,0,0,0,0]);
    townCenter.setPaths([townNGate,townSGate,townMarket,townInn,0,0]);
    townMarket.setPaths([townBlkSmith,0,0,townCenter,0,0]);
    townInn.setPaths([townGarden,0,townCenter,0,0,0]);
    townBlkSmith.setPaths([0,townMarket,0,townNGate,townBlkSAttic,0]);
    townBlkSAttic.setPaths([0,0,0,0,0,townBlkSmith]);
    townGarden.setPaths([0,townInn,townNGate,0,0,0]);
    townNGate.setPaths([mountPath,townCenter,townBlkSmith,0,0,0]);
    mountPath.setPaths([mountPass1,townNGate,0,0,0,0]);
    mountPass1.setPaths([mountPass2,mountPath,0,0,0,0]);
    mountPass2.setPaths([mountStairs,mountPass1,0,mountCave,0,0]);
    mountCave.setPaths([0,0,mountPass2,0,0,0]);
    mountStairs.setPaths([castleGate,mountPass2,mountPool,0,0,0]);
    mountPool.setPaths([0,mountPath,0,0,0,0]);
    castleGate.setPaths([castleCourt,mountStairs,0,0,0,0]);
    castleCourt.setPaths([0,castleGate,castleEastT,castleWestT,0,0]);
    castleEastT.setPaths([castleCorr1,0,0,castleCourt,castlePara,0]);
    castlePara.setPaths([0,0,0,0,castleMages,castleEastT]);
    castleMages.setPaths([0,0,0,0,0,castlePara]);
    castleWestT.setPaths([castleCorr2,0,castleCourt,0,0,0]);
    castleCorr1.setPaths([castleThrone,castleEastT,0,0,0,0]);
    castleCorr2.setPaths([castleThrone,castleWestT,castleArmory,0,0,0]);
    castleArmory.setPaths([castleThrone,0,castleWestT,0,0,0]);
    castleThrone.setPaths([0,castleArmory,castleCorr1,castleCorr2,0,0]);
    
    forestTemple.setItem(sword);
    forestBridge.setNpc(troll);
    forestTrollden.setItem(hammer);
    mountCave.setNpc(wraith);
    townBlkSmith.setNpc(blacksmith);
    castleMages.setNpc(mage);
    townInn.setNpc(innkeeper);
    townGarden.setItem(magicTome);
    townBlkSAttic.setItem(aleMug);
    mountPool.setItem(lostAmulet);
    forestLake.setItem(crown);
    castleGate.setNpc(guard);
        
});