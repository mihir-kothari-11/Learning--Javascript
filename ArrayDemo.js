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
 
const marvelHero = ["Iron Man","SpiderMan","Thor"]
const dcHero = ["Batman","SuperMan","Flash"]

/* marvelHero.push(dcHero)
console.log(marvelHero);
 */
// It will make it nested array and that also in original array.

/* const finalArr = marvelHero.concat(dcHero)
console.log(finalArr);
 */
// It will add both the array and create a new array

const speardArr = [...dcHero,...marvelHero]
console.log(speardArr);
// This is spread operator and this works same as concat but the limitation is in concat only one array you can concat but in this you can add multiple.


const anotherArr = [1,2,3,[4,5,6],4,7,[8,[9]],5]
const flatArr = anotherArr.flat(Infinity)
console.log(flatArr);

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("Mihir"));
// To check whether it is array or not

console.log(Array.from("Mihir"));
// To convert into array

let score1 = 18
let score2 = 10
let score3 = 45

const ofArray = Array.of(score1,score2,score3)
console.log(ofArray);
// Returns a new array from a set of elements.


/*  Slice v/s Splice
🔹 slice()
=> Definition: Returns a shallow copy of a portion of an array into a new array.
   Does NOT change (mutate) the original array.

🔹 splice()
=> Definition: Changes (mutates) the original array by adding/removing elements.

Example :- 

let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let removed = fruits.splice(2, 2);
console.log(removed); // ["mango", "orange"]
console.log(fruits);  // ["apple", "banana", "grapes"] (modified)

*/

