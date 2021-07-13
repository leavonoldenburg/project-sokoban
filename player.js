const playerImage = new Image();
playerImage.src = './images/Woodcutter.png';

class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
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
    }
    /*
    const walls = this.game.walls;
    let playerCanMove = true;
    for (const wall of walls) {
      const playerAndWallIntersect = wall.checkIntersection(this);
      if (playerAndWallIntersect) {
        playerCanMove = false;
      }
    }
    if (playerCanMove) {
      const boxes = this.games.boxes;
      for (const box of boxes) {
        const playerAndBoxIntersect = box.checkIntersection(this);
        if (playerAndBoxIntersect) {
          switch (direction) {
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
          // Also check if box intersects with wall
        }
      }
    }
    */
  }

  runLogic() {
    // if standing in front of wall, stop
    //if standing in front of a box, push
  }

  checkIntersection(wallX, wallY) {
    //check if player is intersecting with wall
    // if this.x=550 && this.y = 400 -> only move up
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(playerImage, this.x, this.y, 50, 50);

    context.restore();
  }
}
