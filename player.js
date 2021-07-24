const attackImage = new Image();
attackImage.src = './images/Woodcutter_attack1.png';

const pushImage = new Image();
pushImage.src = './images/Woodcutter_push.png';

const playerImage = new Image();
playerImage.src = './images/Woodcutter.png';

class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.paintPlayer = true;
  }

  move(direction) {
    let newX = this.x;
    let newY = this.y;
    switch (direction) {
      case 'up':
        this.paintPlayer = true;
        this.direction = 'up';
        newY -= 50;
        break;
      case 'down':
        this.paintPlayer = true;
        this.direction = 'down';
        newY += 50;
        break;
      case 'right':
        this.paintPlayer = true;
        this.direction = 'right';
        newX += 50;
        break;
      case 'left':
        this.paintPlayer = true;
        this.direction = 'left';
        newX -= 50;
        break;
      case 'space':
        this.paintPlayer = false;
        if (this.x < this.game.enemy.x && this.x + 20 >= this.game.enemy.x) {
          this.game.enemy.enemyAlive = false;
        }
        if (this.game.enemy.x < this.x && this.x - 100 <= this.game.enemy.x) {
          this.game.enemy.enemyAlive = false;
        }
        if (!this.game.enemy.enemyAlive) {
          this.game.enemy.x = 0;
          this.game.enemy.y = 0;
        }
        break;
    }

    let playerCanMove = true;

    for (const wall of this.game.walls) {
      const playerAndWallIntersect = wall.checkIntersection({
        x: newX,
        y: newY
      });
      if (playerAndWallIntersect) {
        playerCanMove = false;
      }
    }

    const boxes = this.game.boxes;
    for (const box of boxes) {
      const playerAndBoxIntersect = box.checkIntersection({ x: newX, y: newY });
      if (playerAndBoxIntersect) {
        const boxMoved = box.move(direction);
        if (!boxMoved) {
          playerCanMove = false;
        }
      }
    }

    if (playerCanMove) {
      this.x = newX;
      this.y = newY;
    }
  }

  playerBoxIntersect() {
    const boxes = this.game.boxes;
    for (const box of boxes) {
      const playerAndBoxIntersect = box.checkIntersection(this);
      if (playerAndBoxIntersect) {
        switch (this.direction) {
          case 'up':
            box.y -= 50;
            break;

          case 'down':
            box.y += 50;
            break;

          case 'right':
            box.x += 50;
            break;

          case 'left':
            box.x -= 50;
            break;
        }
      }
    }
  }

  playerEnemyIntersect() {
    if (this.game.enemy.checkIntersection(this)) {
      this.game.lose();
    }
  }

  paintAttack() {
    const context = this.game.context;
    context.save();
    context.drawImage(
      attackImage,
      0 + 49 * Math.round(this.frame / 10),
      6,
      49,
      43,
      this.x,
      this.y,
      50,
      50
    );
    context.restore();
    this.frame++;
    this.frame %= 50;
  }

  paint() {
    if (this.paintPlayer) {
      const context = this.game.context;
      context.save();
      context.drawImage(playerImage, 0, 12, 40, 37, this.x, this.y, 50, 50);
      context.restore();
    } else {
      this.paintAttack();
    }
  }
}
