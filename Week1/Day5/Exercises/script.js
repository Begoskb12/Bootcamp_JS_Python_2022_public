~~~~~~~~~~~~~~~~~~~~~~~ 
function getUserName(){
    let username = prompt("what is your name");
    console.log(`the username is ${username}`);

}
getUserName();


~~~~~~~~~~~~~~~~~~~~~~~ 
function showStudentInformation(name,age,id){
    console.log(`name: ${name}\nage: ${age}\nid:${id}`); // \n is a new line
}

let students = [
    {
        name: "dharshini",
        age: 18,
        id: 1111
    },
    {
        name: "shrutee",
        age: 13,
        id: 2222
    }

];

for (const student of students){
    // showStudentInformation(student["name"],student.age,student.id); // passing by position
    showStudentInformation({name:student["name"],id:student.id}); // passing by keyword argument
}

// Ayal (tutor)

// passing by position vs keyword argument

function showStudentInformation({name, age=10, id}) {
    console.log(`name: ${name}\nage: ${age}\nid:${id}`);
}

let students2 = [
    {
        name: "bob",
        age: 10,
        id: 1111
    },
    {
        name: "alice",
        age: 9,
        id: 2222
    }
];

for (const student of students2) {
    // showStudentInformation(student["name"], student.id); // passing by position
    showStudentInformation({name:student["name"],  id:student.id}); // passing by keyword argument
}

//~~~~~~~~~~~~~~Exercise 1~~~~~~~~~ 

// Write a Javascript function that takes a parameter: myAge
// In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// Call the function.

function showMomDadAge(myAge){
    let momAge = 2 * myAge;
    let dadAge = 1.2 * momAge;
    console.log(`the age of my mum is ${momAge} and my dad is ${dadAge} `);

}

let returnValue = showMomDadAge(myAge= 10);
console.log(`let the value is ${returnValue }`);





//~~~~~~~~~~~~~~Exercise 2~~~~~~~~~ 

// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function


function getMomAge(myAge){
    return 2 * myAge
}
console.log(`Mom's age is ${getMomAge(10)}`)
