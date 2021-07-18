class Box {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  boxWallIntersect() {
    const walls = this.games.walls;
    for (const wall of walls) {
      const boxWallIntersect = wall.checkIntersection(this);
      if (boxWallIntersect) {
        switch (direction) {
          case 'up':
            this.paintPush();
            box.y -= 0;
            break;
          case 'down':
            this.paintPush();
            box.y += 0;
            break;
          case 'right':
            this.paintPush();
            box.x += 0;
            break;
          case 'left':
            this.paintPush();
            box.x -= 0;
            break;
        }
      }
    }
  }

  checkIntersection(element) {
    return (
      element.x + 50 >= this.x ||
      element.x <= this.x + 50 ||
      element.y + 50 >= this.y ||
      element.y <= this.y + 50
    );
  }
}
