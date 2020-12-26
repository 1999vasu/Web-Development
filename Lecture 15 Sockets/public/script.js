let socket = io()


let boomBtn = document.getElementById('boom')

boomBtn.onclick = function(){
    socket.emit('boom')
}

socket.on("whizz",()=>{
    let div = document.createElement('div')
    div.innerText = "whizz from server"
  document.body.appendChild(div)
})