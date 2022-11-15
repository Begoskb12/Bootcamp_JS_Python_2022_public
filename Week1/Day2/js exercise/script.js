
//~~~~~~~~~~~~  Exercises~~~~~~~~~~~~ 
//exercise 1
let addressNumber = "12345";
let addressStreet = "Remy Ollier Street";
let country = "Mauritius";
// let globalAddress = addressNumber.concat(" ,",addressStreet, ", ",country)
let globalAddress = "I live in "+ addressNumber + " " + addressStreet + " " + country;
console.log(globalAddress)

//exercise 2
let birthYear= 1994;
let futureYear = 2050;
let newAge = futureYear - birthYear ;

console.log("I will be "+ newAge + " in " +futureYear )

//exercise 3
let pets = ['cat','dog','fish','rabbit','cow'];

let dog = pets[1];

pets.push('horse');

pets.splice(3,1);

let lengthArray = pets.length;


console.log("Array lenth is "+lengthArray);
console.log(pets);
