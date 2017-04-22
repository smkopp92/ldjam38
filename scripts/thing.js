function Thing() {

  this.image = images[0];
  this.x = 30;
  this.y = 30;
  this.speed = 5

  this.draw =  function(){
    gameContext.drawImage(this.image,this.x,this.y);
  };

  this.update = function(){
    if(keys[key.up]||keys[key.w]) {this.y-=this.speed;}
    if(keys[key.down]||keys[key.s]) {this.y+=this.speed;}
    if(keys[key.left]||keys[key.a]) {this.x-=this.speed;}
    if(keys[key.right]||keys[key.d]) {this.x+=this.speed;}
  };
};
