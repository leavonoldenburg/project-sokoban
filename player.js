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
  }

  move(direction) {
    switch (direction) {
      case 'up':
        if (this.playerCanMoveUp) {
          this.direction = 'up';
          this.y -= 50;
          break;
        } else {
          this.y -= 0;
          break;
        }
      case 'down':
        if (this.playerCanMoveDown) {
          this.direction = 'down';
          this.y += 50;
          break;
        } else {
          this.y += 0;
          break;
        }
      case 'right':
        if (this.playerCanMoveRight) {
          this.direction = 'right';
          this.x += 50;
          break;
        } else {
          this.x += 0;
          break;
        }
      case 'left':
        if (this.playerCanMoveLeft) {
          this.direction = 'left';
          this.x -= 50;
          break;
        } else {
          this.x += 0;
          break;
        }
      case 'space':
        this.paintAttack();

        if (this.x === 700 && this.y === 350) {
          this.game.enemy.enemyAlive = false;
        }
        break;
    }
  }

  playerWallIntersect() {
    const walls = this.game.walls;
    this.playerCanMoveRight = true;
    this.playerCanMoveLeft = true;
    this.playerCanMoveUp = true;
    this.playerCanMoveDown = true;

    if (this.x === 550 && this.y === 400) {
      this.playerCanMoveRight = false;
      this.playerCanMoveLeft = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 550 && this.y === 350) {
      this.playerCanMoveUp = false;
    }
    if (this.x === 600 && this.y === 350) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 650 && this.y === 350) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 700 && this.y === 300) {
      this.playerCanMoveUp = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 750 && this.y === 300) {
      this.playerCanMoveUp = false;
    }
    if (this.x === 800 && this.y === 300) {
      this.playerCanMoveUp = false;
    }
    if (this.x === 850 && this.y === 300) {
      this.playerCanMoveUp = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 850 && this.y === 350) {
      this.playerCanMoveRight = false;
    }
    if (this.x === 850 && this.y === 400) {
      this.playerCanMoveRight = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 800 && this.y === 400) {
      this.playerCanMoveDown = false;
    }
    if (this.x === 750 && this.y === 400) {
      this.playerCanMoveDown = false;
    }
    if (this.x === 700 && this.y === 400) {
      this.playerCanMoveDown = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 500 && this.y === 350) {
      this.playerCanMoveDown = false;
      this.playerCanMoveUp = false;
    }
    if (this.x === 450 && this.y === 350) {
      this.playerCanMoveUp = false;
    }
    if (this.x === 450 && this.y === 400) {
      this.playerCanMoveRight = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 450 && this.y === 450) {
      this.playerCanMoveRight = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 400 && this.y === 450) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 350 && this.y === 450) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 300 && this.y === 450) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 250 && this.y === 450) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 250 && this.y === 400) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 200 && this.y === 350) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 150 && this.y === 350) {
      this.playerCanMoveDown = false;
    }
    if (this.x === 100 && this.y === 350) {
      this.playerCanMoveDown = false;
    }
    if (this.x === 50 && this.y === 350) {
      this.playerCanMoveDown = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 50 && this.y === 300) {
      this.playerCanMoveUp = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 100 && this.y === 300) {
      this.playerCanMoveUp = false;
    }
    if (this.x === 150 && this.y === 300) {
      this.playerCanMoveRight = false;
    }
    if (this.x === 150 && this.y === 250) {
      this.playerCanMoveRight = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 150 && this.y === 200) {
      this.playerCanMoveUp = false;
      this.playerCanMoveLeft = false;
    }
    if (this.x === 200 && this.y === 200) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 250 && this.y === 150) {
      this.playerCanMoveLeft = false;
    }
    if (this.x === 250 && this.y === 100) {
      this.playerCanMoveLeft = false;
    }
    if (this.x === 250 && this.y === 50) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveUp = false;
    }
    if (this.x === 300 && this.y === 50) {
      this.playerCanMoveUp = false;
    }
    if (this.x === 350 && this.y === 50) {
      this.playerCanMoveUp = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 350 && this.y === 100) {
      this.playerCanMoveRight = false;
    }
    if (this.x === 350 && this.y === 150) {
      this.playerCanMoveRight = false;
    }
    if (this.x === 350 && this.y === 200) {
      this.playerCanMoveDown = false;
    }
    if (this.x === 300 && this.y === 200) {
      this.playerCanMoveDown = false;
    }
    if (this.x === 250 && this.y === 250) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 250 && this.y === 300) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 400 && this.y === 200) {
      this.playerCanMoveUp = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 400 && this.y === 250) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 400 && this.y === 300) {
      this.playerCanMoveLeft = false;
      this.playerCanMoveRight = false;
    }
    if (this.x === 350 && this.y === 350) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 300 && this.y === 350) {
      this.playerCanMoveUp = false;
      this.playerCanMoveDown = false;
    }
    if (this.x === 400 && this.y === 350) {
      this.playerCanMoveDown = false;
    }
  }

  playerBoxIntersect() {
    const boxes = this.game.boxes;
    for (const box of boxes) {
      const playerAndBoxIntersect = box.checkIntersection(this);
      if (playerAndBoxIntersect) {
        switch (this.direction) {
          case 'up':
            //this.paintPush();
            console.log(box);
            //if (box.boxCanMoveUp) {
            box.y -= 50;
            console.log(box);
            break;
          //} else {
          // box.y -= 0;
          //break;
          //}

          case 'down':
            //this.paintPush();

            //if (box.boxCanMoveDown) {
            box.y += 50;
            break;
            //} else {
            // box.y += 0;
            // break;
            //}
            console.log(box);
          case 'right':
            //this.paintPush();

            //if (box.boxCanMoveRight) {
            box.x += 50;
            break;
            //} else {
            // box.x += 0;
            //  break;
            //}
            console.log(box);
          case 'left':
            //this.paintPush();
            //if (box.boxCanMoveLeft) {
            box.x -= 50;

            break;
            //} else {
            //  box.x -= 0;
            //  break;
            //}
            console.log(box);
        }
        // Also check if box intersects with wall
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
    window.requestAnimationFrame(() => {
      context.drawImage(
        attackImage,
        0 + 40 * Math.round(this.frame / 5),
        12,
        43,
        43,
        this.x,
        this.y,
        50,
        50
      );
      context.restore();
      this.frame++;
      this.frame %= 60;
    });
  }

  paintPush() {
    const context = this.game.context;
    context.save();
    context.drawImage(
      pushImage,
      0 + 40 * Math.round(this.frame / 10),
      12,
      40,
      37,
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
    const context = this.game.context;
    context.save();
    context.drawImage(playerImage, 0, 12, 40, 37, this.x, this.y, 50, 50);
    context.restore();
  }
}
