class Switch {
  constructor(starting_x, starting_y, floorSection, on_image, off_image) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.floorSection = floorSection;
    this.path_to_image_on = on_image;
    this.path_to_image_off = off_image;
  }

  preload() {
    game.load.image(this.path_to_image_on, this.path_to_image_on);
    game.load.image(this.path_to_image_off, this.path_to_image_off);
  }

  create() {
    this.sprite = game.add.sprite(this.starting_x, this.starting_y, this.path_to_image_on);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.toggle, this);
  }

  toggle(){
    this.floorSection.on = !this.floorSection.on;
    if(this.floorSection.on){
      this.sprite.loadTexture(this.path_to_image_on);
    }
    else{
      this.sprite.loadTexture(this.path_to_image_off);
    }
  }
}
