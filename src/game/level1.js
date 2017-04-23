let level1 = function(game){};
let alien = new Alien(50, 50);
let alien2 = new Alien(150, 150);
let floorSection1 = new FloorSection(0, 0, 600, 200, 'Green');
let floorSection2 = new FloorSection(400, 0, 200, 600, 'Blue');
let wall1 = new Wall(0,0,1200, 50);
let switch1 = new FloorSwitch(0, 0, floorSection1, 'Green');
let lever1 = new Lever(0, 150, floorSection1, 'Green');
let background = new Background();
let aliens;
let floorSections;
let walls;
let goal = new Goal(450,450);

level1.prototype = {
  preload: function(){
    background.preload();
    alien.preload();
    alien2.preload();
    floorSection1.preload();
    floorSection2.preload();
    wall1.preload();
    switch1.preload();
    lever1.preload();
    goal.preload();
    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    background.create();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    floorSection1.create();
    floorSection2.create();
    wall1.create();
    switch1.create();
    lever1.create();
    alien.create();
    alien2.create();
    aliens = [alien, alien2];
    floorSections = [floorSection1, floorSection2];
    goal.create();
  },
  update: function() {
    alien.update();
    alien2.update();
    floorSection1.update();
    floorSection2.update();
    wall1.update();
    goal.update();
    if (alien2.sprite.overlap(goal.sprite)){
      this.game.state.start('Level2')
    }
    if (alien2.sprite.overlap(lever1.sprite) && lever1.disabled == false) {
      lever1.toggle();
      lever1.disabled = true;
    } else if (lever1.disabled == true && !alien2.sprite.overlap(lever1.sprite)){
      lever1.disabled = false;
    }
  }
}
