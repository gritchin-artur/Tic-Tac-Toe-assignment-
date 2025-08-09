export const clickHandler = (cells, data) => {
    cells.forEach((cell) => {
        if (cell.innerText.includes('X') && !data.arrXIds.includes(cell.id)) {
            data.arrXIds.push(cell.id);
        }

        if (cell.innerText.includes('O') && !data.arrOIds.includes(cell.id)) {
            data.arrOIds.push(cell.id);
        }
    });
};
