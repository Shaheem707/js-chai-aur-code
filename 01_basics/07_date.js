// Dates

// The epoch - January 1, 1970, UTC

const date = new Date();
// console.log(date);
// Result - 2024-09-28T11:00:07.944Z

// console.log(date.toString());
// Result - Sat Sep 28 2024 11:01:29 GMT+0000 (Coordinated Universal Time)

// console.log(date.toDateString());
// Result - Sat Sep 28 2024

// console.log(date.toLocaleString());
// 9/28/2024, 11:05:05 AM

// console.log(typeof date);
// object

// const myCreatedDate = new Date(2024, 9, 1);
// console.log(myCreatedDate.toDateString());
// Tue Oct 01 2024

// const myCreatedDate1 = new Date("2024-10-01");
// console.log(myCreatedDate1.toLocaleString());
// 10/1/2024, 12:00:00 AM

// const myCreatedDate2 = new Date("10/01/2024");
// console.log(myCreatedDate2.toLocaleString());
// 10/1/2024, 12:00:00 AM

// const myTimeStamp = Date.now();
// Date.now() will return time from the epoch 1st Jan, 1970.
// console.log(myTimeStamp);

// To convert time from ms to s:
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();
// .toLocaleString(locales, options)
// console.log(newDate.toLocaleString(
//     'default',
//     {
//         hour12: false,
//         weekday: "short"
//     }
// ));





