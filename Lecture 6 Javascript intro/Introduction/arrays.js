let notes = ['do','re','mi','fa','so','la','ti','do']

//slice
console.log(notes.slice(4,6))


//splice removes elements form actual variable
let omit = notes.splice(4,2)
console.log(omit)
console.log(notes)

//replacing elements
notes.splice(0,3,'sa','re','ga')
console.log(notes)

//concat
console.log(notes.concat('sa')) // not inplace
console.log(notes)