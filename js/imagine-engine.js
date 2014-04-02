/* IMAGINE ENGINE

    The game engine behind www.mattforster.ca/imagine
    Uses a simple graph with adjecency lists to create a map which a player can navigate

    Author: Matt Forster (@forstermatth)
    Date:   April 2014
    
    Classes: 
            Player
            Location
            Item
            Npc
*/



/* -----------------------------------------------------------------

 HELPER FUNCTIONS

 ----------------------------------------------------------------- */
function alerttext(message, type) {
    message = '<span id="' + type + '">' + message + '</span><br/>';
    $("#alerttext").prepend(message);
}

function searchArray(name, property, array){
    for(var i = 0; i < array.length; i++){
        if(array[i][property] === name) return i;   
    }
    return -1;
}


/* ------------------------------------------------------------------

 CLASS : Player
 
 Represents the player, their position, and the items they have collected.
 ------------------------------------------------------------------ */
function Player() {
    this.backpack = [];
    this.position = null;
}

/* Members:
        backpack - array of items
        position - single node representing current position */
Player.prototype.backpack = [];
Player.prototype.position = null;

// Methods

// addItem - add passed item into the backpack array
// param item the item to add
Player.prototype.addItem = function(item){
    this.backpack.push(item);
}

// move - move the player (change position node) using strings representing directions
// param direction the direction to move in string form
Player.prototype.move = function (direction) {
    switch (direction) {
    case "north":
        if (this.position.paths[0] !== 0) {
            this.position.setVisited();
            if (this.position.npc !== 0 && this.position.npc.block === 0) {
                alerttext("The north passage is blocked.", "error");
            } else {
                this.position = this.position.paths[0];
                alerttext("You moved north.", "neutral");
            }
        } else {
            alerttext("The north passage is blocked.", "error");
        }
        break;
    case "south":
        if (this.position.paths[1] !== 0) {
            this.position.setVisited();
            if (this.position.npc !== 1 && this.position.npc.block === 1) {
                alerttext("The south passage is blocked.", "error");
            } else {
                this.position = this.position.paths[1];
                alerttext("You moved south.", "neutral");
            }
        } else {
            alerttext("The south passage is blocked.", "error");
        }
        break;
    case "east":
        if (this.position.paths[2] !== 0) {
            this.position.setVisited();
            if (this.position.npc !== 2 && this.position.npc.block === 2) {
                alerttext("The east passage is blocked.", "error");
            } else {
                this.position = this.position.paths[2];
                alerttext("You moved east.", "neutral");
            }
        } else {
            alerttext("The east passage is blocked.", "error");
        }
        break;
    case "west":
        if (this.position.paths[3] !== 0) {
            this.position.setVisited();
            if (this.position.npc !== 3 && this.position.npc.block === 3) {
                alerttext("The west passage is blocked.", "error");
            } else {
                this.position = this.position.paths[3];
                alerttext("You moved west.", "neutral");
            }
        } else {
            alerttext("The west passage is blocked.", "error");
        }
        break;
    case "up":
        if (this.position.paths[4] !== 0) {
            this.position.setVisited();
            if (this.position.npc !== 4 && this.position.npc.block === 4) {
                alerttext("There is no way upwards.", "error");
            } else {
                this.position = this.position.paths[4];
                alerttext("You went up.", "neutral");
            }
        } else {
            alerttext("There is no way to go up.", "error");
        }
        break;
    case "down":
        if (this.position.paths[5] !== 0) {
            this.position.setVisited();
            if (this.position.npc !== 5 && this.position.npc.block === 5) {
                alerttext("There is no way downwards.", "error");
            } else {
                this.position = this.position.paths[5];
                alerttext("You went down.", "neutral");
            }
        } else {
            alerttext("There is no way to go down.", "error");
        }
        break;
    }
}

// meetNpc - check for NPC's at the current position, return the speech if there is one.
Player.prototype.meetNpc = function () {
    if(this.position.npc === 0) return "";
    var npc = this.position.npc;
    var npcspeech = "<p>"
    npcspeech += "A " + npc.desc + " stands infront of you. <br/> '";
    if (searchArray(npc.movecond, "name", you.backpack) === -1) {
        npcspeech += npc.speech;
    } else {
        npcspeech += npc.speech2;
        this.position.npc.block = -1;
    }
    npcspeech += "', the " + npc.name + " says. <br/>";
    npcspeech += "</p>";
    return npcspeech;
}

//checkItems - check for items at the current position, put it in your backpack if there is one.
Player.prototype.checkItems = function () {
    var itemtext;
    itemtext = "<p>";
    if(this.position.item !== 0 && searchArray(this.position.item.name, "name", you.backpack) === -1){
        itemtext += "You found a chest! You pick up a " + this.position.item.name + " and put it in your backpack.";
        this.addItem(this.position.item);
        alerttext("You put: " + this.position.item.name + " into your backpack!", "success");
    }else{
        return "";
    }
    itemtext += "</p>";
    return itemtext;
}

//printBackpack - returns a string of the backpack's current items
Player.prototype.printBackpack = function () {
    var packtext;
    packtext = "<p>";
    packtext += "Your backpack contains: <br/>";
    if(this.backpack.length < 1) return packtext + "nothing. </p>";
    packtext += "<ol>"
    for(var i = 0; i < this.backpack.length; i++){
        packtext += "<li>" + this.backpack[i].name + ": " + this.backpack[i].desc + "</li>";
    }
    packtext += "</ol></p>";
    return packtext;
}

/* ------------------------------------------------------------------

 CLASS : Location

 Represents a location in the game, stores a description of that location and maintains an adjecency
 list representing the closest neighbours in the graph.

 Members:
        name - the name of the node, for use with the map.
        sdesc - the short description that is displayed within the movement list
        desc - the description that is displayed when the player is on the node
        vdesc - the description that is displayed with the player is on the node and has already been there
        item - a single item stored at this location
        paths - the nodes connected to this node. directions in order are: 
                [0] north [1] south [2] east [3] west [4] up [5] down
                order of the nodes matters.
        visited - boolean to check if the node has been visited or not.

------------------------------------------------------------------ */
function Location(name, sdesc, desc, vdesc) {
    this.name = name;
    this.sdesc = sdesc;
    this.desc = desc;
    this.vdesc = vdesc;
}
Location.prototype.item = 0;
Location.prototype.npc = 0;
Location.prototype.paths = [];
Location.prototype.visited = 0;

//Methods

// setVisited - set the visted member to true
Location.prototype.setVisited = function () {
    this.visited = 1;
}

// setPaths - set the adjecency list
Location.prototype.setPaths = function (paths) {
    this.paths = paths;
}

// setItem - set the item stored at this location
Location.prototype.setItem = function (item) {
    this.item = item;
}

// setNpc - set the npc that lives at this node
Location.prototype.setNpc = function (npc) {
    this.npc = npc;
}

// printPaths - returns a list of paths in string form
Location.prototype.printPaths = function () {
    var i;
    var compass = ["north", "south", "east", "west", "up", "down"];
    var info = "<p>";
    
    info += "<ul>";
    for (i = 0; i < 6; i++) {
        if (this.paths[i] != 0) {
            info += "<li>" + compass[i] + ": " + this.paths[i].sdesc + "</li>";
        }
    }
    info += "</ul>";
    info += "</p>";

    return info;
}

/* ------------------------------------------------------------------

 CLASS : Item

 Represents an item within the game

 Members:
        name - the name of the item
        desc - the description of the item
------------------------------------------------------------------ */
function Item(name, desc) {
    this.name = name;
    this.desc = desc;
}

/* ------------------------------------------------------------------

 CLASS : Npc

 Represents an NPC within the game

 Members:
        name - the name of the npc
        desc - the description of the npc
        speech - the speech displayed if the player does not have the movecond
        speech2 - the speech displayed if the player has the movecond
        block - the direction the npc blocks (1 for north ect.)
        movecond - the item name that allows the player to pass the npc
------------------------------------------------------------------ */
function Npc(name, desc, speech, speech2, block, movecond) {
    this.name = name;
    this.desc = desc;
    this.speech = speech;
    this.speech2 = speech2;
    this.block = block;
    this.movecond = movecond;
}


/* 
    Game logic - run every time the user submits something through the input box
*/
$("#userinput").submit(function (event) {

    var input = $("#typebox").val();
    input = input.toLowerCase();
    var presentation;
    
    // Actions based on the input
    switch (input) {
    case "begin":
        if(started == false){
            you = new Player();
            you.position = begin;
            drawmap();
            started = true;
        }
        break;
    case "reset":
        return;
    case "north":
        you.move("north");
        break;
    case "south":
        you.move("south");
        break;
    case "east":
        you.move("east");
        break;
    case "west":
        you.move("west");
        break;
    case "up":
        you.move("up");
        break;
    case "down":
        you.move("down");
        break;
    default:
        alerttext("Not an action.", "error");
    }

    //Build the game text
    presentation = "<p>";
    if (you.position.visited) {
        presentation += you.position.vdesc;
    } else {
        presentation += you.position.desc;
    }
    presentation += "</p>";

    presentation += you.meetNpc();
    presentation += you.checkItems();

    presentation += you.position.printPaths();

    $("#game").html(presentation);

    $("#typebox").val("");
    $("#typebox").attr("placeholder", "");
    $("#backpack").html(you.printBackpack());

    event.preventDefault();
});