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
  [0, 0, 0, 0, 'sides', 1, 1, 1, 'sides', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 'sides', 'B', 1, 1, 'sides', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    0,
    0,
    'leftUpperCorner',
    'middle',
    'rightLowerCorner',
    1,
    1,
    'B',
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
  [0, 0, 'sides', 1, 1, 'B', 1, 'B', 1, 'sides', 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [
    'leftUpperCorner',
    'middle',
    'rightLowerCorner',
    1,
    'upperCorner',
    1,
    'leftUpperCorner',
    'rightUpperCorner',
    1,
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
    1,
    1,
    1,
    'lowerCorner',
    1,
    'leftLowerCorner',
    'rightLowerCorner',
    1,
    'leftLowerCorner',
    'middle',
    'middle',
    'middle',
    'rightLowerCorner',
    1,
    1,
    'G',
    'G',
    'sides'
  ],
  ['sides', 1, 'B', 1, 1, 'B', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'G', 'G', 'sides'],
  [
    'leftLowerCorner',
    'middle',
    'middle',
    'middle',
    'rightUpperCorner',
    1,
    'left',
    'middle',
    'right',
    1,
    'upperCorner',
    1,
    'leftUpperCorner',
    'rightUpperCorner',
    1,
    1,
    'G',
    'G',
    'sides'
  ],
  [
    0,
    0,
    0,
    0,
    'sides',
    1,
    1,
    1,
    1,
    1,
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
    this.enableControls();
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
    for (const wall of this.walls) {
      wall.draw();
    }

    for (const background of this.backgrounds) {
      background.draw();
    }

    const backgroundImg = new Image();
    backgroundImg.src = './images/Tile_12.png';
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 2, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 3, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 7, 50 * 4, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 2, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 5, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 16, 50 * 8, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 16, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 17, 50 * 7, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 16, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 17, 50 * 6, 50, 50);
    this.context.drawImage(backgroundImg, 50 * 17, 50 * 8, 50, 50);

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
  }

  drawBoxes() {
    for (const box of this.boxes) {
      box.draw();
    }
  }

  addMapBorders() {
    this.walls = [];
    const GRID_SIZE = 50;

    for (let row = 0; row < wallMap.length; row++) {
      for (let column = 0; column < wallMap[row].length; column++) {
        const value = wallMap[row][column];
        if (value !== 0 && value !== 1 && value !== 'G' && value !== 'B') {
          const wall = new Wall(
            this,
            column * GRID_SIZE,
            row * GRID_SIZE,
            value
          );
          this.walls.push(wall);
        }
      }
    }
  }

  addBackground() {
    this.backgrounds = [];
    const GRID_SIZE = 50;

    for (let row = 0; row < wallMap.length; row++) {
      for (let column = 0; column < wallMap[row].length; column++) {
        const value = wallMap[row][column];
        if (value === 1) {
          const background = new Wall(
            this,
            column * GRID_SIZE,
            row * GRID_SIZE,
            'background'
          );
          this.backgrounds.push(background);
        }
      }
    }
  }

  addBoxes() {
    this.boxes = [];
    const GRID_SIZE = 50;

    for (let row = 0; row < wallMap.length; row++) {
      for (let column = 0; column < wallMap[row].length; column++) {
        const value = wallMap[row][column];
        if (value === 'B') {
          const box = new Box(this, column * GRID_SIZE, row * GRID_SIZE, 'box');
          this.boxes.push(box);
        }
      }
    }
  }

  addGoals() {
    this.goals = [];
    const GRID_SIZE = 50;

    for (let row = 0; row < wallMap.length; row++) {
      for (let column = 0; column < wallMap[row].length; column++) {
        const value = wallMap[row][column];
        if (value === 'G') {
          const goal = new Wall(
            this,
            column * GRID_SIZE,
            row * GRID_SIZE,
            'background'
          );
          this.goals.push(goal);
        }
      }
    }
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
    this.addBoxes();
    this.addBackground();
    this.addGoals();
    this.player = new Player(this, 550, 400);
    this.enemy = new Enemy(this, 700, 300);
    this.paint();
    this.loop();
    this.displayScreen('playing');
  }

  runLogic() {
    for (const box of this.boxes) {
      box.boxWallIntersect();
    }

    this.player.playerEnemyIntersect();
    this.enemy.runLogic();
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
        this.lose();
      }
    }
    //if all boxes are on all circles, game won
    this.boxesongoal = [];
    for (const box of this.boxes) {
      for (const goal of this.goals) {
        if (box.x === goal.x && box.y === goal.y) {
          this.boxesongoal.push(box);
        }
      }
    }
    if (this.boxesongoal.length === 6) {
      this.win();
    }
  }

  loop() {
    if (this.running) {
      this.runLogic();
      this.paint();
      window.requestAnimationFrame(() => {
        this.loop();
      });
    }
  }

  enableControls() {
    window.addEventListener('keydown', (event) => {
      const key = event.code;
      switch (key) {
        case 'ArrowUp':
          this.player.move('up');
          console.log('up');
          console.log(this.player.x, this.player.y);
          break;

        case 'ArrowDown':
          this.player.move('down');
          console.log('down');
          console.log(this.player.x, this.player.y);
          break;

        case 'ArrowRight':
          this.player.move('right');
          console.log('right');
          console.log(this.player.x, this.player.y);
          break;

        case 'ArrowLeft':
          this.player.move('left');
          console.log('left');
          console.log(this.player.x, this.player.y);
          break;

        case 'Space':
          this.player.move('space');
          break;
          console.log('attack');
          console.log(this.player.x, this.player.y);
      }
    });
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.clearScreen();
    //this.drawGrid();
    this.drawMap();
    this.drawBoxes();
    this.player.paint();
    if (this.enemy.enemyAlive) {
      this.enemy.paint();
    }
  }

  win() {
    this.running = false;
    this.displayScreen('gameWon');
  }

  lose() {
    this.running = false;
    this.displayScreen('gameOver');
  }
}
