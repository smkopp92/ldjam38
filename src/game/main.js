let game = new Phaser.Game(WORLDWIDTH, WORLDHEIGHT, Phaser.CANVAS, '', "game");
game.state.add("GameTitle",gameTitle);
game.state.add("Level1",level1);
game.state.add("Level2",level2);
game.state.start("GameTitle");
