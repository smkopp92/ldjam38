var level2 = function(game){};
var lvl2_background = new Background();

level2.prototype = {
  preload: function(){
  },
  create: function(){
    text = game.add.text(game.world.centerX, game.world.centerY, "Thanks for playing!", { font: "95px Arial", fill: "#FFFFFF", align: "center" });
    text.anchor.setTo(0.5, 0.5);
  },
  update: function() {

  }
}
