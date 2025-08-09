/**
 * @jest-environment jsdom
 */

import { winnerWindow } from './winnerWindow.js';

describe('winnerWindow', () => {
    test('creates and appends modal to body', () => {
        winnerWindow('Player X wins!');

        const modal = document.querySelector('.modal-overlay');
        expect(modal).not.toBeNull();

        const box = modal.querySelector('.modal-box');
        expect(box).not.toBeNull();

        const message = box.querySelector('p');
        expect(message.innerText).toBe('Player X wins!');

        const button = box.querySelector('button');
        expect(button.innerText).toBe('Reset');
        expect(button.classList.contains('modal-button')).toBe(true);
    });
});
