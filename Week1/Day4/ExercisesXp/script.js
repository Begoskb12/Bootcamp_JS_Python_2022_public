//~~~~~~~~~~~~    Exercise 1 : List of people ~~~~~~~~~~~~ 
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

//Write code to remove “Greg” from the people array.

// people.shift();
//or

people.splice(people.indexOf("Greg"),1);
console.log(people);

//Write code to replace “James” to “Jason”.
// people.pop();
// people.push("Jason");
// console.log(people);

//or use splice
// people.splice(2,1,"Jason");
// console.log(people);

//or
people[people.indexOf("James")] = "Jason";
console.log(people);

// //  Write code to add your name to the end of the people array.
people.push("Shrutee");
console.log(people);

// //     Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let maryIndex = people.indexOf("Mary");
console.log(maryIndex);

// //     Write code to make a copy of the people array using the slice method.
// //         The copy should NOT include “Mary” or your name.
const peopleNew = people.slice(1, 3);
console.log(peopleNew);

//         Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//         Hint: Check out the documentation for the slice method

//     Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo")); //output is -1 because it is abssent from the array.


//     Create a variable called last which value is the last element of the array.
//     Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length-1];
console.log(last);


// Part II - Loops
//     Using a loop, iterate through the people array and console.log each person.
for (let peopleName of people){
    console.log(peopleName) ;
};

// or

for (let peopleName in people){
    console.log(people[peopleName]) ;
};

//     Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
//     Hint: take a look at the break statement in the lesson.

  for (let peopleName in people){
    console.log(people[peopleName]) ;
    if (people[peopleName] === "Jason"){
        break;
    }
};


//~~~~~~~~~~~~   Exercise 2 : Your favorite colors~~~~~~~~~~~~ 

// Create an array called colors where the value is a list of your five favorite colors.
const colours = ["blue", "nude", "black", "white","mint"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let colour in colours){
    // console.log(colour) ;
    // console.log(colours[colour]) ;
    console.log(`My #${Number(colour)+1} choice is ${colours[colour]}`) ;

   
};

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const suffixArray= ["st","nd","rd","th","th"];

for (let colour in colours){
    // console.log(colour) ;
    // console.log(colours[colour]) ;
    console.log(`My ${Number(colour)+1}${suffixArray[colour]} choice is ${colours[colour]}`) ;

   
};


// //~~~~~~~~~~~~   Exercise 3 : Repeat the question ~~~~~~~~~~~~ 

// // Prompt the user for a number.
// // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// let promptNumber = prompt("Please enter a number!");
// console.log(typeof(promptNumber));

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let promptNumber = "";
do
{
    promptNumber = prompt("Please enter a number!");

}
while (Number(promptNumber) < 10);

// Do while is better in this case since we need to prompt the user atleats once before checking the condition.



//~~~~~~~~~~~~   Exercise 4 : Building Management ~~~~~~~~~~~~ 

//This is an object wth its properties
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(`There are ${building.numberOfFloors} floors`) ;       

// Console.log how many apartments are on the floors 1 and 3.

console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartments on 1st floor and ${building.numberOfAptByFloor.thirdFloor} apartments on 3rd floor`) ;

// Console.log the name of the second tenant and the number of rooms he has in his apartment. 
console.log(`The second tenant's name is ${building.nameOfTenants[1]} and has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment.`) ;

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


let rentSaraDavid = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]; 
let rentDan = building.numberOfRoomsAndRent.dan[1]; 

if (rentSaraDavid > rentDan){
let rentDan = building.numberOfRoomsAndRent.dan[1]; 
    console.log(`sum rent of sarah and david is ${rentSaraDavid} and rent of dan is ${rentDan}`);
    console.log("sum of Sarah’s and David’s rent is bigger than Dan’s rent");
    rentDan = 1200;
    console.log(`Dan’s new rent is ${rentDan}`);


}else {
    console.log("sum of Sarah’s and David’s rent is not bigger than Dan’s rent");
};

//~~~~~~~~~~~~   Exercise 5 : Family ~~~~~~~~~~~~ 
// Create an object called family with a few key value pairs.
const family = {
    member1: "Aftaab", 
    member2: "Shrutee", 
    member3: "Dharshini",
    member4: "Jeremie"
}

// Using a for in loop, console.log the keys of the object.

for (let person in family){
    console.log(person) ;
};

// Using a for in loop, console.log the values of the object.
for (let person in family){
    console.log(family[person]) ;
};


//~~~~~~~~~~~~   Exercise 6 : Rudolf ~~~~~~~~~~~~ 

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = "";
for (let i in details){
    sentence += i + " " + details[i] + " ";     
    
};
console.log(sentence) ;

//~~~~~~~~~~~~   Exercise 7 : Secret Group ~~~~~~~~~~~~ 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
// A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
let secretGroupName = "";
for (let i in names){
    secretGroupName += names[i][0] ;   
        
};
console.log(secretGroupName) ;


