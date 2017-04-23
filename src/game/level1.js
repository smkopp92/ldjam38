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
let lever1 = new Lever(400, 150, floorSection1, 'Green');
// let background = new Background();
let aliens;
let floorSections;
let walls;
let levers;
let goal = new Goal(450,450);

level1.prototype = {
  preload: function(){
    aliens = [alien, alien2];
    floorSections = [floorSection1, floorSection2];
    walls = [wall1, wall2, wall3, wall4];
    levers = [lever1]
    // background.preload();
    preloadAll(aliens);
    preloadAll(floorSections);
    preloadAll(walls);
    preloadAll(levers);
    switch1.preload();
    goal.preload();
    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    // background.create();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    createAll(aliens);
    createAll(floorSections);
    createAll(walls);
    createAll(levers);
    switch1.create();
    goal.create();
  },
  update: function() {
    updateAll(aliens);
    updateAll(floorSections);
    updateAll(walls);
    updateAll(levers);
    goal.update();
    if (alien2.sprite.overlap(goal.sprite)){
      this.game.state.start('Level2')
    }
  }
}
