const express = require('express')
const expresSession = require('express-session')
const app = express()

app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.use(expresSession({
    resave:false, //saves the cookie on each cliend<-> communication
    saveUninitialized: false, // save cookie even if nothing to track
    secret: 'some long random string here', // used to encrypt the cookie
}))

app.listen(4444,()=>{
    console.log("server started on http://localhost:4444")
})