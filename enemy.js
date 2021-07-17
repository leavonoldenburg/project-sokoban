const enemyImage = new Image();
enemyImage.src = './images/0_Golem_Walking_000.png';

class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  runLogic() {
    this.y++;

    if (this.y === 360) {
      this.y--;
      this.x++;
      if (this.x === 825) {
        this.y--;
        this.x--;
        if (this.y === 250) {
          this.x--;
        }
      }
    }

    //run around randomly in enclosed space -> stop at wall and reverse movement
    //when door opened, fire 3 times in a row on player, then stop for several seconds
  }

  checkIntersection(element) {
    //check if enemy has overlapping coordinates with player
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(enemyImage, game.enemy.x, game.enemy.y, 100, 100);
    context.restore();
  }
}
