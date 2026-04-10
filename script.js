// Create a 16 x 16 grid of square divs
const grid = document.querySelector("#grid");

let gridSize = 16*16
for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell);
}   