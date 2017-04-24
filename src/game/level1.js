let level1 = function(game) {};

level1.prototype = {
    aliens: [],
    floorSections: [],
    walls: [],
    switches: [],
    gameObjects: [],
    music: null,
    playerButtonPanel: null,

    preload: function() {
        let alien = new Alien(220, 100, { x: 1, y: -1 });
        let floorSection1 = new FloorSection(450, 0, 150, 800, 'Green');
        let floorSection2 = new FloorSection(900, 0, 150, 800, 'Blue');
        let wall1 = new Wall(150, 0, 4000, 70);
        let wall2 = new Wall(150, 0, 70, 2000);
        let wall3 = new Wall(WORLDWIDTH - 35, 0, 70, 2000);
        let wall4 = new Wall(150, WORLDHEIGHT - 35, 4000, 70);
        let switch1 = new Switch('blueButton', 255, 212, 'assets/Items/buttonBlue_pressed.png', 'assets/Items/buttonBlue.png', false, true, false, toggle.bind(this, floorSection2), 90);
        let playerButtonPanel = new ButtonPanel(
            () => {},
            () => { floorSection1.on = !floorSection1.on },
            () => {},
            () => {
                if (music) {
                    music.stop();
                }
                game.state.start('Level1');
            }
        );

        let goal1 = new Switch('goal1', 1250, 550, 'assets/Tiles/goal1.png', '', false, true, true, goToLevel2);
        game.load.audio('bgm', ['assets/Sound/Rainbow_Run.mp3']);

        aliens = [alien];
        floorSections = [floorSection1, floorSection2];
        walls = [wall1, wall2, wall3, wall4];
        switches = [goal1, switch1];
        gameObjects = aliens.concat(floorSections, walls, switches, playerButtonPanel)
        preloadAll(gameObjects);
        game.stage.backgroundColor = '#eee';

    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        music = game.add.audio('bgm');
        music.loop = true;
        music.volume = 0.3;
        music.play();
        createAll(gameObjects);
        //HOW 2 DISABLE BUTTS
        // playerButtonPanel.buttons.q.callback = () => {
        //   playerButtonPanel.disable('w');
        // }
    },

    update: function() {
        updateAll(gameObjects);
    }
}