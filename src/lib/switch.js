class Switch {
  constructor(name, starting_x, starting_y, enabled_img, disabled_img, player_toggleable, alien_toggleable, callback) {
    this.starting_x = starting_x;
    this.starting_y = starting_y;
    this.enabled_img = enabled_img;
    this.disabled_img = disabled_img;
    this.player_toggleable = player_toggleable;
    this.alien_toggleable = alien_toggleable;
    this.callback = callback;
    this.toggled = false;
    this.current_alien = null;
    this.name = name;
    this.switch_sfx;
  }

  preload() {
    game.load.image(this.name + 'on', this.enabled_img);
    game.load.image(this.name + 'off', this.disabled_img);
    game.load.audio('switch_sfx', ['assets/Sound/switch_sfx.mp3']);
  }

  create() {
    this.switch_sfx = game.add.audio('switch_sfx');
    this.sprite = game.add.sprite(this.starting_x, this.starting_y, this.name + 'off');
    if (this.player_toggleable) {
      this.sprite.inputEnabled = true;
      this.sprite.events.onInputDown.add(() => {
        this.toggled = !this.toggled;
        this.callback();
        this.switch_sfx.play();
      }, this);
    }
  }

  update() {
    if (this.alien_toggleable) {
      aliens.forEach((alien) => {
        if(softOverlap(alien.sprite, this.sprite) && this.current_alien == null) {
          this.callback();
          this.toggled = !this.toggled;
          this.current_alien = alien;
          this.switch_sfx.play();
        } else if(this.current_alien == alien && !softOverlap(alien.sprite, this.sprite)) {
          this.current_alien = null;
        }
      });
    }
    if (this.toggled) {
      this.sprite.loadTexture(this.name + 'on');
    } else {
      this.sprite.loadTexture(this.name + 'off');
    }
  }
}
