function helloSayer(times, name,doneSaying){
    let count = 0
    let loopID = setInterval(()=>{
        count++
        console.log("hello",name)
        if(count==times){
            clearInterval(loopID)
            doneSaying()
        }


    },100)
}

helloSayer(3,"vasu",()=>{
    helloSayer(2,"tanish",()=>{
        helloSayer(3,"utkarsh",()=>{})
    })
})
