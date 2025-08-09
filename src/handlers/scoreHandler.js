
export const scoreHandler = (data, dom) => {
    dom.score.innerText = data.scorePlayerX + ' : ' + data.scorePlayerO;
}