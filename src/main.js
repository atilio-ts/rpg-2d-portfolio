import { kaboomContext } from "./kaboomContext"

kaboomContext.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 784,
        "walk-down": {from:784, to: 785, loop:true, speed: 4},
        "idle-side": 786,
        "walk-side": {from:786, to: 787, loop:true, speed: 4},
        "idle-up": 823,
        "walk-up": {from:823, to: 824, loop:true, speed: 4}
    }
})