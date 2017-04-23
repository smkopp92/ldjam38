let level1 = function(game){};
let alien = new Alien(215, 215);
let alien2 = new Alien(250, 250, {x: 1, y: -1});
let floorSection1 = new FloorSection(150, 0, 200, 800, 'Green');
let floorSection2 = new FloorSection(400, 0, 200, 600, 'Blue');
let wall1 = new Wall(150, 0, 4000, 70);
let wall2 = new Wall(150, 0, 70, 2000);
let wall3 = new Wall(WORLDWIDTH-35, 0, 70, 2000);
let wall4 = new Wall(150, WORLDHEIGHT-35, 4000, 70);
let switch1 = new FloorSwitch(0, 0, floorSection1, 'Green');
let lever1 = new Lever(0, 150, floorSection1, 'Green');
let playerButtonPanel = new buttonPanel();
let aliens;
let floorSections;
let walls;
let goal = new Goal(450,450);

level1.prototype = {
  preload: function(){
    aliens = [alien, alien2];
    floorSections = [floorSection1, floorSection2];
    walls = [wall1, wall2, wall3, wall4];
    preloadAll(aliens);
    preloadAll(floorSections);
    preloadAll(walls);
    switch1.preload();
    lever1.preload();
    goal.preload();
    playerButtonPanel.preload();
    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    createAll(aliens);
    createAll(floorSections);
    createAll(walls);
    switch1.create();
    lever1.create();
    goal.create();
    playerButtonPanel.create();
  },
  update: function() {
    updateAll(aliens);
    updateAll(floorSections);
    updateAll(walls);
    goal.update();
    playerButtonPanel.update();
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
