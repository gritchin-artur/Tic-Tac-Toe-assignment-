export const userNameHandler = (submitBtn, input, i, data, dom, overlay) => {
    submitBtn.addEventListener('click', () => {
        const name = input.value.trim();
        if (name) {
            if (i === 1) {
                data.playerX = name;
                dom.playerX.innerText = `Player X: ${name}`;
                document.body.removeChild(overlay);
            }
            if (i === 2) {
                data.playerO = name;
                dom.playerO.innerText = `Player O: ${name}`;
                document.body.removeChild(overlay);
            }
        } else {
            alert('Please enter a name');
        }
    });
};
