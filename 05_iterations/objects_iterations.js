const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
}

// For in loop is used for objects.
for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
}

let programming = ["js", "rb", "py", "java"]
for (const key in programming) {
    // console.log(programming[key]); // In forof it prints the values directly
}

const countries = new Map();
countries.set('PK', "Pakistan");
countries.set('IN', "India");
countries.set('USA', "United States of America");

for (const key in countries) {
    console.log(key)
}
