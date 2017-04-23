var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', "game");
game.state.add("GameTitle",gameTitle);
game.state.add("Level1",level1);
game.state.start("GameTitle");
