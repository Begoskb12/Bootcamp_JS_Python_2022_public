//~~~~~~~~~~~~  Exercise 1~~~~~~~~~~~~ 

// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let credentials = {
    username: "John",
    password: "Bootcamp2022"
  };

console.log(credentials) 

// 2. Create an array which contains the object you have made above and name the array "database".
let database = [credentials];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let newsfeed = [];

let user1 = {
    username : "Sam",
    timeline: "1",
};

let user2 = {
    username : "Alex" ,
    timeline: "2",
};

let user3 = {
    username : "Clover",
    timeline: "3",
};

newsfeed = [user1,user2,user3];
console.log(newsfeed);

// or
newsfeed = [
    {
        username : "Sam",
        timeline: "1",
    },

    {
        username : "Alex" ,
        timeline: "2",
    },

    {
        username : "Clover",
        timeline: "3",
    }
]

console.log(newsfeed);



