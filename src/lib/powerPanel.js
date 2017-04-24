class PowerPanel {
  constructor() {
  }

  preload() {
    game.load.image('on', 'assets/UI/pipe_energy_node_on.png');
    game.load.image('off', 'assets/UI/pipe_energy_node_off.png');
  }

  create(y) {
    this.sprite = game.add.sprite(150, y + 10, 'on');
  }

  update() {
  }

  turnOff() {
    this.sprite.loadTexture('off');
  }
}
