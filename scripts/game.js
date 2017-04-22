window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback){
        window.setTimeout(callback, 1000/60);
      };
})();

var width = document.getElementById("gameCanvas").width;
var height = document.getElementById("gameCanvas").height;


var gameContext = document.getElementById("gameCanvas").getContext("2d");

var keys = [];
var images = [];
var doneImages = 0;

var player = null;

var key = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  space: 32,
  w: 87,
  a: 65,
  s: 83,
  d: 68,
}

$(document).keydown(function(e){
  e.preventDefault();
  keys[e.keyCode ? e.keyCode : e.which] = true;
});

$(document).keyup(function(e){
  e.preventDefault();
  delete keys[e.keyCode ? e.keyCode : e.which];
});

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
var canvas = document.getElementById('gameCanvas');


function init(){
  thing = new Thing();
  loop();
  // DON'T PUT ANYTHING AFTER THE GAME LOOP STARTS!
}

function update(){
  thing.update();
}

function render(){
  thing.draw();
}


function loop(){
  requestAnimFrame(function(){
    loop();
  });
  update();
  render();

}

loadImages(["assets/test_image.png"]);

checkImages();
