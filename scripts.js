const createGrid = document.getElementById('create-grid');
createGrid.addEventListener('click', () => {
    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid';
        cell.style.width = '30px';
        cell.style.height = '30px';
        cell.style.border = '0.5px solid black'
        
        gridContainer.appendChild(cell);
    }
})

// const clearGrid = document.getElementById('clear-grid');
// clearGrid.addEventListener('click', () => {
//     alert(clearGrid.id)
// })

const gridContainer = document.getElementById('grid-container');

