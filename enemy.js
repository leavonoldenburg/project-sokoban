const enemyImage = new Image();
enemyImage.src = './images/0_Golem_Walking_000.png';
enemyImage.id = 'enemy';

class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.enemyAlive = true;
  }

  runLogic() {
    this.x -= 0.1;
  }

  checkIntersection(element) {
    //check if enemy has overlapping coordinates with player
    return (
      element.x - 50 === this.x &&
      //element.x === this.x &&
      element.y - 50 === this.y
      //element.y === this.y
    );
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(enemyImage, game.enemy.x, game.enemy.y, 125, 125);
    context.restore();
  }
}
