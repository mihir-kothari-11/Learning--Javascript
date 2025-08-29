// 1. Function Declaration 
function addTwoNumber(num1,num2){ // number1 and number2 called Parameters
    let result
    result = num1+num2
    return result;
}

const finalResult = addTwoNumber(2,3) // This is called Arguments
console.log(finalResult);


// ... This is rest operator same as spread operator but depends on work  
function RestOperatorDemo(...num1){ // number1 and number2 called Parameters
    return num1;
}
console.log(RestOperatorDemo(2,3,4,5,6));

// Passing objects as argument

const specialFuncObj= {
    name: "Jethalal",
    surname: "Gada"
}

function handle(anyobject){
    console.log(`Name : ${anyobject.name} and surname : ${anyobject.surname}`);  
}

handle(specialFuncObj)

// You can also pass the array

const newArr = [10,20,30,40]
function arrFunc(anyArray){
    return anyArray[2]
}
console.log(arrFunc(newArr));

// 2. Function Expression

// The difference is you have to declare function before using it 
const addTwo = function(num1,num2){
    return num1 + num2
}

console.log(addTwo(10,30));


// 3. Arrow Functions - It allow you to Implicity return and explicity return both

/* const ArrowFunc = (num1,num2) => {
    return num1 + num2
} */

// const ArrowFunc = (num1,num2) => num1 + num2 

const ArrowFunc = (num1,num2) => (num1+num2)
console.log(ArrowFunc(10,60));
