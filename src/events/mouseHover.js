import data from '../data.js';
import { playersMove } from '../handlers/playersMove.js';

export const mouseHover = () => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            if (!cell.classList.contains('clicked')) {
                cell.innerText = playersMove(data.clickCount);
                cell.style.fontSize = '10vw';
                cell.style.color = 'gray';
            }
        });

        cell.addEventListener('mouseleave', () => {
            if (!cell.classList.contains('clicked')) {
                cell.innerText = '';
            }
        });
    });
};
