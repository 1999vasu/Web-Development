let a =10;
console.log(a)

let b=[1,2,3,4]
console.log(b)

console.log("hello world")

c=20; //global value
var d = 30; // Function scope
let e = 50; //block scope

function fun(){
    let a = 5;
    if(a==5){
        let b=10;
        var f=90;
        let m = 6;
        console.log("Inside",b);        
        console.log("Inside f",f);
        console.log("Inside m",m);

    }
    console.log("outside",b);
    console.log("outside f",f);
    // console.log("outside m",m); //produces error 
}

// console.log("global f",f); //produces error again


//Arrays
let arr=['apple','banana','mango']
console.log(arr)

for(let i=0;i<arr.length;++i){
    console.log(arr[i])
}

arr.push("Banana") //insert element
arr.pop() // pop last element
arr.shift() //remove from back
arr.unshift("kiwi") //add in front
arr.indexOf("kiwi") //findx element index