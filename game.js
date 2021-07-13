class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  drawGrid() {
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
  }

  drawMap() {
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

    const leftEdgeImage = new Image();
    leftEdgeImage.src = './images/Tile_11.png';

    const upperEdgeImage = new Image();
    upperEdgeImage.src = './images/Tile_02.png';

    const lowerEdgeImage = new Image();
    lowerEdgeImage.src = './images/Tile_05.png';

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
    this.context.drawImage(rightEdgeImage, 50 * 18, 50 * 8, 50, 50);
    this.context.drawImage(rightEdgeImage, 50 * 18, 50 * 7, 50, 50);
    this.context.drawImage(rightEdgeImage, 50 * 18, 50 * 6, 50, 50);
    this.context.drawImage(leftImage, 50 * 6, 50 * 8, 50, 50);
    this.context.drawImage(middleImage, 50 * 7, 50 * 8, 50, 50);
    this.context.drawImage(rightImage, 50 * 8, 50 * 8, 50, 50);
    this.context.drawImage(leftEdgeImage, 0, 50 * 6, 50, 50);
    this.context.drawImage(leftEdgeImage, 0, 50 * 7, 50, 50);
    this.context.drawImage(upperEdgeImage, 50 * 5, 0, 50, 50);
    this.context.drawImage(upperEdgeImage, 50 * 6, 0, 50, 50);
    this.context.drawImage(upperEdgeImage, 50 * 7, 0, 50, 50);
    this.context.drawImage(lowerEdgeImage, 50 * 5, 50 * 10, 50, 50);
    this.context.drawImage(lowerEdgeImage, 50 * 6, 50 * 10, 50, 50);
    this.context.drawImage(lowerEdgeImage, 50 * 7, 50 * 10, 50, 50);
    this.context.drawImage(lowerEdgeImage, 50 * 8, 50 * 10, 50, 50);
    this.context.drawImage(lowerEdgeImage, 50 * 9, 50 * 10, 50, 50);
    this.context.fillStyle = 'green';
    this.context.fillRect(50, 50 * 8, 50, 50);
    this.context.fillRect(50 * 2, 50 * 8, 50, 50);
    this.context.fillRect(50 * 3, 50 * 8, 50, 50);
    this.context.fillRect(50 * 4, 50 * 9, 50, 50);
    this.context.fillRect(50 * 10, 50 * 9, 50, 50);
    this.context.fillRect(50 * 10, 50 * 8, 50, 50);
    this.context.fillRect(50 * 11, 50 * 9, 50, 50);
    this.context.fillRect(50 * 12, 50 * 9, 50, 50);
    this.context.fillRect(50 * 13, 50 * 9, 50, 50);
    this.context.fillRect(50 * 14, 50 * 9, 50, 50);
    this.context.fillRect(50 * 15, 50 * 9, 50, 50);
    this.context.fillRect(50 * 16, 50 * 9, 50, 50);
    this.context.fillRect(50 * 17, 50 * 9, 50, 50);
    this.context.fillRect(50 * 17, 50 * 5, 50, 50);
    this.context.fillRect(50 * 16, 50 * 5, 50, 50);
    this.context.fillRect(50 * 15, 50 * 5, 50, 50);
    this.context.fillRect(50 * 12, 50 * 6, 50, 50);
    this.context.fillRect(50 * 11, 50 * 6, 50, 50);
    this.context.fillRect(50 * 10, 50 * 6, 50, 50);
    this.context.fillRect(50 * 9, 50 * 5, 50, 50);
    this.context.fillRect(50 * 9, 50 * 4, 50, 50);
    this.context.fillRect(50 * 8, 50 * 2, 50, 50);
    this.context.fillRect(50 * 8, 50 * 1, 50, 50);
    this.context.fillRect(50 * 4, 50 * 1, 50, 50);
    this.context.fillRect(50 * 4, 50 * 2, 50, 50);
    this.context.fillRect(50 * 3, 50 * 3, 50, 50);
    this.context.fillRect(50 * 2, 50 * 4, 50, 50);
    this.context.fillRect(50 * 2, 50 * 5, 50, 50);
    this.context.fillRect(50 * 1, 50 * 5, 50, 50);
    this.context.fillRect(50 * 4, 50 * 5, 50, 50);
    this.context.fillRect(50 * 4, 50 * 6, 50, 50);

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
  }

  addMapBorders() {
    this.walls = [];
    const wall1 = new Walls(this, leftUpperCornerImage, 0, 50 * 5);
    this.walls.push(wall1);
    const wall2 = new Walls(this, leftUpperCornerImage, 50 * 2, 50 * 3);
    this.walls.push(wall2);
    const wall3 = new Walls(this, leftUpperCornerImage, 50 * 6, 50 * 5);
    this.walls.push(wall3);
    const wall4 = new Walls(this, leftUpperCornerImage, 50 * 13, 50 * 5);
    this.walls.push(wall4);
    const wall5 = new Walls(this, leftUpperCornerImage, 50 * 4, 50 * 0);
    this.walls.push(wall5);
    const wall6 = new Walls(this, leftUpperCornerImage, 50 * 12, 50 * 8);
    this.walls.push(wall6);
    const wall7 = new Walls(this, rightUpperCornerImage, 50 * 8, 50 * 0);
    this.walls.push(wall7);
    const wall8 = new Walls(this, rightUpperCornerImage, 50 * 9, 50 * 3);
    this.walls.push(wall8);
    const wall9 = new Walls(this, rightUpperCornerImage, 50 * 18, 50 * 5);
    this.walls.push(wall9);
    const wall10 = new Walls(this, rightUpperCornerImage, 50 * 7, 50 * 5);
    this.walls.push(wall10);
    const wall11 = new Walls(this, rightUpperCornerImage, 50 * 13, 50 * 8);
    this.walls.push(wall11);
    const wall12 = new Walls(this, rightUpperCornerImage, 50 * 4, 50 * 8);
    this.walls.push(wall12);
    const wall13 = new Walls(this, leftLowerCornerImage, 0, 50 * 8);
    this.walls.push(wall13);
    const wall14 = new Walls(this, leftLowerCornerImage, 50 * 4, 50 * 10);
    this.walls.push(wall14);
    const wall15 = new Walls(this, leftLowerCornerImage, 50 * 6, 50 * 6);
    this.walls.push(wall15);
    const wall16 = new Walls(this, leftLowerCornerImage, 50 * 9, 50 * 6);
    this.walls.push(wall16);
    const wall17 = new Walls(this, leftLowerCornerImage, 50 * 8, 50 * 3);
    this.walls.push(wall17);
    const wall18 = new Walls(this, leftLowerCornerImage, 50 * 4, 50 * 3);
    this.walls.push(wall18);
    const wall19 = new Walls(this, rightLowerCornerImage, 50 * 7, 50 * 6);
    this.walls.push(wall19);
    const wall20 = new Walls(this, rightLowerCornerImage, 50 * 10, 50 * 10);
    this.walls.push(wall20);
    const wall21 = new Walls(this, rightLowerCornerImage, 50 * 18, 50 * 9);
    this.walls.push(wall21);
    const wall22 = new Walls(this, rightLowerCornerImage, 50 * 13, 50 * 6);
    this.walls.push(wall22);
    const wall23 = new Walls(this, rightEdgeImage, 50 * 18, 50 * 8);
    this.walls.push(wall23);
    const wall24 = new Walls(this, rightEdgeImage, 50 * 18, 50 * 7);
    this.walls.push(wall24);
    const wall25 = new Walls(this, rightEdgeImage, 50 * 18, 50 * 6);
    this.walls.push(wall25);
    const wall26 = new Walls(this, leftImage, 50 * 6, 50 * 8);
    this.walls.push(wall26);
    const wall27 = new Walls(this, middleImage, 50 * 7, 50 * 8);
    this.walls.push(wall27);
    const wall28 = new Walls(this, rightImage, 50 * 8, 50 * 8);
    this.walls.push(wall28);
    const wall29 = new Walls(this, leftEdgeImage, 0, 50 * 6);
    this.walls.push(wall29);
    const wall30 = new Walls(this, leftEdgeImage, 0, 50 * 7);
    this.walls.push(wall30);
    const wall31 = new Walls(this, upperEdgeImage, 50 * 5, 0);
    this.walls.push(wall31);
    const wall32 = new Walls(this, upperEdgeImage, 50 * 6, 0);
    this.walls.push(wall32);
    const wall33 = new Walls(this, upperEdgeImage, 50 * 7, 0);
    this.walls.push(wall33);
    const wall34 = new Walls(this, lowerEdgeImage, 50 * 5, 50 * 10);
    this.walls.push(wall34);
    const wall35 = new Walls(this, lowerEdgeImage, 50 * 6, 50 * 10);
    this.walls.push(wall35);
    const wall36 = new Walls(this, lowerEdgeImage, 50 * 7, 50 * 10);
    this.walls.push(wall36);
    const wall37 = new Walls(this, lowerEdgeImage, 50 * 8, 50 * 10);
    this.walls.push(wall37);
    const wall38 = new Walls(this, lowerEdgeImage, 50 * 9, 50 * 10);
    this.walls.push(wall38);
  }

  drawBoxes() {
    this.boxes = [];
    this.context.fillStyle = 'yellow';
    this.context.fillRect(50 * 5, 50 * 2, 50, 50);
    this.context.fillRect(50 * 7, 50 * 3, 50, 50);
    this.context.fillRect(50 * 5, 50 * 4, 50, 50);
    this.context.fillRect(50 * 7, 50 * 4, 50, 50);
    this.context.fillRect(50 * 2, 50 * 7, 50, 50);
    this.context.fillRect(50 * 5, 50 * 7, 50, 50);
  }

  addBoxesBorders() {
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

  start() {
    this.player = new Player(this, 550, 400);
    this.enemy = new Enemy(this, 700, 325);
    this.enableControls();
    this.paint();
    this.loop();
  }

  runLogic() {
    this.player.runLogic();
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
          this.player.move('up');
          console.log('up');
          console.log(this.player.x, this.player.y);
          break;
        case 'ArrowDown':
          // this.player.y += 50;
          this.player.move('down');
          console.log('down');
          console.log(this.player.x, this.player.y);
          break;
        case 'ArrowRight':
          // this.player.x += 50;
          this.player.move('right');
          console.log('right');
          console.log(this.player.x, this.player.y);
          break;
        case 'ArrowLeft':
          // this.player.x -= 50;
          this.player.move('left');
          console.log('left');
          console.log(this.player.x, this.player.y);
          break;
      }
    });
  }

  checkCollisions() {
    //collision with wall -> stop
    //collision player with enemy -> player dead, game over
    //collision player with enemy arrow -> player dead, game over
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.clearScreen();
    this.drawGrid();
    this.drawMap();
    this.drawBoxes();
    this.player.paint();
    this.enemy.paint();
  }

  win() {
    //if all boxes are on all circles, game won
  }
}
