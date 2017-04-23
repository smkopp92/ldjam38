class playerButton {
  constructor(x, y, color, keyName) {
    this.color = color.toLowerCase();
    this.keyName = keyName;
    this.on = false;
    this.x = x;
    this.y = y;
  }

  preload() {
    game.load.image(this.imgKey('up'), `assets/UI/${this.color}_${this.keyName}_up.png`);
    game.load.image(this.imgKey('down'), `assets/UI/${this.color}_${this.keyName}_down.png`);
    this.key = game.input.keyboard.addKey(Phaser.Keyboard[this.keyName.toUpperCase()]);
    this.key.onDown.add((key) => {
      this.toggle();
    }, this);
  }

  create() {
    this.sprite = game.add.sprite(this.x, this.y, this.imgKey('up'));
  }

  update() {

  }

  toggle() {
    this.on = !this.on;
    if (this.on) {
      this.sprite.loadTexture(this.imgKey('down'))
    }
    else {
      this.sprite.loadTexture(this.imgKey('up'))
    }
  }
  imgKey(press){
    return `${this.color}_${press}`
  }
}
