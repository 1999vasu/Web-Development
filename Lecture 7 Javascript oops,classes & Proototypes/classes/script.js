class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    isAdult(){
        return this.age>18
    }
}

let p = new Person('john','30')
let p2 = new Person('john','15')

console.log(p)
console.log(typeof Person) // function there is nor new datatype called class
console.log(p.__proto__==Person.prototype) // true
console.log(p.__proto__.__proto__==Object.prototype) //true

console.log(p.isAdult())
console.log(p2.isAdult())

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade

    }
}

let s1 = new Student('john','30','A')
let s2 = new Student('john','15','B')

console.log(s1)
console.log(s2)

console.log(s1.isAdult())

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__==Person.prototype)
console.log(s1.__proto__.__proto__.__proto__==Object.prototype)