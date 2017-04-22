var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var alien = new Alien(50,50);
var alien2 = new Alien(150,150);
var floorSection1 = new FloorSection(0,0,400,600, 'assets/Tiles/bg_castle.png');
var floorSection2 = new FloorSection(400,0,400,600, 'assets/Tiles/box.png');
var switch1 = new Switch(0,0,floorSection1, 'assets/Items/buttonRed.png', 'assets/Items/buttonRed_pressed.png');
var background = new Background();

function preload() {
  background.preload();
  alien.preload();
  alien2.preload();
  floorSection1.preload();
  floorSection2.preload();
  switch1.preload();

  game.stage.backgroundColor = '#eee';
}

function create() {
  background.create();
  game.physics.startSystem(Phaser.Physics.ARCADE);
  floorSection1.create();
  floorSection2.create();
  switch1.create();
  alien.create();
  alien2.create();
}

function update() {
  alien.update();
  alien2.update();
  floorSection1.update();
  floorSection2.update();
}
