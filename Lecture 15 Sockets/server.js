const http = require("http")
const express = require('express')
const app = express()
const sockeIo = require('socket.io')
const { S_IFDIR } = require("constants")

const server = http.createServer(app)
const io = sockeIo(server)

let users = {
    'vasu': 'vasu123',
    'tanish': 'tanish123'
}

let socketmap = {

}

function login(s,u){
    s.join(u)
    s.emit("logged_in")
    socketmap[s.id] = u
    console.log(socketmap)
}


io.on('connection',(socket)=>{ 
    console.log("Connected with socket id: ",socket.id)

    socket.on('login',(data)=>{
        if(users[data.username]){
            if(users[data.username]==data.password){
                login(socket,data.username)

            }else{
                socket.emit("login_failed")
            }
            

        }else{
            users[data.username] = data.password
            login(socket,data.username)
        }

        console.log(users)
    })

    socket.on("msg_send",(data)=>{
        data.from = socketmap[socket.id]
        if(data.to){
            io.to(data.to).emit('msg_rcvd',data)
        }else{
            socket.broadcast.emit('msg_rcvd',data)
        }
    })

})



app.use('/',express.static(__dirname+'/public'))


server.listen('4444',()=>{
    console.log("Started on http://localhost:4444")

})
