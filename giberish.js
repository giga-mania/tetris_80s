const {width, height} = ctx.canvas

console.log(width, height)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 1, 1, 1)
    ctx.fillRect(2, 1, 1, 1)
    ctx.fillRect(3, 1, 1, 1)
    ctx.fillRect(3, 0, 1, 1)
}, 0)

setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 500)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 2, 1, 1)
    ctx.fillRect(2, 2, 1, 1)
    ctx.fillRect(3, 2, 1, 1)
    ctx.fillRect(3, 1, 1, 1)
}, 1000)


setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 1500)



setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 3, 1, 1)
    ctx.fillRect(2, 3, 1, 1)
    ctx.fillRect(3, 3, 1, 1)
    ctx.fillRect(3, 2, 1, 1)
}, 2000)


setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 2500)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 4, 1, 1)
    ctx.fillRect(2, 4, 1, 1)
    ctx.fillRect(3, 4, 1, 1)
    ctx.fillRect(3, 3, 1, 1)
}, 3000)


setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 3500)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 5, 1, 1)
    ctx.fillRect(2, 5, 1, 1)
    ctx.fillRect(3, 5, 1, 1)
    ctx.fillRect(3, 4, 1, 1)
}, 4000)


setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 4500)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 6, 1, 1)
    ctx.fillRect(2, 6, 1, 1)
    ctx.fillRect(3, 6, 1, 1)
    ctx.fillRect(3, 5, 1, 1)
}, 5500)


setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 6000)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 7, 1, 1)
    ctx.fillRect(2, 7, 1, 1)
    ctx.fillRect(3, 7, 1, 1)
    ctx.fillRect(3, 6, 1, 1)
}, 6500)


setTimeout(() => {
    ctx.clearRect(0, 0, width, height)
}, 7000)


setTimeout(() => {
    ctx.fillStyle = "green"
    ctx.fillRect(1, 8, 1, 1)
    ctx.fillRect(2, 8, 1, 1)
    ctx.fillRect(3, 8, 1, 1)
    ctx.fillRect(3, 7, 1, 1)
}, 7500)


