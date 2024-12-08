const gameBoard = document.getElementById("gameBoard");

let allCells = [];

for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", "cell");

    allCells.push(cell);

    gameBoard.appendChild(cell);
  }
}

console.log(allCells);
