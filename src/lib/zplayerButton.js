class PlayerButton {
  constructor(x, y, color, keyName, callback) {
    this.color = color.toLowerCase();
    this.keyName = keyName;
    this.on = false;
    this.x = x;
    this.y = y;
    this.callback = callback;
    this.player_toggleable = true;
    this.enabled = true;
  }

  preload() {
    game.load.image(this.imgKey('up'), this.imgUrl('up', ''));
    game.load.image(this.imgKey('down'), this.imgUrl('down', ''));
    game.load.image(this.imgKey('up_greyed'), this.imgUrl('up', '_greyed'));
    game.load.image(this.imgKey('down_greyed'), this.imgUrl('down', '_greyed'));
    this.key = game.input.keyboard.addKey(Phaser.Keyboard[this.keyName.toUpperCase()]);
    this.key.onDown.add((key) => {
      this.toggle();
    }, this);
  }

  create() {
    this.sprite = game.add.sprite(this.x, this.y, this.imgKey('up'));
    if (this.player_toggleable) {
      this.sprite.inputEnabled = true;
      this.sprite.events.onInputDown.add(() => {
        this.toggle();
      }, this);
    }
  }

  update() {

  }

  toggle() {
    if(this.enabled) {
      this.on = !this.on;
      if (this.on) {
        this.sprite.loadTexture(this.imgKey('down'))
      }
      else {
        this.sprite.loadTexture(this.imgKey('up'))
      }
      this.callback(this.on);
    }
  }

  disable() {
    this.enabled = false;
    if (this.on) {
      this.sprite.loadTexture(this.imgKey('down_greyed'))
    }
    else {
      this.sprite.loadTexture(this.imgKey('up_greyed'))
    }
  }

  imgKey(press){
    return `${this.color}_${press}`
  }

  imgUrl(up, grey) {
    return `assets/UI/${this.color}_${this.keyName}_${up}${grey}.png`
  }
}
