var level1 = function(game){};
var alien = new Alien(50, 50);
var alien2 = new Alien(150, 150);
var floorSection1 = new FloorSection(0, 0, 200, 600, 'Green');
var floorSection2 = new FloorSection(400, 0, 200, 600, 'Blue');
var switch1 = new FloorSwitch(0, 0, floorSection1, 'Green');
var background = new Background();

level1.prototype = {
  preload: function(){
    background.preload();
    alien.preload();
    alien2.preload();
    floorSection1.preload();
    floorSection2.preload();
    switch1.preload();

    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    background.create();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    floorSection1.create();
    floorSection2.create();
    switch1.create();
    alien.create();
    alien2.create();
  },
  update: function() {
    alien.update();
    alien2.update();
    floorSection1.update();
    floorSection2.update();
  }
}
