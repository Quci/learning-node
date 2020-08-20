let interval = setInterval((name) => {
    console.log('Hello ' + name)
}, 3000,'Shelley')


let timer = setTimeout((interval) => {
    clearInterval(interval)
    console.log('cleared timer')
}, 3000, interval)

timer.unref();

console.log('waiting on first interval...')
