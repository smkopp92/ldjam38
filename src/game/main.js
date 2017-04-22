var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var alien = new Alien(50,50);
var alien2 = new Alien(150,150);

function preload() {
  alien.preload();
  alien2.preload();
  game.stage.backgroundColor = '#eee';
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  alien.create();
  alien2.create();
}

function update() {
  alien.update();
  alien2.update();
}
