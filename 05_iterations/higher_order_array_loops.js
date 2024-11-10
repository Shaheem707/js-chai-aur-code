// for of
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  // console.log(greet);
}

// Maps - DataType like array/object.
// .get and .set functions are used and .delete to remove.
const countries = new Map();
countries.set("PK", "Pakistan");
countries.set("IN", "India");
countries.set("USA", "United States of America");
// console.log(countries.get('PK'));
// console.log(countries);

for (const [code, country] of countries) {
  // console.log(code, ":-", country);
}

// foreach
let programming = ["js", "rb", "py", "java"];
programming.forEach((val, index, arr) => {
  // console.log(val);
});

programming.forEach(printMe); // Only give reference, dont execute
function printMe(item) {
  // console.log(item)
}

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
];

// loop on array of objects.
myCoding.forEach(({ languageName, languageFileName }, index) => {
  //   console.log(languageName, languageFileName);
});

// ---------------------------------------------------------------------- //

// Filter, reduce and map are used because forEach doesn't return anything.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const historyBooks = books.filter((book) => {
    return book.genre == "History";
});
// console.log(historyBooks)

const booksAfter2000 = books.filter((book)=> (book.publish > 2000))
// console.log(booksAfter2000)

// Following technique is called chaining in which you can use multiple methods.
const newNums2 = myNums.map((num) => num * 10).map((num) => num + 1).filter((num)=> num >= 40);
// console.log(newNums2)

myNums.reduce((accumulator, ))