import { ctx } from "./global.js"
import { diff, hyp } from "./utils.js"

export function freeHand(coords) {
    const { x2, y2 } = coords
    context.lineTo(x2,y2)
    context.stroke()
}
export function line(coords) {
    const { x1, y1, x2, y2 } = coords
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}
export function rect(coords) {
    const { x1, y1 } = coords
    const [width, height] = diff(coords)
    ctx.beginPath()
    ctx.strokeRect(x1, y1, width, height)
    ctx.closePath()
}
export function circle(coords) {
    const { x1, y1 } = coords
    const hypo = hyp(diff(coords))
    ctx.beginPath()
    ctx.arc(x1, y1, hypo, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
}