let alien = new Alien(50,50);
let alien2 = new Alien(150,150);
let aliens = [alien, alien2]

let preload = () => {
  aliens.forEach((a) => {
    a.preload();
  })
  game.stage.backgroundColor = '#eee';
}

let create = () => {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  aliens.forEach((a) => {
    a.create();
  })
}

let update = () => {
  aliens.forEach((a) => {
    a.update();
  })
}

let game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
