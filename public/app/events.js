import { root, canvas, options } from "./global.js"
import { setOption, resize, startDraw, draw, stopDraw } from "./canvas.js";

export default function Events(){
    options.forEach(opt => {
        opt.addEventListener('input', ({target:{id,value}}) => 
        setOption(id, value))
        root.append(opt)
    })
    canvas.addEventListener('mousedown', startDraw)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', stopDraw)
    
    window.addEventListener('load', resize)
    window.addEventListener('resize', resize)

    root.append(canvas) 
}