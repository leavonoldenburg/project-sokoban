const enemyImage = new Image();
enemyImage.src = './images/Woodcutter.png';

class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  runLogic() {
    //run around randomly in enclosed space
    //when door opened, fire 3 times in a row on player, then stop for several seconds
  }

  checkIntersection(element) {
    //check if enemy has overlapping coordinates with player
  }

  paint() {
    const context = this.game.context;
    context.save();
    enemyImage.onload = function () {
      context.drawImage(enemyImage, game.enemy.x, game.enemy.y, 80, 100);
    };
    context.restore();
  }
}
