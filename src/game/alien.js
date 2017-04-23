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
    this.sprite.animations.add('spin');
    this.sprite.animations.play('spin', 20, true);
    this.sprite.headings = {x: 1, y: 1}
    this.sprite.speed = 5;
    this.sprite.anchor.setTo(0.5,0.5);

    // this.sprite.inputEnabled = true;
    // this.sprite.events.onInputDown.add(this.reverse_direction, this);
  }

  update() {
    this.check_world_collision();
    let axis = this.check_floor_color();
    console.log(axis);
    this.walk(axis);
  }

  walk(axis) {
    this.sprite[axis] += this.sprite.speed * this.sprite.headings[axis]
  }

  check_floor_color() {
    let newAxis = 'x';
    floorSections.forEach ((tile) => {
      if (tile.on && tile.sprite.overlap(this.sprite)) {
        if (tile.color === "Green") {
          newAxis = 'y';
        }
      }
    });
    return newAxis;
  }

  check_world_collision() {
    if (this.sprite.x >= game.world.width - Math.abs(this.sprite.width * this.sprite.anchor.x)) {
      this.sprite.headings.x = -1;
    }
    else if(this.sprite.x <= Math.abs(this.sprite.width * this.sprite.anchor.x)) {
      this.sprite.headings.x = 1;
    }
    if (this.sprite.y >= game.world.height - Math.abs(this.sprite.height * this.sprite.anchor.y)) {
      this.sprite.headings.y = -1;
    }
    else if(this.sprite.y <= Math.abs(this.sprite.height * this.sprite.anchor.y)) {
      this.sprite.headings.y = 1;
    }
  }
}
