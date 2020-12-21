const express = require('express')
const app = express()


function m1(req,res,next){
    console.log("running middleware 1")
    next()
}

function m2(req,res,next){
    next()
    console.log("running middleware 2")
    
}
function m3(req,res,next){
    console.log("running middleware 3")
    next()
}
function m4(req,res,next){
    console.log("running middleware 4")
    next()
}
function m5(req,res,next){
    console.log("running middleware 5")
    next()
}

app.get("/hello",m2,m3,(req,res)=>{
    res.send("Hello World")
})

app.listen(5555,()=>{
    console.log("Server started on http://localhost:5555")
})