const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')

let tasks = [
    'sample task'
]

app.get("/",(req,res)=>{
    let tasklist = tasks.map(t=>`<li>${t}</li>`).join("\n")
    res.render('home',{
        title: 'To-do List',
        tasks: tasks})
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')
}
)



app.listen(5555,()=>{
    console.log("Server Started")
})