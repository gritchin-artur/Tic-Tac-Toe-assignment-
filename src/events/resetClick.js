import dom from "../dom.js"

export const resetClick = () => {
    dom.resetScore.addEventListener('click', () => { 
        console.log('click')
 location.reload();
    })
}