const {db,Center,Season,Batch,Course,Teacher} = require('./model.js')
const {app} = require("./server.js")


const start = async()=>{
    
    try{
        await db.sync();

        app.listen("4444",()=>{
            console.log("Server started on http://localhost:4444")
        })
    }catch(e){
        console.error(e)
    }

}

start()