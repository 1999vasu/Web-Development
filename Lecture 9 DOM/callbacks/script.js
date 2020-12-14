function dosomething(done){
    console.log('1. doing something')
    done()
}

dosomething(()=>{
    console.log('2. it was done')
})

console.log("3. end ")