import { cardContent, saveTodos } from "../../script.mjs";

export default function handleMouseDown(e, card) {
    const save = cardContent.find((save) => save.element === card);
    console.log(save)
    let shiftX = e.clientX - card.getBoundingClientRect().left;
    let shiftY = e.clientY - card.getBoundingClientRect().top;

    moveAt(e.pageX, e.pageY);

    function moveAt(pageX, pageY) {
        card.style.left = pageX - shiftX + 'px';
        card.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {
        card.style.zIndex = 1000;
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    card.onmouseup = function() {
        card.style.zIndex = 10;
        document.removeEventListener('mousemove', onMouseMove);
        card.onmouseup = null;
        if (!save) return;
        save.position = {top: 0, left: 0};
        save.position.left = parseInt(card.style.left.split("px")[0]) || 0;
        save.position.top = parseInt(card.style.top.split("px")[0]) || 0;
        saveTodos();
    };

    card.ondragstart = function() {
        return false;
    };
}