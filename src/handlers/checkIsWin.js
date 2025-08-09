import dom from "../dom.js";
import { scoreHandler } from "./scoreHandler.js";

export const checkIsWin = (data) => {
    const hasWonX = data.winnerCombination.some((combo) =>
        combo.every((id) => data.arrXIds.includes(String(id)))
    );

    const hasWonO = data.winnerCombination.some((combo) =>
        combo.every((id) => data.arrOIds.includes(String(id)))
    );

    if (hasWonX) {
        data.scorePlayerX++;
        return `${data.playerX} wins 🎉`;
    }
    if (hasWonO) {
        data.scorePlayerO++;
        return `${data.playerO} wins 🎉`;
    }
    if (!hasWonX && !hasWonO && data.clickCount === 9) {
        return 'Sorry draw!';
    }
    scoreHandler(data, dom);
};
