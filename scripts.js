const createGrid = document.getElementById('create-grid');
const gridContainer = document.getElementById('grid-container');
let cells = []; // Array to store created cells

createGrid.addEventListener('click', () => {
    let gridSize = prompt('How big would your space to be?', 16);
    if (gridSize === '' || gridSize < 3 || gridSize > 100){
        alert('Please enter a different number');
    }

    cells = [];
    gridContainer.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid';
        cell.style.width = '1rem';
        cell.style.height = '1rem';
        cell.style.border = '1px solid black'
        
        gridContainer.appendChild(cell);
        cells.push(cell);
    };

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'
        });
    });
});




