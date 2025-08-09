import data from '../data.js';
import { cleanCells } from '../handlers/cleanCells.js';
import { scoreHandler } from '../handlers/scoreHandler.js';
import dom from '../dom.js';

export const winnerWindow = (message) => {
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');

    const box = document.createElement('div');
    box.classList.add('modal-box');

    const msg = document.createElement('p');
    msg.innerText = message;

    const btn = document.createElement('button');
    btn.innerText = 'Reset';
    btn.classList.add('modal-button');

    btn.addEventListener('click', () => {
        // location.reload();
        scoreHandler(data, dom)
        modal.remove();
        cleanCells(data);
    });

    box.append(msg, btn);
    modal.appendChild(box);
    document.body.appendChild(modal);
};
