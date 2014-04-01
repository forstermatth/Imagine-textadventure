/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'iris',
                type: 'image',
                rect: ['-77px', '-116px','680px','680px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"iris.png",'0px','0px']
            },
            {
                id: 'lid',
                type: 'image',
                rect: ['-116px', '-283px','758px','758px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lid.png",'0px','0px']
            },
            {
                id: 'socket',
                type: 'image',
                rect: ['-53px', '-116px','610px','610px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"socket.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_socket}": [
                ["style", "top", '-116px'],
                ["style", "left", '-53px']
            ],
            "${_iris}": [
                ["style", "top", '-116px'],
                ["style", "left", '-77px']
            ],
            "${_lid}": [
                ["style", "top", '-288px'],
                ["style", "left", '-166px'],
                ["style", "width", '868px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7250,
            autoPlay: true,
            labels: {
                "loop": 0
            },
            timeline: [
                { id: "eid18", tween: [ "style", "${_lid}", "width", '868px', { fromValue: '868px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_lid}", "top", '-155px', { fromValue: '-288px'}], position: 0, duration: 106 },
                { id: "eid20", tween: [ "style", "${_lid}", "top", '-288px', { fromValue: '-155px'}], position: 106, duration: 218 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-36491964");
