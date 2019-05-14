// <editor-fold desc="Includowanie readline-sync">
const readlineSync = require('readline-sync');
// </editor-fold>

//Zmienna finalnie wyświetlana jako wynik działania programu
var result = "";

// <editor-fold desc="Input">
//Inputy podawane przez użytkownika
var boardSize = readlineSync.questionInt("Podaj rozmiar planszy (> 0): ");
var numberOfIterations = readlineSync.questionInt("Podaj ilość iteracji (> 0): ");
// </editor-fold>

// <editor-fold desc="Operacje wykonywane przez program" >
// Sprawdzanie ile sąsiadów jest żywych
function aliveNeighbors(board, cellX, cellY) {
  let howManyAlives = 0;
  // Left Up corner
  if(cellX - 1 < 0  && cellY - 1 < 0) {
    howManyAlives += board[boardSize-1][boardSize-1] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX - 1][cellY - 1] === 1 ? 1 : 0;
  }
  // Up side
  if(cellY - 1 < 0) {
    howManyAlives += board[cellX][boardSize-1] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX][cellY - 1] === 1 ? 1 : 0;
  }
  // Right Up corner
  if(cellX + 1 > boardSize-1 && cellY - 1 < 0) {
    howManyAlives += board[0][boardSize-1] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX + 1][cellY - 1] === 1 ? 1 : 0;
  }
  // Right side
  if(cellX + 1 > boardSize-1) {
    howManyAlives += board[0][cellY + 1] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX + 1][cellY] === 1 ? 1 : 0;
  }
  // Right Down corner
  if(cellX + 1 > boardSize-1 && cellY + 1 > boardSize-1) {
    howManyAlives += board[0][0] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX + 1][cellY + 1] === 1 ? 1 : 0;
  }
  // Down side
  if(cellY + 1 > boardSize-1) {
    howManyAlives += board[cellX][0] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX][cellY + 1] === 1 ? 1 : 0;
  }
  // Left Down corner
  if(cellX - 1 < 0 && cellY + 1 > boardSize-1) {
    howManyAlives += board[boardSize-1][0] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX - 1][cellY + 1] === 1 ? 1 : 0;
  }
  // Left Down corner
  if(cellX - 1 < 0) {
    howManyAlives += board[boardSize-1][cellY] === 1 ? 1 : 0;
  } else {
    howManyAlives += board[cellX - 1][cellY] === 1 ? 1 : 0;
  }

  return howManyAlives;
}

// Stworzenie planszy
var actualBoard = [];
for (let x = 0; x < boardSize; x++) {
  actualBoard[x] = [];
  for (let y = 0; y < boardSize; y++) {
    actualBoard[x][y] = Math.round(Math.random());
  }
}

// Let the battle begins!
for (let i = 0; i < numberOfIterations; i++) {
  // Wyświetlenie iteracji
  let boardString = "";
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      boardString += actualBoard[x][y] === 1 ? "#" : ".";
    }
    boardString += "\n";
  }
  console.log("Iteracja " + i + "\n" + boardString);

  // Plansza dla następnej iteracji
  let newBoard = [];

  // Sprawdzenie, która komórka umrze/narodzi się
  for (let x = 0; x < boardSize; x++) {
    newBoard[x] = [];
    for (let y = 0; y < boardSize; y++) {
      // Martwa komórka + 3 sąsiadów - narodziny
      // Żywa komórka < 2 sąsiadów - śmierć
      // Żywa komórka > 3 sąsiadów - śmierć
      if (actualBoard[x][y] === 0 && aliveNeighbors(actualBoard, x, y) === 3) {
        newBoard[x][y] = 1;
      } else if (actualBoard[x][y] === 1 && aliveNeighbors(actualBoard, x, y) < 2) {
        newBoard[x][y] = 0;
      } else if (actualBoard[x][y] === 1 && aliveNeighbors(actualBoard, x, y) > 3) {
        newBoard[x][y] = 0;
      } else {
        newBoard[x][y] = actualBoard[x][y];
      }
    }
  }
}
// </editor-fold>

// Konstrukcja wiadomości końcowej


//Wyświetlanie wyniku działania
console.log(result);
