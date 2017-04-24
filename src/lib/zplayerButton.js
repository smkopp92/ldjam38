class PlayerButton extends Switch {
  constructor(x, y, color, keyName, callback) {
    let enabled_img = `assets/UI/${color}_${keyName}_down.png`;
    let disabled_img = `assets/UI/${color}_${keyName}_up.png`;

    super(
      x, y,
      enabled_img, disabled_img,
      true, false,
      callback
    );
    this.callback = callback;
    this.color = color.toLowerCase();
    this.keyName = keyName;
  }
  //name, starting_x, starting_y, enabled_img, disabled_img, player_toggleable, alien_toggleable, callback)
  preload() {
    // game.load.image(this.imgKey('up'), `assets/UI/${this.color}_${this.keyName}_up.png`);
    // game.load.image(this.imgKey('down'), `assets/UI/${this.color}_${this.keyName}_down.png`);
    super.preload();
    this.key = game.input.keyboard.addKey(Phaser.Keyboard[this.keyName.toUpperCase()]);
    this.key.onDown.add((key) => {
      // this.toggle();
      this.toggled = !this.toggled;
      this.callback();
    }, this);

  }

  // create() {
  //   this.sprite = game.add.sprite(this.x, this.y, this.imgKey('up'));
  // }
  //
  // update() {
  //
  // }

  toggle() {
    this.toggled = !this.toggled;
    // if (this.on) {
    //   this.sprite.loadTexture(this.imgKey('down'))
    // }
    // else {
    //   this.sprite.loadTexture(this.imgKey('up'))
    // }
  }

}
