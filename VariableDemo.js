/* Variables

1. Const - The value of a constant can't be changed . However, if a constant is an object or array its properties or items can be updated or removed.

2. let - The let declaration declares a block-scoped local variable, optionally initializing it to a value.

3. var - The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

 - Prefer not to use var (variable) because of issue in block scope and function scope

 - If you do not assigined a value then it will give you undefined.
*/

const accountNo = 122333
let accountEmail = "mihir@google.com"
var accountPassword = "its123"
accountCity = "Rajkot"
let accountState

/* 
accountNo = 2345   
This will show error becasue it is not allowed as it is Const vairable
*/

accountEmail = "lol@lol.com"
accountPassword = "lol"

console.log(accountNo);
console.table([accountNo,accountEmail,accountPassword,accountState,accountCity])


