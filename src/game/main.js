var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.atlasJSONHash('alian', 'assets/p1_walk/p1_walk.png', 'assets/p1_walk/p1_walk.json');
  game.stage.backgroundColor = '#eee';
}

function create() {
  sprite = game.add.sprite(0,0, 'alian');
  sprite.animations.add('spin');
  sprite.animations.play('spin', 20, true);
  sprite.speed = 5;
  sprite.anchor.setTo(0.5,0);

  // sprite.angle = 10
}

function update() {
  sprite.x += sprite.speed
  if (sprite.x >= 500) {
    sprite.speed = -5;
    sprite.scale.x = -1

    // sprite.angle = -10
  }
  else if(sprite.x <= 1) {
    sprite.speed = 5;
    sprite.scale.x = `1
    // sprite.angle = 10
  }
}
