var alien = {

    preload: () => {
      game.load.atlasJSONHash('alien', 'assets/p1_walk/p1_walk.png', 'assets/p1_walk/p1_walk.json');
    },

    create: () => {
      sprite = game.add.sprite(game.world.width/2,0, 'alien');

      game.physics.enable(sprite, Phaser.Physics.ARCADE);
      sprite.body.collideWorldBounds = true;
      sprite.animations.add('spin');
      sprite.animations.play('spin', 20, true);
      sprite.speed = 5;
      sprite.anchor.setTo(0.5,0);

      sprite.inputEnabled = true;
      sprite.events.onInputDown.add(alien.reverse_direction, this);

    },

    reverse_direction: () => {
      sprite.speed *= -1;
      sprite.scale.x *= -1;
    },

    update: () => {
      sprite.x += sprite.speed
      if (sprite.x >= game.world.width - Math.abs(sprite.width * sprite.anchor.x)) {
        alien.reverse_direction();
      }
      else if(sprite.x <= Math.abs(sprite.width * sprite.anchor.x)) {
        alien.reverse_direction();
      }
    }
};
