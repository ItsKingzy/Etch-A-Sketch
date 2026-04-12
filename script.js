// Create a 16 x 16 grid of square divs
const grid = document.querySelector("#grid");

let n = 16;  // Length of one axis on the grid
let gridSize = 16*16

// Setup number of rows in the grid
for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    row.classList.add("col");
    row.classList.add("col" + i);
    grid.appendChild(row);
}

// For each row, append n cells
for (let i = 0; i < n; i++) {
    let row = document.querySelector(".col.col" + i);
    for (let j = 0; j < n; j++) {
        let cell = document.createElement("div");
        row.appendChild(cell);
    }
}



/* Hover effect on hover of 1 cell */
let cell = document.querySelectorAll(".col div");
// Hover effect
cell.forEach(div => {
   div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
    }); 
});