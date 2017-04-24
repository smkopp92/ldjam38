class ButtonPanel {
  constructor() {
    let nonsense = () => {
      console.log("button!");
    }
    this.buttons={
      q: new PlayerButton(15, 10, "red", 'q', nonsense),
      w: new PlayerButton(15, 150, "green", 'w', nonsense),
      e: new PlayerButton(15, 290, "blue", 'e', nonsense),
      r: new PlayerButton(15, 500, "yellow", 'r', nonsense)
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
}
