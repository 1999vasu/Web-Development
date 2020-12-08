console.log(beta())

function alpha(){
    return "a"
}

function beta(){
    return "B"
}


let gamma = function(){
    return "c"
}


console.log(gamma())

function area(height,width){
    // if(typeof width == 'undefined'){
    //     return Math.PI * height * height
    // }

    if(!width){
        return Math.PI * height * height
    }
    return height*width
}

console.log("area(3,4) ", area(3,4))
console.log("area(3) ", area(3))