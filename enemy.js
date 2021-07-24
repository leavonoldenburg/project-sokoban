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
    this.x = this.x - 0.3;
  }

  checkIntersection(element) {
    //check if enemy has overlapping coordinates with player
    return (
      element.x >= this.x &&
      element.x <= this.x + 50 &&
      element.y >= this.y &&
      element.y - 50 <= this.y
    );
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(enemyImage, game.enemy.x, game.enemy.y, 100, 100);
    context.restore();
  }
}
