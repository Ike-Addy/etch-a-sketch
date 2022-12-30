const board = document.querySelector('.board');
const resetBtn = document.getElementsByClassName('.resetBtn');
// const sizeBtn = document.getElementsByClassName('.sizeBtn');

// Number of grid rows/ boxes to be generated >> 
// Must set to the value to user's input 
const sizeOfGrid = 16;
// Function to create grid
const createGrid = (grids) => {
    for(let i = 0; i < grids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j = 0; j < grids; j++) {
            const widthAndHeight = 500 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');

            // Dynamically change the size of grid boxes to fit inside the container
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            // Change gridbox background color on hover
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            // Make gridBox a child of row(grid-row)
            row.appendChild(gridBox);
        }

        board.appendChild(row);
    }
}

createGrid(sizeOfGrid);


// const input = document.getElementById('userSizeInput');
// Change the size of the grid based on the user's input
function changeSize(input) {
    if (input >= 2 && input <= 100) {       
        createGrid(input);
    } else {
        alert('Please select a number between 0 and 101');
    }
}





