// Two main use cases are that sometimes we want to prevent global variables to pollute the global scope, that's why we use IIFE. Secondly it is used when a task is to be immediately done, eg. Creating a database connection.

// Syntax - ()()

// Mainly used for preventing pollution caused by global variables.


function chai(){
    console.log("DB CONNECTED");
}
// chai() // Regular way of immediately calling a function.

// IIFE - named IIFE
(function chai(){
    console.log("DB CONNECTED")
})(); // Semicolon is neccessary to tell the function to end the context.

// Somewhat similar syntax to pure arrow functions.

// Anonymous IIFE
((user)=>{
    console.log(`DB CONNECTED by ${user}`)
})("Shaheem");