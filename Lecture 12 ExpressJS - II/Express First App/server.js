const express = require('express')
const app = express()


app.get('/hello',(req,res)=>{
    let name = 'Guest'
    if(req.query.name)
        name = req.query.name
    res.send("hello world " + name)
})

app.use('/xyz',express.static(__dirname+'/public'))


app.listen(5555,()=>{
    console.log("Server started on http://localhost:5555")
})