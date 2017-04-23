class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  preload() {
    game.load.atlasJSONHash('alien', 'assets/Player/p1_walk/p1_walk.png', 'assets/Player/p1_walk/p1_walk.json');
  }

  create() {
    this.sprite = game.add.sprite(this.x, this.y, 'alien');
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.animations.add('walk');
    this.sprite.animations.play('walk', 20, true);
    this.sprite.speed = 5;
    this.sprite.anchor.setTo(0.5,0);

    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.reverse_direction, this);
  }

  reverse_direction() {
    this.sprite.speed *= -1;
    this.sprite.scale.x *= -1;
  }

  update() {
    this.sprite.x += this.sprite.speed
    this.x = this.sprite.x
    if (this.sprite.x >= game.world.width - Math.abs(this.sprite.width * this.sprite.anchor.x)) {
      this.reverse_direction();
    }
    else if(this.sprite.x <= Math.abs(this.sprite.width * this.sprite.anchor.x)) {
      this.reverse_direction();
    }
  }
}
