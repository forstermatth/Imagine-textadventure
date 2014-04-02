// the blueprints
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




function Player() {
    this.backpack = [];
    this.position = null;
}
Player.prototype.backpack = [];
Player.prototype.position = null;
Player.prototype.addItem = function(item){
    this.backpack.push(item);
}
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
Location.prototype.setVisited = function () {
    this.visited = 1;
}
Location.prototype.setPaths = function (paths) {
    this.paths = paths;
}
Location.prototype.setItem = function (item) {
    this.item = item;
}
Location.prototype.setNpc = function (npc) {
    this.npc = npc;
}
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









function Item(name, desc) {
    this.name = name;
    this.desc = desc;
}
Item.prototype.name = "";
Item.prototype.desc = "";












function Npc(name, desc, speech, speech2, block, movecond) {
    this.name = name;
    this.desc = desc;
    this.speech = speech;
    this.speech2 = speech2;
    this.block = block;
    this.movecond = movecond;
}










// the life
$("#userinput").submit(function (event) {

    var input = $("#typebox").val();
    var presentation;
    
    //game logic

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