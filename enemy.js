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
    /*this.y--;
    if (this.y === 300) {
      this.y++;
      this.x++;
      if (this.x === 800) {
        this.y++;
        this.x--;
        if (this.y === 350) {
          this.x--;
          this.y += 4;
        }
      }
    }*/
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
