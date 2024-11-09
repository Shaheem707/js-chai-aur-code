// Declaring a symbol :
const mySym = Symbol("key1");

const JsUser = {
    name: "Shaheem",
    age: 20,
    [mySym] : "mykey1",
    email: "shaheem@google.com",
}

// To access the following methods can be used:
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "shaheem@streamsconsultants.com"; // To change the value of key in obj.
Object.freeze(JsUser);  // To lock the values of the object.

JsUser.greeting = function(){
    console.log(`Hello, ${this.name}`)
}

JsUser.greeting();