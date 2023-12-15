const createGrid = document.getElementById('create-grid');
const gridContainer = document.getElementById('grid-container');
const clearGrid = document.getElementById('clear-grid');
let cells = []; // Array to store created cells

createGrid.addEventListener('click', () => {
    cells = [];
    gridContainer.innerHTML = '';

    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid';
        cell.style.width = '30px';
        cell.style.height = '30px';
        cell.style.border = '0.5px solid black'
        
        gridContainer.appendChild(cell);
        cells.push(cell);
    }
})

clearGrid.addEventListener('click', () => {
    cells = [];
    gridContainer.innerHTML = '';
})




