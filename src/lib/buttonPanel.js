class buttonPanel {
  constructor() {
    this.buttons={
      q: new playerButton(15, 10, "red", 'q'),
      w: new playerButton(15, 150, "green", 'w'),
      e: new playerButton(15, 290, "blue", 'e'),
      r: new playerButton(15, 500, "yellow", 'r')
    }
  }

  preload() {
    game.load.image("buttonPanelBg", "assets/UI/button_panel_bg.png", 150, 70);
    for (let button in this.buttons) {
      this.buttons[button].preload();
    }
  }

  create() {
    this.sprite = game.add.tileSprite(0,0, 150, WORLDHEIGHT, 'buttonPanelBg');
    for (let button in this.buttons) {
      this.buttons[button].create();
    }
  }

  update() {
    for (let button in this.buttons) {
      this.buttons[button].update();
    }
  }

  buttonStates() {
    return {
      q: this.buttons.q.on,
      w: this.buttons.w.on,
      e: this.buttons.e.on,
      r: this.buttons.r.on,
    }
  }
}
