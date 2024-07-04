const express = require('express')
var cors = require('cors')
const net = require('net')
const { json } = require('express/lib/response')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/state', (req, res) => {
    let state = req.body.state
    var client = new net.Socket();
    client.connect(2020, "your-esp32-ip-address", function (edo) {
        edo = state
        client.write(edo);
        client.destroy()
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})