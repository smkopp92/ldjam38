class PowerTop {
  preload() {
    game.load.image('top', 'assets/UI/pipe_endcap_top.png');
  }

  create(y) {
    this.sprite = game.add.sprite(150, y + 10, 'top');
  }

  update() {

  }
}
