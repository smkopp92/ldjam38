var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var alien = new Alien(50,50);

function preload() {
  alien.preload();
  game.stage.backgroundColor = '#eee';
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  alien.create();
}

function update() {
  alien.update();
}
