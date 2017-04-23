let game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
let alien = new Alien(50, 50);
let alien2 = new Alien(150, 150);
let floorSection1 = new FloorSection(0, 0, 200, 600, 'Green');
let floorSection2 = new FloorSection(400, 0, 200, 600, 'Blue');
let switch1 = new Switch(0, 0, floorSection1, 'Green');
let background = new Background();
let aliens;
let floorSections;


function preload() {
  background.preload();
  alien.preload();
  alien2.preload();
  floorSection1.preload();
  floorSection2.preload();
  switch1.preload();

  game.stage.backgroundColor = '#eee';
}

function create() {
  background.create();
  game.physics.startSystem(Phaser.Physics.ARCADE);
  floorSection1.create();
  floorSection2.create();
  switch1.create();
  alien.create();
  alien2.create();
  // aliens = game.add.group();
  // floorSections = game.add.group();
  // aliens.add(alien);
  // floorSections.addMultiple([floorSection1, floorSection2]);
  aliens = [alien, alien2];
  floorSections = [floorSection1, floorSection2];
}

function update() {
  alien.update();
  alien2.update();
  floorSection1.update();
  floorSection2.update();
}
