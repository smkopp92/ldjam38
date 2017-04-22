var alien = {

    preload: () => {
      game.load.atlasJSONHash('alian', 'assets/p1_walk/p1_walk.png', 'assets/p1_walk/p1_walk.json');
    },

    create: () => {
      sprite = game.add.sprite(0,0, 'alian');
      sprite.animations.add('spin');
      sprite.animations.play('spin', 20, true);
      sprite.speed = 5;
      sprite.anchor.setTo(0.5,0);

      sprite.inputEnabled = true;
      sprite.events.onInputDown.add(reverse_direction, this);

    },

    reverse_direction: () => {
      sprite.speed *= -1;
      sprite.scale.x *= -1;
    },

    update: () => {
      sprite.x += sprite.speed
      if (sprite.x >= 500) {
        alien.reverse_direction();
      }
      else if(sprite.x <= 1) {
        alien.reverse_direction();
      }
    }
};
