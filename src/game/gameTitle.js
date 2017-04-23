var gameTitle = function(game){};

gameTitle.prototype = {
  preload: function(){
    this.game.load.image("play","assets/Tiles/boxCoinAlt.png");
  },
  create: function(){
    var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
    playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
    this.game.state.start("Level1");
  }
}
