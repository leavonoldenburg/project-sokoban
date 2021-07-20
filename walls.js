const leftUpperCornerImage = new Image();
leftUpperCornerImage.src = './images/Tile_01.png';

const rightUpperCornerImage = new Image();
rightUpperCornerImage.src = './images/Tile_03.png';

const leftLowerCornerImage = new Image();
leftLowerCornerImage.src = './images/Tile_21.png';

const rightLowerCornerImage = new Image();
rightLowerCornerImage.src = './images/Tile_23.png';

const rightEdgeImage = new Image();
rightEdgeImage.src = './images/Tile_13.png';

const leftImage = new Image();
leftImage.src = './images/Tile_32.png';

const middleImage = new Image();
middleImage.src = './images/Tile_33.png';

const rightImage = new Image();
rightImage.src = './images/Tile_34.png';

const upperCornerImage = new Image();
upperCornerImage.src = './images/Tile_54.png';

const lowerCornerImage = new Image();
lowerCornerImage.src = './images/Tile_56.png';

const sidesImage = new Image();
sidesImage.src = './images/Tile_55.png';

const lowerImage = new Image();
lowerImage.src = './images/Tile_53.png';

const lowerLeftImage = new Image();
lowerLeftImage.src = './images/Tile_51.png';

const leftSideImage = new Image();
leftSideImage.src = './images/Tile_37.png';

const backgroundImg = new Image();
backgroundImg.src = './images/Tile_12.png';

const allImages = {
  leftUpperCorner: leftUpperCornerImage,
  rightUpperCorner: rightUpperCornerImage,
  leftLowerCorner: leftLowerCornerImage,
  rightLowerCorner: rightLowerCornerImage,
  rightEdge: rightEdgeImage,
  left: leftImage,
  middle: middleImage,
  right: rightImage,
  upperCorner: upperCornerImage,
  lowerCorner: lowerCornerImage,
  sides: sidesImage,
  lower: lowerImage,
  lowerLeft: lowerLeftImage,
  leftSide: leftSideImage,
  background: backgroundImg,
  box: boxImg
};

class Wall {
  constructor(game, x, y, imageName) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.imageName = imageName;
  }

  draw() {
    const imageName = this.imageName;
    const image = allImages[imageName];

    this.game.context.drawImage(image, this.x, this.y, 50, 50);
  }

  checkIntersection(element) {
    return (
      element.x + 50 >= this.x &&
      //disable moving right
      element.x <= this.x + 50 &&
      //disable moving left
      element.y + 50 >= this.y &&
      //disable moving down
      element.y <= this.y + 50
      //disable moving up
    );
  }
}
