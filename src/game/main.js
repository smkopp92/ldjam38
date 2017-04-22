var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
  game.stage.backgroundColor = '#eee';
  game.load.spritesheet('dude', 'assets/test_image.png', 16, 17);
}

function create() {
  sprite = game.add.sprite(0,0, 'dude');
  sprite.scale.x += 3
  sprite.scale.y += 3
  sprite.animations.add('spin');
  sprite.animations.play('spin', 20, true);
  tween = game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);
}

function update() {
  if (sprite.x >= 100) {
    tween.reverse=true
  }
  else if(sprite.x <= 1) {
    tween.reverse = false;
  }
}
