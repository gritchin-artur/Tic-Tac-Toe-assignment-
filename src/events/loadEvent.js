import { createCell } from '../components/createCell.js';
import { userName } from '../components/userName.js';
import data from '../data.js';
import dom from '../dom.js';

export const loadEvent = () => {
    for (let i = 2; i > 0; i--) {
        userName(i, dom, data);
    }
    window.addEventListener('DOMContentLoaded', createCell(dom.cellContainer));
};
