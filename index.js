const canvas = document.querySelector("#can")
const ctx = canvas.getContext("2d")
const img = document.querySelector("#img")
const h5 = document.querySelector("#h5")

ctx.fillRect(20, 20, 40, 10)
ctx.drawImage(img, 40, 60, 100, 100)