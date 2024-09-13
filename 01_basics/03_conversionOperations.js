let score = 33;
score = "33abc";

let scoreInNumber = Number(score); // This will convert but due to alphabets with the number, it'll convert it into Nan. It'll convert to zero in case of null, If boolean is converted, it'll convert to 0 or 1, So BE CAREFUL.


// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);


// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 = true ; 0 => False
// "" => False
// "shaheem" => true;

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
