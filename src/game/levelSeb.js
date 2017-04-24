let levelSeb = function(game) {};

levelSeb.prototype = {
  aliens: [],
  floorSections: [],
  walls: [],
  switches: [],
  gameObjects: [],
  music: null,

  preload: function(){
    let alien = new Alien(WORLDWIDTH-150, 80, {x: 1, y: -1});
    let floorSection1 = new FloorSection(WORLDWIDTH-265, 0, 275, WORLDHEIGHT-35, 'Green');
    // let floorSection2 = new FloorSection(900, 0, 100, 800, 'Blue');
    let wallCoordinates = [
      [150, 0, 4000, 70],
      [150, 0, 70, 2000],
      [WORLDWIDTH-35, 0, 70, 2000],
      [150, WORLDHEIGHT-35, 4000, 70],
      [WORLDWIDTH-275, 0, 70, 2000],
      [WORLDWIDTH-275, 120, 500, 75],
      [WORLDWIDTH-275, 240, 500, 75],
      [WORLDWIDTH-275, 360, 500, 75],
      [WORLDWIDTH-275, 480, 500, 75],
      [WORLDWIDTH-275, 600, 500, 75]
    ];
    walls = [];
    wallCoordinates.forEach((coordinate) => {
      walls.push(new Wall(coordinate[0],coordinate[1],coordinate[2],coordinate[3]));
    });
    // let switch2 = new Switch('blueSwitch', 200, 412, 'assets/Items/switchLeft.png', 'assets/Items/switchRight.png', false, true, false, toggle.bind(this, floorSection2));
    switch2 = new Switch('blueSwitch', WORLDWIDTH-180, 170, 'assets/Items/buttonBlue_pressed.png', 'assets/Items/buttonBlue.png', false, true, false, () => {walls[7].on = !walls[7].on});
    let playerButtonPanel = new ButtonPanel(
      () => {walls[5].on = !walls[5].on},
      () => {walls[6].on = !walls[6].on},
      () => {walls[8].on = !walls[8].on},
      // () => {floorSection2.on = !floorSection2.on},
      () => {
        if (music) {
          music.stop();
        }
        game.state.start('LevelSeb');
      }
    );

    let goal1 = new Switch('goal1', 1150, 480, 'assets/Tiles/goal1.png', '', false, true, true, goToLevel2);
    game.load.audio('bgm', ['assets/Sound/Rainbow_Run.mp3']);
    game.load.audio('goal_sfx', ['assets/Sound/goal_sfx.mp3']);

    aliens = [alien];
    floorSections = [floorSection1];
    switches = [switch2];
    gameObjects = aliens.concat(floorSections, walls, switches, goal1, playerButtonPanel)
    preloadAll(gameObjects);
    game.stage.backgroundColor = '#eee';
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    music = game.add.audio('bgm');
    music.loop = true;
    music.volume = 0.3;
    music.play();
    createAll(gameObjects);
  },

  update: function() {
    updateAll(gameObjects);
  }
}
