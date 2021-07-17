const wallMap = [
  [
    0,
    0,
    0,
    0,
    'leftUpperCorner',
    'middle',
    'middle',
    'middle',
    'rightUpperCorner',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [0, 0, 0, 0, 'sides', 0, 0, 0, 'sides', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 'sides', 0, 0, 0, 'sides', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0,
    0,
    'leftUpperCorner',
    'middle',
    'rightLowerCorner',
    0,
    0,
    0,
    'leftLowerCorner',
    'rightUpperCorner',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [0, 0, 'sides', 0, 0, 0, 0, 0, 0, 'sides', 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    'leftUpperCorner',
    'middle',
    'rightLowerCorner',
    0,
    'upperCorner',
    0,
    'leftUpperCorner',
    'rightUpperCorner',
    0,
    'sides',
    0,
    0,
    0,
    'leftUpperCorner',
    'middle',
    'middle',
    'middle',
    'middle',
    'rightUpperCorner'
  ],
  [
    'sides',
    0,
    0,
    0,
    'lowerCorner',
    0,
    'leftLowerCorner',
    'rightLowerCorner',
    0,
    'leftLowerCorner',
    'middle',
    'middle',
    'middle',
    'rightLowerCorner',
    0,
    0,
    0,
    0,
    'sides'
  ],
  ['sides', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'sides'],
  [
    'leftLowerCorner',
    'middle',
    'middle',
    'middle',
    'rightUpperCorner',
    0,
    'left',
    'middle',
    'right',
    0,
    'upperCorner',
    0,
    'leftUpperCorner',
    'rightUpperCorner',
    0,
    0,
    0,
    0,
    'sides'
  ],
  [
    0,
    0,
    0,
    0,
    'sides',
    0,
    0,
    0,
    0,
    0,
    'leftSide',
    'middle',
    'lowerLeft',
    'lower',
    'middle',
    'middle',
    'middle',
    'middle',
    'rightLowerCorner'
  ],
  [
    0,
    0,
    0,
    0,
    'leftLowerCorner',
    'middle',
    'middle',
    'middle',
    'middle',
    'middle',
    'rightLowerCorner',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
];

class Game {
  constructor(canvas, screens) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.screens = screens;
    this.running = false;
  }

  /*drawGrid() {
    for (let x = 0; x <= 950; x += 50) {
      for (let y = 0; y <= 550; y += 50) {
        this.context.beginPath();
        this.context.moveTo(x, 0);
        this.context.lineTo(x, 550);
        this.context.strokeStyle = 'black';
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.moveTo(0, y);
        this.context.lineTo(950, y);
        this.context.strokeStyle = 'black';
        this.context.stroke();
        this.context.closePath();
      }
    }
  }*/

  drawMap() {
    /*

    this.context.drawImage(leftUpperCornerImage, 0, 50 * 5, 50, 50);
    this.context.drawImage(leftUpperCornerImage, 50 * 2, 50 * 3, 50, 50);
    this.context.drawImage(leftUpperCornerImage, 50 * 6, 50 * 5, 50, 50);
    this.context.drawImage(leftUpperCornerImage, 50 * 13, 50 * 5, 50, 50);
    this.context.drawImage(leftUpperCornerImage, 50 * 4, 50 * 0, 50, 50);
    this.context.drawImage(leftUpperCornerImage, 50 * 12, 50 * 8, 50, 50);
    this.context.drawImage(rightUpperCornerImage, 50 * 8, 50 * 0, 50, 50);
    this.context.drawImage(rightUpperCornerImage, 50 * 9, 50 * 3, 50, 50);
    this.context.drawImage(rightUpperCornerImage, 50 * 18, 50 * 5, 50, 50);
    this.context.drawImage(rightUpperCornerImage, 50 * 7, 50 * 5, 50, 50);
    this.context.drawImage(rightUpperCornerImage, 50 * 13, 50 * 8, 50, 50);
    this.context.drawImage(rightUpperCornerImage, 50 * 4, 50 * 8, 50, 50);
    this.context.drawImage(leftLowerCornerImage, 0, 50 * 8, 50, 50);
    this.context.drawImage(leftLowerCornerImage, 50 * 4, 50 * 10, 50, 50);
    this.context.drawImage(leftLowerCornerImage, 50 * 6, 50 * 6, 50, 50);
    this.context.drawImage(leftLowerCornerImage, 50 * 9, 50 * 6, 50, 50);
    this.context.drawImage(leftLowerCornerImage, 50 * 8, 50 * 3, 50, 50);
    this.context.drawImage(rightLowerCornerImage, 50 * 4, 50 * 3, 50, 50);
    this.context.drawImage(rightLowerCornerImage, 50 * 7, 50 * 6, 50, 50);
    this.context.drawImage(rightLowerCornerImage, 50 * 10, 50 * 10, 50, 50);
    this.context.drawImage(rightLowerCornerImage, 50 * 18, 50 * 9, 50, 50);
    this.context.drawImage(rightLowerCornerImage, 50 * 13, 50 * 6, 50, 50);
    this.context.drawImage(rightLowerCornerImage, 50 * 2, 50 * 5, 50, 50);
    this.context.drawImage(sidesImage, 50 * 18, 50 * 8, 50, 50);
    this.context.drawImage(sidesImage, 50 * 18, 50 * 7, 50, 50);
    this.context.drawImage(sidesImage, 50 * 18, 50 * 6, 50, 50);
    this.context.drawImage(sidesImage, 50 * 4, 50 * 1, 50, 50);
    this.context.drawImage(sidesImage, 50 * 4, 50 * 2, 50, 50);
    this.context.drawImage(sidesImage, 50 * 8, 50 * 1, 50, 50);
    this.context.drawImage(sidesImage, 50 * 8, 50 * 2, 50, 50);
    this.context.drawImage(sidesImage, 50 * 2, 50 * 4, 50, 50);
    this.context.drawImage(sidesImage, 50 * 9, 50 * 4, 50, 50);
    this.context.drawImage(sidesImage, 50 * 9, 50 * 5, 50, 50);
    this.context.drawImage(leftImage, 50 * 6, 50 * 8, 50, 50);
    this.context.drawImage(middleImage, 50 * 7, 50 * 8, 50, 50);
    this.context.drawImage(rightImage, 50 * 8, 50 * 8, 50, 50);
    this.context.drawImage(sidesImage, 0, 50 * 6, 50, 50);
    this.context.drawImage(sidesImage, 0, 50 * 7, 50, 50);
    this.context.drawImage(middleImage, 50 * 5, 0, 50, 50);
    this.context.drawImage(middleImage, 50 * 6, 0, 50, 50);
    this.context.drawImage(middleImage, 50 * 7, 0, 50, 50);
    this.context.drawImage(middleImage, 50 * 5, 50 * 10, 50, 50);
    this.context.drawImage(middleImage, 50 * 6, 50 * 10, 50, 50);
    this.context.drawImage(middleImage, 50 * 7, 50 * 10, 50, 50);
    this.context.drawImage(middleImage, 50 * 8, 50 * 10, 50, 50);
    this.context.drawImage(middleImage, 50 * 9, 50 * 10, 50, 50);
    this.context.drawImage(middleImage, 50 * 10, 50 * 6, 50, 50);
    this.context.drawImage(middleImage, 50 * 11, 50 * 6, 50, 50);
    this.context.drawImage(middleImage, 50 * 12, 50 * 6, 50, 50);
    this.context.drawImage(middleImage, 50 * 17, 50 * 9, 50, 50);
    this.context.drawImage(middleImage, 50 * 16, 50 * 9, 50, 50);
    this.context.drawImage(middleImage, 50 * 14, 50 * 9, 50, 50);
    this.context.drawImage(middleImage, 50 * 15, 50 * 9, 50, 50);
    this.context.drawImage(middleImage, 50 * 11, 50 * 9, 50, 50);
    this.context.drawImage(middleImage, 50 * 1, 50 * 8, 50, 50);
    this.context.drawImage(middleImage, 50 * 2, 50 * 8, 50, 50);
    this.context.drawImage(middleImage, 50 * 3, 50 * 8, 50, 50);
    this.context.drawImage(middleImage, 50 * 14, 50 * 5, 50, 50);
    this.context.drawImage(middleImage, 50 * 15, 50 * 5, 50, 50);
    this.context.drawImage(middleImage, 50 * 16, 50 * 5, 50, 50);
    this.context.drawImage(middleImage, 50 * 17, 50 * 5, 50, 50);
    this.context.drawImage(middleImage, 50 * 1, 50 * 5, 50, 50);
    this.context.drawImage(middleImage, 50 * 3, 50 * 3, 50, 50);
    this.context.drawImage(upperCornerImage, 50 * 10, 50 * 8, 50, 50);
    this.context.drawImage(upperCornerImage, 50 * 4, 50 * 5, 50, 50);
    this.context.drawImage(lowerCornerImage, 50 * 4, 50 * 6, 50, 50);
    this.context.drawImage(sidesImage, 50 * 4, 50 * 9, 50, 50);
    this.context.drawImage(leftSideImage, 50 * 10, 50 * 9, 50, 50);
    this.context.drawImage(lowerImage, 50 * 13, 50 * 9, 50, 50);
    this.context.drawImage(lowerLeftImage, 50 * 12, 50 * 9, 50, 50);
    */

    const backgroundImg = new Image();
    backgroundImg.src = './images/Tile_12.png';

    this.context.drawImage(backgroundImg, 50 * 5, 50 * 1, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 1, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 6, 50 * 1, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 1, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 2, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 6, 50 * 2, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 2, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 3, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 6, 50 * 3, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 3, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 3, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 4, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 6, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 8, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 3, 50 * 5, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 5, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 8, 50 * 5, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 1, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 2, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 3, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 8, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 14, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 15, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 16, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 17, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 1, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 2, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 3, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 4, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 6, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 8, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 9, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 10, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 11, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 12, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 13, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 14, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 15, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 16, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 17, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 9, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 11, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 14, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 15, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 16, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 17, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 9, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 6, 50 * 9, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 9, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 8, 50 * 9, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 9, 50 * 9, 50, 50);

    this.context.fillStyle = '#6a9423';
    this.context.beginPath();
    this.context.arc(50 * 16 + 25, 50 * 8 + 25, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
    this.context.beginPath();
    this.context.arc(50 * 17 + 25, 50 * 8 + 25, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
    this.context.beginPath();
    this.context.arc(50 * 16 + 25, 50 * 7 + 25, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
    this.context.beginPath();
    this.context.arc(50 * 17 + 25, 50 * 7 + 25, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
    this.context.beginPath();
    this.context.arc(50 * 16 + 25, 50 * 6 + 25, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
    this.context.beginPath();
    this.context.arc(50 * 17 + 25, 50 * 6 + 25, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();

    for (const wall of this.walls) {
      wall.draw();
    }
  }

  addMapBorders() {
    this.walls = [];
    const GRID_SIZE = 50;

    for (let row = 0; row < wallMap.length; row++) {
      for (let column = 0; column < wallMap[row].length; column++) {
        const value = wallMap[row][column];
        if (value !== 0) {
          const wall = new Walls(
            this,
            column * GRID_SIZE,
            row * GRID_SIZE,
            value
          );
          this.walls.push(wall);
        }
      }
    }

    /*const wall1 = new Walls(this, 0, 50 * 5);
    this.walls.push(wall1);
    const wall2 = new Walls(this, 50 * 2, 50 * 3);
    this.walls.push(wall2);
    const wall3 = new Walls(this, 50 * 6, 50 * 5);
    this.walls.push(wall3);
    const wall4 = new Walls(this, 50 * 13, 50 * 5);
    this.walls.push(wall4);
    const wall5 = new Walls(this, 50 * 4, 50 * 0);
    this.walls.push(wall5);
    const wall6 = new Walls(this, 50 * 12, 50 * 8);
    this.walls.push(wall6);
    const wall7 = new Walls(this, 50 * 8, 50 * 0);
    this.walls.push(wall7);
    const wall8 = new Walls(this, 50 * 9, 50 * 3);
    this.walls.push(wall8);
    const wall9 = new Walls(this, 50 * 18, 50 * 5);
    this.walls.push(wall9);
    const wall10 = new Walls(this, 50 * 7, 50 * 5);
    this.walls.push(wall10);
    const wall11 = new Walls(this, 50 * 13, 50 * 8);
    this.walls.push(wall11);
    const wall12 = new Walls(this, 50 * 4, 50 * 8);
    this.walls.push(wall12);
    const wall13 = new Walls(this, 0, 50 * 8);
    this.walls.push(wall13);
    const wall14 = new Walls(this, 50 * 4, 50 * 10);
    this.walls.push(wall14);
    const wall15 = new Walls(this, 50 * 6, 50 * 6);
    this.walls.push(wall15);
    const wall16 = new Walls(this, 50 * 9, 50 * 6);
    this.walls.push(wall16);
    const wall17 = new Walls(this, 50 * 8, 50 * 3);
    this.walls.push(wall17);
    const wall18 = new Walls(this, 50 * 4, 50 * 3);
    this.walls.push(wall18);
    const wall19 = new Walls(this, 50 * 7, 50 * 6);
    this.walls.push(wall19);
    const wall20 = new Walls(this, 50 * 10, 50 * 10);
    this.walls.push(wall20);
    const wall21 = new Walls(this, 50 * 18, 50 * 9);
    this.walls.push(wall21);
    const wall22 = new Walls(this, 50 * 13, 50 * 6);
    this.walls.push(wall22);
    const wall23 = new Walls(this, 50 * 18, 50 * 8);
    this.walls.push(wall23);
    const wall24 = new Walls(this, 50 * 18, 50 * 7);
    this.walls.push(wall24);
    const wall25 = new Walls(this, 50 * 18, 50 * 6);
    this.walls.push(wall25);
    const wall26 = new Walls(this, 50 * 6, 50 * 8);
    this.walls.push(wall26);
    const wall27 = new Walls(this, 50 * 7, 50 * 8);
    this.walls.push(wall27);
    const wall28 = new Walls(this, 50 * 8, 50 * 8);
    this.walls.push(wall28);
    const wall29 = new Walls(this, 0, 50 * 6);
    this.walls.push(wall29);
    const wall30 = new Walls(this, 0, 50 * 7);
    this.walls.push(wall30);
    const wall31 = new Walls(this, 50 * 5, 0);
    this.walls.push(wall31);
    const wall32 = new Walls(this, 50 * 6, 0);
    this.walls.push(wall32);
    const wall33 = new Walls(this, 50 * 7, 0);
    this.walls.push(wall33);
    const wall34 = new Walls(this, 50 * 5, 50 * 10);
    this.walls.push(wall34);
    const wall35 = new Walls(this, 50 * 6, 50 * 10);
    this.walls.push(wall35);
    const wall36 = new Walls(this, 50 * 7, 50 * 10);
    this.walls.push(wall36);
    const wall37 = new Walls(this, 50 * 8, 50 * 10);
    this.walls.push(wall37);
    const wall38 = new Walls(this, 50 * 9, 50 * 10);
    this.walls.push(wall38);
    const wall39 = new Walls(this, 50, 50 * 8);
    this.walls.push(wall39);
    const wall40 = new Walls(this, 50 * 2, 50 * 8);
    this.walls.push(wall40);
    const wall41 = new Walls(this, 50 * 3, 50 * 8);
    this.walls.push(wall41);
    const wall42 = new Walls(this, 50 * 4, 50 * 9);
    this.walls.push(wall42);
    const wall43 = new Walls(this, 50 * 10, 50 * 9);
    this.walls.push(wall43);
    const wall44 = new Walls(this, 50 * 10, 50 * 8);
    this.walls.push(wall44);
    const wall45 = new Walls(this, 50 * 11, 50 * 9);
    this.walls.push(wall45);
    const wall46 = new Walls(this, 50 * 12, 50 * 9);
    this.walls.push(wall46);
    const wall47 = new Walls(this, 50 * 13, 50 * 9);
    this.walls.push(wall47);
    const wall48 = new Walls(this, 50 * 14, 50 * 9);
    this.walls.push(wall48);
    const wall49 = new Walls(this, 50 * 15, 50 * 9);
    this.walls.push(wall49);
    const wall50 = new Walls(this, 50 * 16, 50 * 9);
    this.walls.push(wall50);
    const wall51 = new Walls(this, 50 * 17, 50 * 9);
    this.walls.push(wall51);
    const wall52 = new Walls(this, 50 * 17, 50 * 5);
    this.walls.push(wall52);
    const wall53 = new Walls(this, 50 * 16, 50 * 5);
    this.walls.push(wall53);
    const wall54 = new Walls(this, 50 * 15, 50 * 5);
    this.walls.push(wall54);
    const wall55 = new Walls(this, 50 * 12, 50 * 6);
    this.walls.push(wall55);
    const wall56 = new Walls(this, 50 * 11, 50 * 6);
    this.walls.push(wall56);
    const wall57 = new Walls(this, 50 * 10, 50 * 6);
    this.walls.push(wall57);
    const wall58 = new Walls(this, 50 * 9, 50 * 5);
    this.walls.push(wall58);
    const wall59 = new Walls(this, 50 * 9, 50 * 4);
    this.walls.push(wall59);
    const wall60 = new Walls(this, 50 * 8, 50 * 2);
    this.walls.push(wall60);
    const wall61 = new Walls(this, 50 * 8, 50 * 1);
    this.walls.push(wall61);
    const wall62 = new Walls(this, 50 * 4, 50 * 1);
    this.walls.push(wall62);
    const wall63 = new Walls(this, 50 * 4, 50 * 2);
    this.walls.push(wall63);
    const wall64 = new Walls(this, 50 * 3, 50 * 3);
    this.walls.push(wall64);
    const wall65 = new Walls(this, 50 * 2, 50 * 4);
    this.walls.push(wall65);
    const wall66 = new Walls(this, 50 * 2, 50 * 5);
    this.walls.push(wall66);
    const wall67 = new Walls(this, 50 * 1, 50 * 5);
    this.walls.push(wall67);
    const wall68 = new Walls(this, 50 * 4, 50 * 5);
    this.walls.push(wall68);
    const wall69 = new Walls(this, 50 * 4, 50 * 6);
    this.walls.push(wall69);*/
  }

  drawBoxes() {
    const boxImg = new Image();
    boxImg.src = './images/2.png';
    this.context.drawImage(boxImg, 50 * 5, 50 * 2, 50, 50);
    this.context.drawImage(boxImg, 50 * 7, 50 * 3, 50, 50);
    this.context.drawImage(boxImg, 50 * 5, 50 * 4, 50, 50);
    this.context.drawImage(boxImg, 50 * 7, 50 * 4, 50, 50);
    this.context.drawImage(boxImg, 50 * 2, 50 * 7, 50, 50);
    this.context.drawImage(boxImg, 50 * 5, 50 * 7, 50, 50);
  }

  addBoxesBorders() {
    this.boxes = [];
    const box1 = new Box(this, 50 * 5, 50 * 2);
    this.boxes.push(box1);
    const box2 = new Box(this, 50 * 7, 50 * 3);
    this.boxes.push(box2);
    const box3 = new Box(this, 50 * 5, 50 * 4);
    this.boxes.push(box3);
    const box4 = new Box(this, 50 * 7, 50 * 4);
    this.boxes.push(box4);
    const box5 = new Box(this, 50 * 2, 50 * 7);
    this.boxes.push(box5);
    const box6 = new Box(this, 50 * 5, 50 * 7);
    this.boxes.push(box6);
  }

  displayScreen(name) {
    const screenThatShouldBeDisplayed = this.screens[name];
    const screensThatShouldBeHidden = Object.values(this.screens).filter(
      (screen) => screen !== screenThatShouldBeDisplayed
    );
    screenThatShouldBeDisplayed.style.display = '';
    for (const screen of screensThatShouldBeHidden)
      screen.style.display = 'none';
  }

  start() {
    this.running = true;
    this.addMapBorders();
    this.addBoxesBorders();
    this.player = new Player(this, 550, 400);
    this.enemy = new Enemy(this, 700, 325);
    this.arrows = [];
    this.enableControls();
    this.paint();
    this.loop();
    this.displayScreen('playing');
  }

  runLogic() {
    this.player.playerWallIntersect();
    //this.player.playerBoxIntersect();
    this.enemy.runLogic();
    /*const currentTimestamp = Date.now();
    // this.enemyCreationInterval--;
    if (
      currentTimestamp - this.lastArrowCreationTimestamp >
      this.arrowCreationInterval
    ) {
      this.addArrows();
      this.lastArrowCreationTimestamp = currentTimestamp;
    }
    for (const arrow of this.arrows) {
      arrow.runLogic();
    }*/
  }

  checkIntersection(element) {
    return (
      element.x + 50 >= this.x ||
      element.x <= this.x + 50 ||
      element.y + 50 >= this.y ||
      element.y <= this.y + 50
    );
  }

  loop() {
    this.runLogic();
    this.paint();
    window.requestAnimationFrame(() => {
      this.loop();
    });
  }

  enableControls() {
    window.addEventListener('keydown', (event) => {
      const key = event.code;
      switch (key) {
        case 'ArrowUp':
          // this.player.y -= 50;
          if (this.player.playerCanMoveUp) {
            this.player.move('up');
            console.log('up');
            console.log(this.player.x, this.player.y);
            break;
          } else {
            this.player.y -= 0;
            break;
          }

        case 'ArrowDown':
          // this.player.y += 50;
          if (this.player.playerCanMoveDown) {
            this.player.move('down');
            console.log('down');
            console.log(this.player.x, this.player.y);
            break;
          } else {
            this.player.y += 0;
            break;
          }

        case 'ArrowRight':
          // this.player.x += 50;
          if (this.player.playerCanMoveRight) {
            this.player.move('right');
            console.log('right');
            console.log(this.player.x, this.player.y);
            break;
          } else {
            this.player.x += 0;
            break;
          }

        case 'ArrowLeft':
          // this.player.x -= 50;
          if (this.player.playerCanMoveLeft) {
            this.player.move('left');
            console.log('left');
            console.log(this.player.x, this.player.y);
            break;
          } else {
            this.player.x += 0;
          }

        case 'Space':
          // this.player.x -= 50;
          this.player.move('space');
          console.log('attack');
          console.log(this.player.x, this.player.y);
          break;
      }
    });
  }

  disableMoveLeft() {
    //window.removeEventListener('keydown', (event) => {
  }

  disableMoveRight() {}

  disableMoveUp() {}

  disableMoveDown() {}

  checkCollisions() {
    //collision player with wall -> stop
    //collision enemy with wall -> Stop
    //collision with box -> either push or stop
    //collision player with enemy -> player dead, game over
    //collision player with enemy arrow -> player dead, game over
  }

  /*addArrows() {
    const arrowX = enemy.x + 25;
    const arrowY = enemy.y + 25;
    const arrow = new Arrows(this, arrowX, arrowY);
    this.arrows.push(arrow);
  }*/

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.clearScreen();
    //this.drawGrid();
    this.drawMap();
    this.drawBoxes();
    this.player.paint();
    this.enemy.paint();
  }

  win() {
    for (const box of this.boxes) {
      return (
        (box.x === 50 * 16 && box.y === 50 * 8) ||
        (box.x === 50 * 17 && box.y === 50 * 8) ||
        (box.x === 50 * 16 && box.y === 50 * 7) ||
        (box.x === 50 * 17 && box.y === 50 * 7) ||
        (box.x === 50 * 16 && box.y === 50 + 6) ||
        (box.x === 50 * 17 && box.y === 50 * 6)
      );
    }
    //if all boxes are on all circles, game won
    //if boxes are on all circles, boxes turn into friends
  }

  lose() {
    for (let m = 0; m < this.boxes.length; m++) {
      //if any box is in a corner spot
      if (
        (this.boxes[m].x === 50 && this.boxes[m].y === 300) ||
        (this.boxes[m].x === 50 && this.boxes[m].y === 350) ||
        (this.boxes[m].x === 150 && this.boxes[m].y === 200) ||
        (this.boxes[m].x === 250 && this.boxes[m].y === 50) ||
        (this.boxes[m].x === 350 && this.boxes[m].y === 50) ||
        (this.boxes[m].x === 400 && this.boxes[m].y === 200) ||
        (this.boxes[m].x === 450 && this.boxes[m].y === 450) ||
        (this.boxes[m].x === 250 && this.boxes[m].y === 450) ||
        (this.boxes[m].x === 700 && this.boxes[m].y === 300) ||
        (this.boxes[m].x === 700 && this.boxes[m].y === 400)
      ) {
        this.running = false;
        this.displayScreen('gameOver');
      } //if enemy hits player
    }
  }
}
