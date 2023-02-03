const express = require('express')
const app = express()

const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000


http.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})

app.get('/', (re, res) =>{
    res.send("Hello world.")
})