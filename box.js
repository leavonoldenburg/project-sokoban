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
