class PowerBottom {
  preload() {
    game.load.image('bottom', 'assets/UI/pipe_endcap_bottom.png');
  }

  create(y) {
    this.sprite = game.add.sprite(145, y + 10, 'bottom');
  }

  update() {

  }
}
