let holdingClick = false;  // Tell program if user is holding the click
document.querySelector("body").addEventListener("mousedown", () => {
    holdingClick = true;
});
document.querySelector("body").addEventListener("mouseup", () => {
    holdingClick = false;
});

// Create a 16 x 16 grid of square divs
const grid = document.querySelector("#grid");

function updateGridSize(size) {
    // Pre condition to delete all divs
    const allCols = document.querySelectorAll(".col");
    allCols.forEach(val => {grid.removeChild(val);});

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

    // Re-query all cells
    let cell = document.querySelectorAll(".col div");
    addHoverEffect(cell);  // Add hover effect to each cell
    adjustCellSize(cell, size);  // Dynamically change cell size for current cell selection
}

function addHoverEffect(cell) {
    // Hover effect
    cell.forEach(div => {
        div.addEventListener("mousedown", (event) => {
                event.target.style.backgroundColor = "white";
        }); 

        div.addEventListener("mouseover", (event) => {
            if (holdingClick) {
                event.target.style.backgroundColor = "white";
            }
        }); 
    });
}

function adjustCellSize(cell, size) {
    cell.forEach(div => {
        let n = 600 / size;  // Compute the size of the W and H of a cell by dividing the grid H (or W) by the size of cells we want
        div.style.width = `${n}px`;
        div.style.height = `${n}px`;
    });
}

updateGridSize(16); // Set default grid size to 16


// Dynamic grid size adjuster
let slider = document.querySelector("#slider");
let gridSize = document.querySelector("#grid-size");
slider.addEventListener("change", (event) => {
    let n = event.currentTarget.value % 100;
    gridSize.textContent = `${n} x ${n}`;
    updateGridSize(n);
});