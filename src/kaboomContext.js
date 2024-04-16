import kaboom from "kaboom";

export const kaboomContext = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game")
})