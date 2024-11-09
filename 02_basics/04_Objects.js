const user = new Object();
const user1 = Object.create();

const regularUser = {
    email: "some@gmail.com",
    fullName: "Some Sam",
    age: 40,
    empId: 2
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1, ...obj2, ...obj3};

console.log(Object.keys(regularUser)) // This returns an array which can be useful.
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser)) 
// Result of entries method => [[ 'email', 'some@gmail.com' ],[ 'fullName', 'Some Sam' ],[ 'age', 40 ], [ 'empId', 2 ]]

console.log(regularUser.hasOwnProperty("fullName")) // Returns a boolean

// ------------------ Destructuring and JSON API ------------------------

const course = {
    courseName: "JavaScript",
    price: '999',
    courseInstructor: "Hitesh"
}

// Destructuring:
const {courseName} = course; // OR
const {courseName : Name} = course;