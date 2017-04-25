class PowerGauge {
  constructor(length) {
    this.length = length;
    this.currentCount = length;
    this.top = new PowerTop();
    this.bottom = new PowerBottom();
    this.buildPanels();
  }

  preload() {
    new PowerTop().preload();
    new PowerBottom().preload();
    new PowerPanel().preload();
  }

  create() {
    this.top.create(2);
    this.bottom.create((this.length + 1) * 26);
    let i = 1;
    this.panels.forEach((panel) => {
      panel.create(26 * i);
      i++;
    })
  }

  update() {

  }

  buildPanels() {
    this.panels = [];
    for(let i = 0; i < this.length; i++){
      this.panels.push(new PowerPanel());
    }
  }

  lowerPower() {
    this.currentCount -= 1;
    this.panels[this.length - this.currentCount - 1].turnOff();
  }
}
