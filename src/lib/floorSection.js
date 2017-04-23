class FloorSection {
  constructor(starting_x, starting_y, starting_width, starting_height, color) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.starting_width = starting_width;
    this.starting_height = starting_height;
    this.on = true;
    this.color = color;
  }

  preload() {
    game.load.image(this.color, "assets/Tiles/lock_" + this.color.toLowerCase() + ".png");
    game.load.image("default", "assets/Tiles/bg_castle.png");
  }

  create() {
    this.sprite = game.add.tileSprite(this.starting_x, this.starting_y, this.starting_width, this.starting_height, this.color);
  }

  update() {
    if(this.on){
      this.sprite.loadTexture(this.color);
    }
    else{
      this.sprite.loadTexture("default");
    }
  }
}
