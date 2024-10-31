export const 
    root = document.getElementById('root'),
    socket = io(),
    config = {
        isDrawing: false,
        shape: "freeHand",
        color: "black",
        size: "1",
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    },
    options = [
        Object.assign(document.createElement('input'), {
            type: "color",
            id: "color",
            name: "strokeStyle",
        }),
        Object.assign(document.createElement('input'), {
            type: "range",
            id: "size",
            name: "lineWidth",
            min: 0,
            default: 1,
            max: 10
        }),
        Object.assign(document.createElement('select'), {
            id: "shape",
            name: "shape",
            innerHTML: `
                <option value="freeHand">Mano alzada</option>
                <option value="line">Linea</option>
                <option value="rect">Rectangulo</option>
                <option value="circle">Circulo</option>`
        })
    ],
    buttons = [
        Object.assign(document.createElement('button'),{
            innerHTML: "Guardar",
            onclick: () => socket.emit("save", { name: prompt("¿con que nombre desea guardar el dibujo?"), canvas, ctx})
        }),
        Object.assign(document.createElement('button'),{
            innerHTML: "Cargar",
            onclick: () => socket.emit("load", prompt("¿que dibujo desea cargar?"))
        })
    ],
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    buffer = document.createElement('canvas'),
    btx = buffer.getContext('2d')
;