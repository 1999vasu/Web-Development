const express = require('express')
const expressSession = require('express-session')
const app = express()


const {db,Users} = require('./db')

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(expressSession({
    resave:true, //saves the cookie on each cliend<-> communication
    saveUninitialized: true, // save cookie even if nothing to track
    secret: 'some long random string here', // used to encrypt the cookie
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

app.get("/login",(req,res)=>{
    res.render("login")
})


app.post("/login",async (req,res)=>{
    const user = await Users.findOne({where:{username: req.body.username}})

    if(!user){
        return res.render('login',{error: "No such username exist"})
    }

    if(user.password != req.body.password){
        return res.render("login",{error: "wrong password"})

    }

    req.session.userid = user.id

    res.redirect('/profile')
    
})

app.get("/profile",async (req,res)=>{
    console.log(req.session)
    if(!req.session.userid){
        return res.redirect('/login')

    }

    const user = await Users.findOne({where:{id: req.session.userid}})
    res.render('profile',{user})
})

app.get("/logout",(req,res)=>{
    req.session.userid=null
    res.redirect("/login")
})

db.sync()
.then(()=>{
    app.listen(5555,()=>console.log("Server started on http://localhost:5555"))
}).catch(console.error)