document.addEventListener("DOMContentLoaded", () => {
    const socket = io();
    const root = document.getElementById('root');

    root.innerHTML=`
        <h1>NodeJS Paint</h1>
        <p>Herramienta de Dibujo</p>
    `

    socket.on("load", () => console.log("cargando"))
    socket.on("save", () => console.log("guardando"))
})