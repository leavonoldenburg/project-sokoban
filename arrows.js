const arrowImg = new Image();
arrowImg.src =
  './images/8-83009_bow-and-arrow-hunger-games-clip-art-download-fire-arrow.png';

class Arrows {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.drawImage(arrowImg, this.x, this.y, 50, 10);
    context.restore();
  }

  runLogic() {
    this.x++;
  }
}
