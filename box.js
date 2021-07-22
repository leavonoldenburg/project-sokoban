const boxImg = new Image();
boxImg.src = './images/2.png';

class Box {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.boxCanMoveUp = true;
    this.boxCanMoveDown = true;
    this.boxCanMoveLeft = true;
    this.boxCanMoveRight = true;
  }

  draw() {
    this.game.context.drawImage(boxImg, this.x, this.y, 50, 50);
  }

  boxWallIntersect() {
    const walls = this.game.walls;
    for (const wall of walls) {
      if (wall.checkIntersection(this)) {
        switch (this.game.player.direction) {
          case 'up':
            this.boxCanMoveUp = false;
            //this.y -= 0;
            break;
          case 'down':
            this.boxCanMoveDown = false;
            //this.y += 0;
            break;
          case 'right':
            this.boxCanMoveRight = false;
            //this.x += 0;
            break;
          case 'left':
            this.boxCanMoveLeft = false;
            //this.x -= 0;
            break;
        }
      }
    }
  }

  BoxBoxIntersect() {
    for (const box of this.game.boxes) {
      const boxAndBoxIntersect = box.checkIntersection(this);
      if (boxAndBoxIntersect) {
        switch (this.game.player.direction) {
          case 'up':
            //this.game.player.paintPush();
            this.y -= 0;
            break;
          case 'down':
            //this.game.player.paintPush();
            this.y += 0;
            break;
          case 'right':
            //this.game.player.paintPush();
            this.x += 0;
            break;
          case 'left':
            //this.game.player.paintPush();
            this.x -= 0;
            break;
        }
      }
    }
  }

  checkIntersection(element) {
    return (
      element.x >= this.x &&
      element.x <= this.x + 49 &&
      element.y >= this.y &&
      element.y <= this.y + 49
    );
  }

  move(direction) {
    let intersects = false;
    let newX = this.x;
    let newY = this.y;
    switch (direction) {
      case 'up':
        newY -= 50;
        break;
      case 'down':
        newY += 50;
        break;
      case 'right':
        newX += 50;
        break;
      case 'left':
        newX -= 50;
        break;
    }
    for (const box of this.game.boxes) {
      if (box.checkIntersection({ x: newX, y: newY })) {
        intersects = true;
      }
    }
    for (const wall of this.game.walls) {
      if (wall.checkIntersection({ x: newX, y: newY })) {
        intersects = true;
      }
    }
    if (intersects) {
      return false;
    } else {
      this.x = newX;
      this.y = newY;
      return true;
    }
  }
}
