"use strict";
const canvas = document.getElementById("board");
const playBtn = document.querySelector(".play-button")
const ctx = canvas.getContext("2d");


const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;


const KEY = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
  UP: "ArrowUp",
  SPACE: " ",
};

Object.freeze(KEY);

ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);



const moves = {
  [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: (p) => ({...p, y: p.y + 1}),
  [KEY.UP]: (p) => this.rotate(p)
};



class Board {
  constructor(ctx) {
    this.ctx = ctx;
  }

  reset() {
    this.grid = this.getEmptyBoard();
  }

  getEmptyBoard() {
    return Array.from(Array(ROWS), () =>
      Array.from(Array(COLS), (n) => (n = 0))
    );
  }

  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;
        return (
          this.isEmpty(value) ||
         (this.insideWalls(x) &&
          this.aboveFloor(y)
        ));
      });
    });
  }


  isEmpty(value) {
    return value < 1
  }
 
  insideWalls(x) {
    return x >= 0 && x <= 9
  }


  aboveFloor(y) {
    return y >= 0 && y <= 19
  }
  
}




class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = "blue";
    this.shape = [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];

    this.x = 3; 
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(piece) {
    this.x = piece.x;
    this.y = piece.y;
  }



  rotate(p) {

    let clone = JSON.parse(JSON.stringify(p));


    for (let y = 0; y < clone.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [p.shape[x][y], p.shape[y][x]] = 
        [p.shape[y][x], p.shape[x][y]];
      }
    }

    return clone


  }





}

let board = new Board(ctx);

function play() {
  board.reset();
  let piece = new Piece(ctx);
  piece.draw();
  board.piece = piece
}

play();



document.addEventListener('keydown', event => {
    if (moves[event.key]) {  
      // Stop the event from bubbling.
      event.preventDefault();


      // Get new state of piece
      let p = moves[event.key](board.piece);


      if(event.key == KEY.SPACE) {
        while(board.valid(p)) {
          console.log("dopped")
          board.piece.move(p)
          p = moves[KEY.DOWN](board.piece)

          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);       
          board.piece.draw()
      }
    }


      if (board.valid(p)) {    
        // If the move is valid, move the piece.
        board.piece.move(p);
        
        // Clear old position before drawing.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        
        board.piece.draw();
      }


      if(board.valid(p)) {
        p.shape.forEach(row => row.reverse());
      }



    }
  });







