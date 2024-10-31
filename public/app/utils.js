import { config, canvas } from "./global.js";
export const diff = ({x1,y1,x2,y2}) => [(x2-x1), (y2-y1)]
export const hyp = ([a,b]) => Math.sqrt(a**2 + b**2);
export const box = (el, prop) => el.getBoundingClientRect()[prop]
export const getCoords = (e,n) => ["x","y"].map(k => 
    config[k+n] = e["client"+k.toUpperCase()] - box(canvas,k)
)