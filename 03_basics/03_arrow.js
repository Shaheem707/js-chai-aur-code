const user = {
    userName: "Shaheem",
    price: 999,
    welcomeMessage : function(){
        // console.log(`${this.userName}, welcome to the website.`);
        // This here refers to the context/scope where it is being used.

        console.log(this);
    }
}

// console.log(this) // This will return empty object.

// user.welcomeMessage();
user.userName = "Ali";
// user.welcomeMessage();

function chai(){
    const userName = "kaka007";
    console.log(this) // Returns special values.
    console.log(this.userName) // Returns undefined.
}
chai()

// This is a basic arrow function () => {}. It can also be held in a variable.
let userName = "kaka007";
const chai1 = () => { 
    const userName = "Shaheem"
    console.log(this); // Returns empty object.
    console.log(this.userName); // Returns undefined.
    return userName; // Explicit return
}
// chai()

//  Another way to use arrow functions is pure arrow functions(Implicit return).
const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(4,3))

// To return an object in pure arrow function:
const func1 = ()=>({userName: "kaka007"});
// console.log(addTwo())

const myArr = [2, 5, 3, 7, 12, 20];
// myArr.forEach((elem)=>{console.log(elem)}); // This is a use case of arrow func.
