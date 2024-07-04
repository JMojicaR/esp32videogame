const LonBtn = document.querySelector('#Lon')
const LoffBtn = document.querySelector('#Loff')

LonBtn.addEventListener('click', () => {
    send('A')
})

LoffBtn.addEventListener('click', () => {
    send('B')
})


const send = (command) => {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/state', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({state: `${command}`}))
}
