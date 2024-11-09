let a = 10;
const b = 20;
var c = 20;

// Nested Scope
function one(){
    const username = "Shaheem";
    function two(){
        const website = "youtube";
        // console.log(username);
    }
    two();
    // console.log(website); // Will give undefined because we are trying to access from outside scope.
}
one();

// --------------------- interesting ---------------------


function addOne(num){
    return num + 1;
}
addOne(5); // If we take this before the declaration, it'll still work.

// This below is also called as expression
const addTwo = function(num){
    return num + 2;
}
addTwo(6); // If we take this before declaration, it'll give an error i.e. Cannot access 'addTwo' before initialization.