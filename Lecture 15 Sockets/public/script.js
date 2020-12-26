let socket = io()

$('#loginBox').show()
$('#chatbox').hide()

$('#btnLogin').click(()=>{
    socket.emit('login',{
        username: $('#inpUsername').val(),
        password: $('#inpPass').val()
    })

})

socket.on("logged_in",()=>{
    $('#loginBox').hide()
    $('#chatbox').show()
})

$('#btnSend').click(()=>{
    socket.emit('msg_send',{
        to: $('#inpToUser').val(),
        msg: $('#inpNewMsg').val()
    })
})

socket.on("msg_rcvd",(data)=>{
    $('#ulMsglist').append($('<li>').text(
        `[${data.from}] : ${data.msg}`
    ))
})

socket.on('login_failed',()=>{
    window.alert("Password is wrong")
})