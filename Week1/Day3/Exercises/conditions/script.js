//~~~~~~~~~~~~  Exercise 1~~~~~~~~~~~~ 
// Make a keyless car!
let age = prompt('How old are you?');

if (age < 18) {
    console.log(`You are ${age} years old! Sorry, you are too young to drive this car. Powering off`) ;
    alert(`You are ${age} years old! Sorry, you are too young to drive this car. Powering off`); 
} else if (age === 18) {
    console.log(`You are ${age} years old! Congratulations on your first year of driving. Enjoy the ride!` );
    alert(`You are ${age} years old! Congratulations on your first year of driving. Enjoy the ride!`); 
} else {
    console.log(`You are ${age} years old! Powering On. Enjoy the ride!`);
    alert(`You are ${age} years old! Powering On. Enjoy the ride!1`); 
}

// -----or
// let age = Number(prompt("Plase enter your age"));
 
// if (age < 18) {
 
// alert('Sorry, you are too young to drive this car. Powering off')
// } else if (age === 18){
 
// alert('Congratulations on your first year of driving. Enjoy the ride!')
// } else {
// alert('Powering On. Enjoy the ride')
 
// }

// ~~~~~~~~~~~~Exercise 2~~~~~~~~~~~~ 

// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it


let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too large' );
        break;
    default:
        alert( "I don't know such values" );
};


// prediction : Exactly!
// Actual : Exactly!

// ~~~~~~~~~~~~Exercise 3~~~~~~~~~~~~ 



// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it


let b = 2 + 2;

switch (b) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

// prediction : Right!
// Actual : Right!
