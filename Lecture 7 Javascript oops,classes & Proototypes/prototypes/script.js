let str = 'alfja'               // 3 levels from null
let num = 123                   // 3 levels form null
let bool = true                 // 3 levels from null
let arr = [1,2,3,4]             // 3 levels from null
let obj = {a:10,b:'aslf'}       // 2 levels from null

let fun = function (){console.log("hey")} //3 levels from null

// if x and y are not primitive
// x==y : true <- means they are referenced to same 
// object in the memory

console.log("typeof String",typeof String)
console.log("typeof Object",typeof Object)
console.log("typeof Boolean",typeof Boolean)
console.log("typeof Array",typeof Array)
console.log("typeof Function",typeof Function)

console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)

// Everything indirectly inherits from the same thing
// that object is inherited from

// i.e. in javascript everything is essentially an objedct

console.log("==========prototype=========")
console.log(obj.__proto__==Object.prototype)
console.log(str.__proto__==String.prototype)
console.log(num.__proto__==Number.prototype)
console.log(bool.__proto__==Boolean.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(fun.__proto__==Function.prototype)


//String prototype inherits from Object Prototype

console.log(typeof Object.create(Boolean.prototype))

console.log(str.charAt(4))
console.log(typeof str.charAt)
let str2 = ' adjfdlafjl'
console.log(str.charAt == str2.charAt) //true

str.charAt = function(){ return 'x'} // doesnot make a difference

String.prototype.charAt = function(){return 'X'}
console.log(str.charAt(4))


Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function(){
    console.log("joint called on ",this)
    return this.joinOriginal(...arguments)

}
