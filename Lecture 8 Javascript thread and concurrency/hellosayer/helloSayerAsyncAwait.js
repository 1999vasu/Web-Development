function helloSayer(times, name){
    return new Promise((resolve,reject) => {
        let count = 0
        let loopID = setInterval(()=>{
        count++
        console.log("hello",name)
        if(count==times){
            clearInterval(loopID)
            resolve()
        }
    },100)
    })
}

async function task(){
    await helloSayer(3,'Vasu')
    await helloSayer(2,'Tanish')
    await helloSayer(3,'Utkarsh')
}

helloSayer(10,'Yashas')
task()
