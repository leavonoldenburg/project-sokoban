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
          this.y -= 50;
          break;
        } else {
          this.player.y -= 0;
          break;
        }
      case 'down':
        if (this.playerCanMoveDown) {
          this.y += 50;
          break;
        } else {
          this.player.y += 0;
          break;
        }
      case 'right':
        if (this.playerCanMoveRight) {
          this.x += 50;
          break;
        } else {
          this.player.x += 0;
          break;
        }
      case 'left':
        if (this.playerCanMoveLeft) {
          this.x -= 50;
          break;
        } else {
          this.player.x += 0;
          break;
        }
      case 'space':
        this.paintAttack();
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

    /*for (const wall of walls) {
      if (this.x + 50 >= wall.x) {
        //this.playerCanMoveRight = false;
      }
      if (this.x <= wall.x + 50) {
        //this.playerCanMoveLeft = false;
      }
      if (this.y + 50 >= wall.y) {
        //this.playerCanMoveDown = false;
      }
      if (this.y <= wall.y + 50) {
        //this.playerCanMoveUp = false;
      }
    }*/
  }

  playerBoxIntersect() {
    const walls = this.game.walls;
    for (const wall of walls) {
      for (let r = 0; r < this.game.boxes.length; r++) {
        if (this.game.boxes[r].x + 50 === this.x && this.move('left')) {
          if (this.game.boxes[r].x === wall.x + 50) {
            this.game.boxes[r].x += 0;
            this.x -= 0;
          }
        }
      }
    }

    /*const boxes = this.games.boxes;
    for (const box of boxes) {
      const playerAndBoxIntersect = box.checkIntersection(this);
      if (playerAndBoxIntersect) {
        switch (direction) {
          case 'up':
            this.paintPush();
            box.y -= 50;
            break;
          case 'down':
            this.paintPush();
            box.y += 50;
            break;
          case 'right':
            this.paintPush();
            box.x += 50;
            break;
          case 'left':
            this.paintPush();
            box.x -= 50;
            break;
        }
        // Also check if box intersects with wall
      }
    }*/
  }

  playerEnemyIntersect() {
    if (this.game.enemy.checkIntersection(this)) {
      this.game.lose();
    }
  }

  playerAttackEnemy(element) {
    //when player stands in front, behind, above or below enemy and hits space, enemy dead
    if (this.x + 50 === element.x && this.move('space')) {
    }
    if (this.x === element.x + 50 && this.move('space')) {
      //enemy dead
    }
    if (this.y + 50 === element.y && this.move('space')) {
      //enemy dead
    }
    if (this.y === element.x + 50 && this.move('space')) {
      //enemy dead
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
