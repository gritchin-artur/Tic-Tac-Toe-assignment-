export const createCell = (container) => {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;

        container.appendChild(cell);
    }
};
