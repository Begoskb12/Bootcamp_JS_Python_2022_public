// //~~~~~~~~~~~~   Exercise 1: Simple if/else statement~~~~~~~~~~~~ 

// // Create 2 variables, x and y. Each of them should have a different numeric value.
// let x = 12;
// let y = 25;

// // Write an if/else statement that checks which number is bigger.

// if (x > y) {
//     console.log(`${x} is the biggest number`) ;
//     alert(`${x} is the biggest number`); 
// } else {
//     console.log(`${y} is the biggest number`);
//     alert(`${y} is the biggest number`); 
// }


// //~~~~~~~~~~~~   Exercise 2: Chihuahua~~~~~~~~~~~~ 
// // Create a variable called newDog where it’s value is “Chihuahua”.
// let newDog = "Chihuahua";

// // Check and display how many letters are in newDog.
// let newDogLength = newDog.length;

// console.log(`${newDog} has ${newDogLength} characters.`);

// // Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());


// /*Check if the variable newDog is equal to “Chihuahua”
//     if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//     else, console.log ‘I dont care, I prefer cats’ */

// if (newDog === "Chihuahua"){
//     console.log(`I love ${newDog}s,  it’s my favorite dog breed`) ;
//     alert(`I love ${newDog}s,  it’s my favorite dog breed`); 

// } else {
//     console.log(`I dont care, I prefer cats`) ;

// };


//~~~~~~~~~~~~   Exercise 3: Even or Odd~~~~~~~~~~~~ 

// Prompt the user for a number and save it to a variable.
// let inputNumber = prompt('Please enter a number.');
// console.log(`User has input the number ${inputNumber}`) ;

// // Check whether the variable is even or odd.
// //     If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// //     If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

// let modulo = inputNumber % 2;

// if(modulo === 0){
//     console.log(`${inputNumber} is an even number`) ;
  
//  }
//  else {
//     console.log(`${inputNumber} is an odd number`) ;
    

//  };

//~~~~~~~~~~~~   Exercise 4: Group Chat ~~~~~~~~~~~~ 

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];


// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

let usersArrayLength = users.length;
console.log(`Array "users" has ${usersArrayLength} elements. Meaning we have total ${usersArrayLength} users. `);
console.log(`${users}`);

let remainingUserCount = usersArrayLength - 2;


if (usersArrayLength == 0) {
    console.log(`No one is online`);

}
else if  (usersArrayLength == 1) {
    console.log(`${users} is online`);
    
}
else if  (usersArrayLength == 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
}
else {
    console.log(`${users[0]},${users[1]} and ${remainingUserCount} more are online`);

}