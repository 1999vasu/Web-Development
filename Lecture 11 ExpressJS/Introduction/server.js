const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants')
const express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("<h1>hello world<h1>")
})

app.get('/greet',(req,res)=>{
    let person = 'Guest'
    if(req.query.person)
        person = req.query.person
    res.send("<h1>Good Morning " + person + " </h1>")
})

app.get("/:city/welcome",(req,res)=>{
    res.send("Welcome to this "+req.params.city + "!")
})

app.post('/greet',(req,res)=>{
    let person = 'Guest'
    if(req.body.person)
        person = req.body.person
    res.send("<h1>Good Evening " + person + " </h1>")
})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/files/forms.html')

})

app.listen(4444,()=>{
    console.log('Serever started on on http://localhost:4444')
})