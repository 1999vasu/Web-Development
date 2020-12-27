const express = require('express')
const session = require('express-session')
const app = express()


const {db,Users} = require('./db')

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'k2h341pi25hh3412j3hk2h11ljk'
}))

app.get("/signup",(req,res)=>{
    res.render('signup')
})

app.post('/signup',async (req,res)=>{
    const user = await Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    })
    res.status(200).send(`User ${user.id} created`)
})

db.sync()
.then(()=>{
    app.listen(5555,()=>console.log("Server started on http://localhost:5555"))
}).catch(console.error)