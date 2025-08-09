import { userNameHandler } from '../handlers/userNameHandler.js';

export const userName = (i, dom, data) => {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    const modalBox = document.createElement('div');
    modalBox.classList.add('modal-box');

    const promptText = document.createElement('p');
    promptText.innerText = `Player ${i}, enter your name`;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Your name...';
    input.classList.add('modal-input');

    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Submit';
    submitBtn.classList.add('modal-button');

    userNameHandler(submitBtn, input, i, data, dom, overlay);

    modalBox.append(promptText, input, submitBtn);
    overlay.appendChild(modalBox);
    document.body.appendChild(overlay);
};
