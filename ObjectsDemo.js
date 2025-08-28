// Singleton : It is used with constructor

const symbl = Symbol("Key1")

// objects literals 
const LjUser = {
    name:"Mihir",
    "full name":"Mihir Kothari",
    [symbl]:"Mykey1",
    age:23,
    email: "mihir@google.com",
    location:"Jamnagar",
    isloggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

// This two are methods to acces the key and value but second one is prefer
console.log(LjUser.name);
console.log(LjUser["name"]);

// Because the 2 key which is full name can only access with ["full name"] like this .
console.log(LjUser["full name"]);

// To access the symbol you need to use the way i am using symbol in objects
console.log(LjUser[symbl]);

// To change the value 
LjUser.email = "abc@google.com"
console.log(LjUser);

//Object.freeze(LjUser)
// It is use when you want no one to change your object
LjUser.email = "xyz@google.com"
console.log(LjUser);

LjUser["PhoneNo"] = 92345
console.log(LjUser);
// To add key value pair after creation of objects


