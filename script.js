// Create a 16 x 16 grid of square divs
const grid = document.querySelector("#grid");

function updateGridSize(size) {
    // Setup number of rows in the grid
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("col");
        row.classList.add("col" + i);
        grid.appendChild(row);
    }

    // Setup number of rows in the grid
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("col");
        row.classList.add("col" + i);
        grid.appendChild(row);
    }

    // For each row, append n cells
    for (let i = 0; i < size; i++) {
        let row = document.querySelector(".col.col" + i);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            row.appendChild(cell);
        }
    }
}

updateGridSize(16); // Set default grid size to 16


/* Hover effect on hover of 1 cell */
let cell = document.querySelectorAll(".col div");
// Hover effect
cell.forEach(div => {
    div.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
    }); 
});

// Dynamic grid size adjuster
let slider = document.querySelector("#slider");
let gridSize = document.querySelector("#grid-size");
slider.addEventListener("change", (event) => {
    let n = event.currentTarget.value % 100;
    gridSize.textContent = `${n} x ${n}`;
});