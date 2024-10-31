import { diff, hyp } from "./utils.js"

export function freeHand(coords, ctx) {
    const { x2, y2 } = coords
    ctx.lineTo(x2,y2)
    ctx.stroke()
}
export function line(coords, ctx) {
    const { x1, y1, x2, y2 } = coords
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}
export function rect(coords, ctx) {
    const { x1, y1 } = coords
    const [width, height] = diff(coords)
    ctx.beginPath()
    ctx.strokeRect(x1, y1, width, height)
    ctx.closePath()
}
export function circle(coords, ctx) {
    const { x1, y1 } = coords
    const hypo = hyp(diff(coords))
    ctx.beginPath()
    ctx.arc(x1, y1, hypo, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.closePath()
}