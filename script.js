const resetButton = document.querySelector('button');
const board = document.querySelector('.board');

// Number of grid rows/ boxes to be generated >> Must set to the value of size of board PH
const sizeOfGrid = 20;

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