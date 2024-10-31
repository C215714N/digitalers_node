import { config, canvas, ctx } from "./global.js"
import { freeHand, line, rect, circle } from "./shape.js";
import { getCoords, box } from "./utils.js";

const shapes = { line, rect, circle, }

export const setOption = (key, value) => {
    config[key] = value;
    const { color, size } = config;
    ctx.strokeStyle = color,
    ctx.lineWidth = size
}
export const resize = () => {
    canvas.width = window.innerWidth - (box(canvas,"x") * 2)
    canvas.height = window.innerHeight - (box(canvas,"y") * 1.5)
}
export const startDraw = (e) => {
    config.isDrawing = true;
    getCoords(e,1)
}
export const draw = (e) => {
    const { isDrawing, shape } = config
    getCoords(e,2)
    if(isDrawing && shape === "freeHand") freeHand(config)
}
export const stopDraw = (e) => {
    config.isDrawing = false;
    Object.entries(shapes).map(([name,shape]) => 
        config.shape === name && shape(config))
}