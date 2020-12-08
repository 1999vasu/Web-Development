function greet( name){
    console.log("hello ",name)
}
function createGreeter(greeting){
    function greet(name){
        console.log(greeting,name())
    }
    return greet
}

function getName(){
    return document.getElementById('namebox').value
}


let g1 = createGreeter("Good morning ")
let g2 = createGreeter("Good evening ")

console.log(g1("Vasu"))
console.log(g1("Himanshu"))


console.log(g2("Vasu"))
console.log(g2("Himanshu"))



console.log(g2("Vasu"))
console.log(g2("Himanshu"))



console.log(greet("Vasu"))
console.log(greet("Himanshu"))