//
//  map.js
//
//  The arbor.js definitions required to create a force directed graph
//  Author: Matt Forster (@forstermatth)
//  Date:   April 2014


  var Renderer = function(canvas){
    var canvas = $(canvas).get(0)
    var ctx = canvas.getContext("2d");
    var particleSystem = null

    var that = {
      init:function(system){
        particleSystem = system

        // inform the system of the screen dimensions so it can map coords for us.
        // if the canvas is ever resized, screenSize should be called again with
        // the new dimensions
        particleSystem.screenSize(canvas.width, canvas.height)
        particleSystem.screenPadding(80) // leave an extra 80px of whitespace per side

        // set up some event handlers to allow for node-dragging
        that.initMouseHandling()
      },

      redraw:function(){
        particleSystem.screenSize(canvas.width, canvas.height)
        // redraw will be called repeatedly during the run whenever the node positions
        // change. the new positions for the nodes can be accessed by looking at the
        // .p attribute of a given node. however the p.x & p.y values are in the coordinates
        // of the particle system rather than the screen. you can either map them to
        // the screen yourself, or use the convenience iterators .eachNode (and .eachEdge)
        // which allow you to step through the actual node objects but also pass an
        // x,y point in the screen's coordinate system
        //
        ctx.fillStyle = "white"
        ctx.fillRect(0,0, canvas.width, canvas.height)

        particleSystem.eachEdge(function(edge, pt1, pt2){
          // edge: {source:Node, target:Node, length:#, data:{}}
          // pt1:  {x:#, y:#}  source position in screen coords
          // pt2:  {x:#, y:#}  target position in screen coords

          // draw a line from pt1 to pt2
          ctx.strokeStyle = "rgba(0,0,0, .333)"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(pt1.x, pt1.y)
          ctx.lineTo(pt2.x, pt2.y)
          ctx.stroke()
        })

        particleSystem.eachNode(function(node, pt){
          // node: {mass:#, p:{x,y}, name:"", data:{}}
          // pt:   {x:#, y:#}  node position in screen coords

          // draw a rectangle centered at pt
          var w = 7

          const here = (you.position.name === node.name);
          if (here) node.data.visited = true;

          let color = here ? "pink" : "grey";
          if (!here && node.data.visited) color = "black";

          ctx.fillStyle = color;
          ctx.fillRect(pt.x-w/2, pt.y-w/2, w,w)
        })
      },

      initMouseHandling:function(){
        // no-nonsense drag and drop (thanks springy.js)
        var dragged = null;

        // set up a handler object that will initially listen for mousedowns then
        // for moves and mouseups while dragging
        var handler = {
          clicked:function(e){
            var pos = $(canvas).offset();
            _mouseP = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)
            dragged = particleSystem.nearest(_mouseP);

            if (dragged && dragged.node !== null){
              // while we're dragging, don't let physics move the node
              dragged.node.fixed = true
            }

            $(canvas).bind('mousemove', handler.dragged)
            $(window).bind('mouseup', handler.dropped)

            return false
          },
          dragged:function(e){
            var pos = $(canvas).offset();
            var s = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)

            if (dragged && dragged.node !== null){
              var p = particleSystem.fromScreen(s)
              dragged.node.p = p
            }

            return false
          },

          dropped:function(e){
            if (dragged===null || dragged.node===undefined) return
            if (dragged.node !== null) dragged.node.fixed = false
            dragged.node.tempMass = 1000
            dragged = null
            $(canvas).unbind('mousemove', handler.dragged)
            $(window).unbind('mouseup', handler.dropped)
            _mouseP = null
            return false
          }
        }

        // start listening
        $(canvas).mousedown(handler.clicked);

      },

    }
    return that
  }

// Draw the map - creates the edges and intializes the canvas.

function drawmap(){
    var sys = arbor.ParticleSystem(1200, 500, 0.3) // create the system with sensible repulsion/stiffness/friction
    sys.parameters({gravity:true}) // use center-gravity to make the graph settle nicely (ymmv)
    sys.renderer = Renderer("#map") // our newly created renderer will have its .init() method called shortly by sys...

    sys.graft({
      edges:{
        begin:{ forestPath:{} },
        forestPath:{ forestCrossroads:{}, begin:{} },
        forestCrossroads:{ forestBridge:{}, forestPath:{}, forestClearing:{}, forestPath2:{} },
        forestClearing:{ forestCrossroads:{}, forestTemple:{} },
        forestPath2:{ forestCrossroads:{}, forestLake:{} },
        forestBridge:{ forestCrossroads:{}, forestPath3:{}, forestLake:{}, forestTrollden:{} },
        forestPath3:{ forestBridge:{}, forestEnd:{} },
        forestEnd:{ forestPath3:{}, townSGate:{} },
        townSGate:{ forestEnd:{}, townCenter:{} },
        townCenter:{ townSGate:{}, townNGate:{}, townMarket:{}, townInn:{} },
        townMarket:{ townCenter:{}, townBlkSmith:{} },
        townInn:{ townCenter:{}, townGarden:{} },
        townBlkSmith:{ townMarket:{}, townNGate:{}, townBlkSAttic:{} },
        townGarden:{ townNGate:{}, townInn:{} },
        townNGate:{ mountPath:{}, townCenter:{}, townBlkSmith:{} },
        mountPath:{ mountPass1:{}, townNGate:{} },
        mountPass1:{ mountPass2:{}, mountPath:{} },
        mountPass2:{ mountStairs:{}, mountPass1:{}, mountCave:{} },
        mountCave:{ mountPass2:{} },
        mountStairs:{ castleGate:{}, mountPass2:{}, mountPool:{} },
        mountPool:{ mountPath:{} },
        castleGate:{ castleCourt:{}, mountStairs:{} },
        castleCourt:{ castleGate:{}, castleEastT:{}, castleWestT:{} },
        castleEastT:{ castleCorr1:{}, castleCourt:{}, castlePara:{} },
        castlePara:{ castleMages:{}, castleEastT:{} },
        castleMages:{ castlePara:{} },
        castleWestT:{ castleCorr2:{}, castleCourt:{} },
        castleCorr1:{ castleThrone:{}, castleEastT:{} , castleStair:{} },
        castleCorr2:{ castleThrone:{}, castleWestT:{}, castleArmory:{} },
        castleArmory:{ castleThrone:{}, castleWestT:{} },
        castleThrone:{ castleArmory:{}, castleCorr1:{}, castleCorr2:{} },
        castleStair:{ castleCorr1:{}, castleDungeon:{} },
        castleDungeon:{ castleStair:{} }

      }
    })

}
