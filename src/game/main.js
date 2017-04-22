var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
  alien.preload();
  game.stage.backgroundColor = '#eee';
}

function create() {
  alien.create();
}

function update() {
  alien.update();
}
