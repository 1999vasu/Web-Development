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
console.log("concurrently")
helloSayer(3,'Vasu')
.then(helloSayer(2,'Tanish'))
.then(helloSayer(3,'utkarsh'))


console.log("Sequentially")
helloSayer(3,'Vasu')
.then(()=>helloSayer(2,'Tanish'))
.then(()=>helloSayer(3,'utkarsh'))
