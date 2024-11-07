// Arrays

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Arrays can also be initialized as follows:
let myArr = new Array();

// Array Methods

myArr.push(10); // Adds element at the end of the Array.
myArr.pop(10); // Removes the last element from the Array.
myArr.unshift(9); // Adds element at the beginning of the Array.
myArr.shift(); // Removes the first element from the Array. Takes no arguments.

myArr.push(10);
myArr.includes(10); // Checks if the Array includes the element. Returns true or false.
myArr.indexOf(10); // Returns the index of the element.

//myArr = myArray.join(); // Joins the elements of the Array and returns a string.
// console.log(myArray);
// console.log(myArr);

// Slice and Splice

console.log("A",myArray);
const myn1 = myArray.slice(2, 4);
console.log("B",myn1);

const myn2 = myArray.splice(2, 4);
console.log("C",myn2);
console.log("D",myArray);


