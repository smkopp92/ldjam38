var level1 = function(game){};
var alien = new Alien(50, 50);
var alien2 = new Alien(150, 150);
var floorSection1 = new FloorSection(0, 0, 200, 600, 'Green');
var floorSection2 = new FloorSection(400, 0, 200, 600, 'Blue');
var switch1 = new FloorSwitch(0, 0, floorSection1, 'Green');
var lever1 = new Lever(0, 150, floorSection1, 'Green');
var background = new Background();
let aliens;
let floorSections;
var goal = new Goal(450,450);

level1.prototype = {
  preload: function(){
    background.preload();
    alien.preload();
    alien2.preload();
    floorSection1.preload();
    floorSection2.preload();
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
