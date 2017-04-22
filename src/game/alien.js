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
    this.sprite.headings = {x: 1, y: 1}
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.floorColor = 1

    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.changeAxis, this);
  }
  changeAxis() {
    this.sprite.floorColor *=-1
  }
  update() {
    this.check_world_collision();

    let axis = this.check_floor_color();

    this.walk(axis);
  }

  walk(axis) {
    this.sprite[axis] += this.sprite.speed * this.sprite.headings[axis]
  }

  check_floor_color() {
    getObjectsAtLocation(this.sprite.x, this.sprite.y, aliens, (tile)=>{
      debugger;
      let floorColor = tile.color
      if(floorColor == 1) {
        return "x"
      }
      else if(floorColor == -1) {
        return "y"
      }

    })

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
