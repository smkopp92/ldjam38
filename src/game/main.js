var game = new Phaser.Game(1360, 650, Phaser.CANVAS, '', "game");
game.state.add("GameTitle",gameTitle);
game.state.add("Level1",level1);
game.state.add("Level2",level2);
game.state.start("GameTitle");
