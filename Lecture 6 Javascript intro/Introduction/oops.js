// object oriented programming in javascript

// allows to create objects without defining the class

//directly define object = json form - javascript object notation
var bird = {
    x:100,
    y:20,
    color:'blue',
    eggs:['one','two','three'],
    fly: function(){
        console.log("bird flies ",this.x,this.y)
    }
};

//using for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}


bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
});


function fruit(taste,color){
    this.taste  = taste;
    this.color = color;
}


//one way
var apple = {
    taste:"sweet",
    color:"red",
}
console.log("one way",apple)

//two way
var apple = new fruit("sweet",'red')
var banana = new fruit("sweet","Yellow")

console.log("other way",apple)
console.log("other way",banana)


// class declaration
class fruitclass{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
}


//third way with class keyword class expression
let fruitclass2 = class{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
}
let kiwi = new fruitclass("sour",'green')
console.log(kiwi)

let kiwi2 = new fruitclass2("sour",'green')
console.log(kiwi2)
