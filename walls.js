class Walls {
  constructor(game, image, x, y) {
    this.x = x;
    this.y = y;
    //this.tile = game.context.drawImage(image, x, y, 50, 50);
  }

  checkIntersection(element) {
    return (
      element.x + 25 >= this.x - 25 &&
      element.x - 25 <= this.x + 25 &&
      element.y + 25 >= this.y - 25 &&
      element.y - 25 <= this.y + 25
    );
    //check if player is intersecting with wall
    // if this.x=550 && this.y = 400 -> only move up
  }
}
