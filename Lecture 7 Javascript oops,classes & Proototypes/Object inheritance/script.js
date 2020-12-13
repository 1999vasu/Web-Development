let a = { p:10, q:'abcde',r:false}
let b = Object.create(a)
let c = Object.create(b)

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)
b.q='nafjalf'

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)