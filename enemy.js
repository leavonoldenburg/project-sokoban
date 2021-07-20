const enemyImage = new Image();
enemyImage.src = './images/0_Golem_Walking_000.png';
enemyImage.id = 'enemy';

class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  runLogic() {
    /*this.y--;
    if (this.y === 280) {
      this.y++;
      this.x++;
      if (this.x === 825) {
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
      element.x + 51 > this.x &&
      element.x < this.x + 51 &&
      element.y + 51 > this.y &&
      element.y < this.y + 51
    );
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(enemyImage, game.enemy.x, game.enemy.y, 100, 100);
    context.restore();
  }
}
