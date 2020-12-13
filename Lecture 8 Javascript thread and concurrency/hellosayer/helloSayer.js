function helloSayer(times, name){
    let count = 0
    let loopID = setInterval(()=>{
        count++
        console.log("hello",name)
        if(count==times){
            clearInterval(loopID)
        }

    },100)
}

helloSayer(3,"vasu")
helloSayer(2,"tanish")