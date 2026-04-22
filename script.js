let holdingClick = false;  // Tell program if user is holding the click
document.querySelector("body").addEventListener("mousedown", () => {
    holdingClick = true;
});
document.querySelector("body").addEventListener("mouseup", () => {
    holdingClick = false;
});

// Selected colour
let colour = "black";
let isEraser = false;

// Select RGB
let isRGB = false;

// Create a 16 x 16 grid of square divs
const grid = document.querySelector("#grid");
let allCells;

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
    allCells = document.querySelectorAll(".col div");
    addHoverEffect(allCells);  // Add hover effect to each cell
    adjustCellSize(allCells, size);  // Dynamically change cell size for current cell selection
}

function addHoverEffect(cell) {
    // Hover effect
    cell.forEach(div => {
        div.addEventListener("mousedown", (event) => {
            event.target.style.backgroundColor = isEraser ? "white" : isRGB ? randomColour() : colour;
        }); 

        div.addEventListener("mouseover", (event) => {
            if (holdingClick) {
                event.target.style.backgroundColor = isEraser ? "white" : isRGB ? randomColour() : colour;
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

function randomColour() {
    rVal = Math.floor(Math.random() * 255);
    gVal = Math.floor(Math.random() * 255);
    bVal = Math.floor(Math.random() * 255);

    return `rgb(${rVal}, ${gVal}, ${bVal})`;
}

// Dynamic grid size adjuster
let slider = document.querySelector("#slider");
let gridSize = document.querySelector("#grid-size");
slider.addEventListener("change", (event) => {
    let n = event.currentTarget.value % 100;
    gridSize.textContent = `${n} x ${n}`;
    updateGridSize(n);
});
// Select colour
document.querySelector("#colour").addEventListener("input", (event) => {
    colour = event.target.value;
});
// Select pen tool
document.querySelector("#pen").addEventListener("click", (e) => {
    isEraser = false;
    isRGB = false;
});
// Select rgb pen tool
document.querySelector("#rgb").addEventListener("click", () => {
    isEraser = false;
    isRGB = true;
});
// Select eraser tool
document.querySelector("#eraser").addEventListener("click", () => {
    isEraser = true;
    isRGB = false;
});
// Clear board
document.querySelector("#clear").addEventListener("click", () => {
    allCells.forEach(div => { 
        div.style.backgroundColor = "white";
    });
});
// Highlight any tool clicked
let currTool = document.querySelectorAll("button");
currTool.forEach(tool => {
    // Set the initial background of the pen (tool selected)
    if (tool.id === "pen") {
        tool.style.backgroundColor = "lightgrey";
    }

    // Skip Clear button
    if (tool.id !== "clear") {
        tool.addEventListener("click", () => {
            // Reset Colour to grey
            currTool.forEach(toolReset => {
                toolReset.style.backgroundColor = "#EEEEEE";
            });
        // Set colour to highlight colour change
        tool.style.backgroundColor = "lightgrey";
        });
    }
});
// Clear button highlight
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("mousedown", () => {
    clearBtn.style.backgroundColor = "lightgrey";
});
clearBtn.addEventListener("mouseup", () => {
    clearBtn.style.backgroundColor = "#EEEEEE";
});