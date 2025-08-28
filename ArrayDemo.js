const myArr = ["Iron Man",1,2,3]
console.log(myArr);

const myArr2 = new Array(1,2,"Spider Man",3)
console.log(myArr2);
console.log(myArr2[2]);
console.log(`My favourite superhero from marvel is : ${myArr2[2]}`);


/* The above are two differrent ways to declare array in js and also in js you can stored of muiltple data SVGUnitTypes.
 */

// Array methods
myArr.push("SpiderMan")  // It is used to add value to last place
console.log(`After value added at last position with the help of push method : ${myArr}`);

console.log(`Last value delete with the help of pop method : ${myArr2.pop()}`); 
// It is used to remove value from last positon


console.log(`Value is added to first position with the help of unshift :  ${myArr.unshift("SuperMan")}`);  // It is used to add at first position

console.log(myArr);


console.log(`Value is deleted to first position with the help of unshift :  ${myArr.shift()}`); // It is used to delete a value from first position

console.log(myArr);

console.log(myArr.includes("Iron Man")); // It see whether that value is there or not in array
 


