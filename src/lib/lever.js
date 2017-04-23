class Lever {
  constructor(starting_x, starting_y, floorSection, color) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.floorSection = floorSection;
    this.color = color;
    this.disabled = false;
  }

  preload() {
    game.load.image('leverOn', 'assets/Items/switchLeft.png');
    game.load.image('leverOff', 'assets/Items/switchRight.png');
  }

  create() {
    this.sprite = game.add.sprite(this.starting_x, this.starting_y, 'leverOn');
  }

  toggle(){
    this.floorSection.on = !this.floorSection.on;
    if(this.floorSection.on){
      this.sprite.loadTexture('leverOn');
    }
    else{
      this.sprite.loadTexture('leverOff');
    }
  }
}
