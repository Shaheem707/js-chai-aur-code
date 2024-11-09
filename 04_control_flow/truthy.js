const userEmail = "Shaheem@openai.com";
if(userEmail){
    console.log("Got user Email.");
} else {
    console.log("Didn't get user's email.")
}

// Truthy vs Falsy
// Falsy values:
    // false, 0, -0, BigInt 0n, Nan, "", undefined, null
    
// Truthy values:
    // "0", 'false', " ", [], {}, function(){}

const myArr = [];
if(myArr.length === 0){
    console.log("Arr is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : only for null and undefined
let val1 = 5 ?? 10; // Will return 5 as it is not null
val1 = undefined ?? undefined; 
console.log(val1); 

// Ternary Operator
// (condition)? true : false
