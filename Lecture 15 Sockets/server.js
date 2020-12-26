const http = require("http")
const express = require('express')
const app = express()
const sockeIo = require('socket.io')

const server = http.createServer(app)
const io = sockeIo(server)

io.on('connection',(socket)=>{ 
    console.log("Connected with socket id: ",socket.id)

    socket.on('boom',()=>{
        console.log("Boom received from ",socket.id)
    })

    setInterval(()=>{
        socket.emit("whizz")
    },2000)

})
app.use('/',express.static(__dirname+'/public'))


server.listen('4444',()=>{
    console.log("Started on http://localhost:4444")

})