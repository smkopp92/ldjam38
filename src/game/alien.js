class Alien {
  constructor(starting_x, starting_y) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
  }

  preload() {
    game.load.atlasJSONHash('alien', 'assets/p1_walk/p1_walk.png', 'assets/p1_walk/p1_walk.json');
  }

  create() {
    this.sprite = game.add.sprite(this.starting_x, this.starting_y, 'alien');
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.animations.add('spin');
    this.sprite.animations.play('spin', 20, true);
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
    if (this.sprite.x >= game.world.width - Math.abs(this.sprite.width * this.sprite.anchor.x)) {
      this.reverse_direction();
    }
    else if(this.sprite.x <= Math.abs(this.sprite.width * this.sprite.anchor.x)) {
      this.reverse_direction();
    }
  }
}
