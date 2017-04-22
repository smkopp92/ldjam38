class FloorSection {
  constructor(starting_x, starting_y, starting_width, starting_height, image) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.starting_width = starting_width;
    this.starting_height = starting_height;
    this.path_to_image = image
    this.on = true
  }

  preload() {
    game.load.image(this.path_to_image, this.path_to_image);
  }

  create() {
    this.sprite = game.add.tileSprite(this.starting_x, this.starting_y, this.starting_width, this.starting_height, this.path_to_image);
  }

  update() {
    if(this.on){
      this.sprite.alpha = 1;
    }
    else{
      this.sprite.alpha = 0;
    }
  }

  turn_on(){
    this.on = true;
  }

  turn_off(){
    this.on = false;
  }
}
