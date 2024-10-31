import { root, canvas, options, buttons, buffer } from "./global.js"
import { setOption, resize, startDraw, draw, stopDraw } from "./canvas.js";

export default function Events(){
    options.forEach(opt => {
        opt.addEventListener('input', ({target:{id,value}}) => 
        setOption(id, value))
        root.append(opt)
    })
    buttons.forEach(btn => {
        root.append(btn)
    })
    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDraw)
    
    window.addEventListener('load', resize)
    window.addEventListener('resize', resize)

    root.append(canvas)
    root.append(buffer)
}