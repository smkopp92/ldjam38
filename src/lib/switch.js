class FloorSwitch {
  constructor(starting_x, starting_y, floorSection, color) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.floorSection = floorSection;
    this.color = color;
  }

  preload() {
    game.load.image('on', 'assets/Items/button' + this.color + '.png');
    game.load.image('off', 'assets/Items/button' + this.color + '_pressed.png');
  }

  create() {
    this.sprite = game.add.sprite(this.starting_x, this.starting_y, 'on');
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.toggle, this);
  }

  update(){
    //do nothing
  }

  toggle(){
    this.floorSection.on = !this.floorSection.on;
    if(this.floorSection.on){
      this.sprite.loadTexture('on');
    }
    else{
      this.sprite.loadTexture('off');
    }
  }
}
