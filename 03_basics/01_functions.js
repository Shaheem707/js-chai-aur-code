function sayMyName() {
  console.log("Shaheem");
}
sayMyName; // This is the reference of the function
sayMyName(); // This is the execution

function userLoginMessage(userName = "Sam") {
  // Default value can be given to paramenters, It will be overwritten by arguments.
  return `${userName} just logged in`;
}

// console.log(userLoginMessage("Shaheem"))

// To take multiple inputs in a parameter we can use rest
function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(400, 600)); // This will return an array

const user = {
    userName : "Shaheem707",
    price: "2000"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject?.userName} and price is ${anyObject?.price}`)
}

handleObject(user);

const myArr = [200, 400, 500, 2000];
function returnSecondVal(arr){
    return arr[1];
}
console.log(returnSecondVal(myArr));