let p = "arnvav"
let str = `this is ${p} a string` // backticks
console.log(str)

let longstr = 'this is a very\
long string \
never ending'
console.log(longstr)

//length of string
console.log(longstr.length)

//finding if one string is contained in other
let key = 'is'
console.log(longstr.indexOf(key))

console.log(longstr.indexOf(key,3)) //start searching from position 3
console.log(longstr.lastIndexOf(key)) // finds last index


let mainstr = 'this is a long string'

let smallstr = mainstr.slice(2,6)
console.log(smallstr)

let anstr = mainstr.substr(2,2)
console.log(anstr)