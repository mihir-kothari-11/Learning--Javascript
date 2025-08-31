const newArr = [1,2,3,4,5,6,7]

// This is filter with the use of call back function means a function without name i.e arraow function 
let newNums = newArr.filter( (nums) => {
    return nums > 4
})

/*  You can also write in single line with no return keyword beacuse we have not use {} braces 
newNums = newArr.filter((nums)=> nums > 3)
 */
console.log(newNums);


// For map and reduce just go through images 