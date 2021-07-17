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
        this.y -= 50;
        break;
      case 'down':
        this.y += 50;
        break;
      case 'right':
        this.x += 50;
        break;
      case 'left':
        this.x -= 50;
        break;
      case 'space':
        this.paintAttack();
        break;
    }
  }

  playerWallIntersect() {
    const walls = this.game.walls;
    //let playerCanMove = true;
    this.playerCanMoveRight = true;
    this.playerCanMoveLeft = true;
    this.playerCanMoveUp = true;
    this.playerCanMoveDown = true;

    for (const wall of walls) {
      //if (wall.checkIntersection(this)) {
      //playerCanMove = false;

      if (this.x + 50 >= wall.x) {
        //this.game.disableMoveRight();
        //this.playerCanMoveRight = false;
      }
      if (this.x <= wall.x + 50) {
        //this.game.disableMoveLeft();
        //this.playerCanMoveLeft = false;
      }
      if (this.y + 50 >= wall.y) {
        //this.game.disableMoveDown();
        //this.playerCanMoveDown = false;
      }
      if (this.y <= wall.y + 50) {
        //this.game.disableMoveUp();
        //this.playerCanMoveUp = false;
      }
    }
  }

  playerBoxIntersect() {
    const boxes = this.games.boxes;
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
        40,
        37,
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
