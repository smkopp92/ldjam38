class FloorSection {
  constructor(starting_x, starting_y, starting_width, starting_height) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.starting_width = starting_width;
    this.starting_height = starting_height;
    this.on = true
  }

  preload() {
    game.load.image('floorSection', 'assets/Tiles/bg_castle.png');
  }

  create() {
    this.sprite = game.add.tileSprite(this.starting_x, this.starting_y, this.starting_width, this.starting_height, 'floorSection');
  }


  update() {
    // if(this.on){}

    // else


  }
}
