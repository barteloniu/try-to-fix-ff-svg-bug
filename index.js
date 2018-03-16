const canvas = document.querySelector("#can")
const ctx = canvas.getContext("2d")
const img = document.querySelector("#img")
const h5 = document.querySelector("#h5")

let x = 0

const loop = () => {
    ctx.clearRect(0, 0, 150, 150)
    ctx.drawImage(img, 25+Math.sin(x) * 50, 60, 100, 100)
    x+= 0.1
    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)