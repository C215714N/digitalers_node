import { config, canvas, ctx, buffer, btx } from "./global.js"
import { freeHand, line, rect, circle } from "./shape.js";
import { getCoords, box } from "./utils.js";

const shapes = { line, rect, circle, }
const params = {
    color: "strokeStyle",
    size: "lineWidth"
}
export const setOption = (key, value) => {
    config[key] = value;
    [ctx,btx].map(context => 
        Object.entries(params).map(([key,prop]) => 
        context[prop] = config[key]))
}
export const resize = () => {
    buffer.style.position = "absolute";
    buffer.style.margin = 0;
    buffer.style.top = box(canvas,"top") + "px";
    buffer.style.left = box(canvas,"left") + "px";
    buffer.style.zIndex = -1
    canvas.width = window.innerWidth - (box(canvas,"x") * 2);
    canvas.height = window.innerHeight - (box(canvas,"y") * 1.5);
    buffer.width = canvas.width;
    buffer.height = canvas.height;
}
export const startDraw = (e) => {
    config.isDrawing = true;
    getCoords(e,1)
}
export const draw = (e) => {
    const { isDrawing, shape } = config
    getCoords(e,2)
    if(isDrawing && shape === "freeHand") freeHand(config,ctx)
    Object.entries(shapes).map(([name,shape]) => {
        if(isDrawing && config.shape === name) {
            shape(config,btx)
            setTimeout(() => btx.clearRect(0,0, canvas.width, canvas.height), 10)
    }});
}
export const stopDraw = (e) => {
    config.isDrawing = false;
    Object.entries(shapes).map(([name,shape]) => 
        config.shape === name && shape(config,ctx))
}