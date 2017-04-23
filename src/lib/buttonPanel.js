class buttonPanel {
  constructor() {

  }

  preload() {
    game.load.image("buttonPanelBg", "assets/UI/button_panel_bg.png", 150, 70);
  }

  create() {
    this.sprite = game.add.tileSprite(0,0, 150, WORLDHEIGHT, 'buttonPanelBg');
  }

  update() {

  }
}
