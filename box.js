const boxImg = new Image();
boxImg.src = './images/2.png';

class Box {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.game.context.drawImage(boxImg, this.x, this.y, 50, 50);
  }

  boxWallIntersect() {
    const walls = this.game.walls;
    for (const wall of walls) {
      const boxWallIntersect = wall.checkIntersection(this);
      if (boxWallIntersect) {
        switch (this.game.player.direction) {
          case 'up':
            this.game.player.paintPush();
            this.y -= 0;
            break;
          case 'down':
            this.game.player.paintPush();
            this.y += 0;
            break;
          case 'right':
            this.game.player.paintPush();
            this.x += 0;
            break;
          case 'left':
            this.game.player.paintPush();
            this.x -= 0;
            break;
        }
      }
    }
  }

  BoxBoxIntersect() {
    for (let s = 0; s < this.game.boxes.length; s++) {}

    for (const box of this.game.boxes) {
      const boxAndBoxIntersect = box.checkIntersection(this);
      if (boxAndBoxIntersect) {
        switch (this.game.player.direction) {
          case 'up':
            this.game.player.paintPush();
            this.y -= 0;
            break;
          case 'down':
            this.game.player.paintPush();
            this.y += 0;
            break;
          case 'right':
            this.game.player.paintPush();
            this.x += 0;
            break;
          case 'left':
            this.game.player.paintPush();
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
}
