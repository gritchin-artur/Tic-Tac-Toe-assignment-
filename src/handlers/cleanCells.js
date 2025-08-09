export const cleanCells = (data) => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '';
        cell.style.color = '';
        cell.style.boxShadow = '';
        cell.classList.remove('clicked');
    });
    data.clickCount = 0;
    data.arrXIds = [];
    data.arrOIds = [];
}