export const playersMove = (clickCount) => {
    if (clickCount % 2 === 0) {
        return 'X';
    } else {
        return 'O';
    }
};
