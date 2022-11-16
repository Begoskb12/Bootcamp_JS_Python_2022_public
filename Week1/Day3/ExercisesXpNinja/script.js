//~~~~~~~~~~~~   Exercise 1 : Age difference ~~~~~~~~~~~~ 

// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

let birthYearPerson1 = Number(prompt('Enter birth year of person 1!'));
let birthYearPerson2 = Number(prompt('Enter birth year of person 2!'));


if (birthYearPerson1 > birthYearPerson2){
    let differenceInYear = birthYearPerson1 - birthYearPerson2;
    let year = differenceInYear + birthYearPerson1;
    console.log("year when the younger one is exactly half the age of the older one is " + year);

} else if (birthYearPerson1 < birthYearPerson2){
    let differenceInYear = birthYearPerson2 - birthYearPerson1;
    let year = differenceInYear + birthYearPerson2;
    console.log("year when the older one is exactly twice the age of the younger one " + year);

} else {
    console.log(`they were both born in the year ${birthYearPerson1}`);

};


//~~~~~~~~~~~~   Exercise 2 : Zip codes~~~~~~~~~~~~
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
//     Zip codes consists of 5 numbers
//     Must only contain numbers
//     Must not contain any whitespace (spaces)
//     Must not be greater than 5 digits in length


// /* without regex */
let zipCode = prompt('Enter zip code');

let zipCodeOnlyNumberCheck = Number.isInteger(zipCode);
console.log(zipCodeOnlyNumberCheck);

if (zipCode.length !== 5 || zipCode.length >= 5){
    console.log("Error. Zip codes should consist of 5 numbers only. Please re-enter the zip code.");
    alert("Error. Zip codes should consist of 5 numbers only. Please re-enter the zip code.");
    zipCode = prompt('Re enter zip code');

} else if (zipCodeOnlyNumberCheck == false) {
    console.log("Error. Zip codes must contain only numbers. Please re-enter the zip code.");
    alert("Error.  Zip codes must contain only numbers. Please re-enter the zip code.");
    zipCode = prompt('Re enter zip code');


}else if (zipCode.indexOf(' ') !== -1){
    console.log("Error. Zip codes must not contain white spaces. Please re-enter the zip code.");
    alert("Error.  Zip codes must not contain white spaces. Please re-enter the zip code.");
    zipCode = prompt('Re enter zip code');

}else {
    console.log("Success");   
} 

// /* with regex */

const regExpression = /\b\d{5}\S*\b/;

let regExpressionCheck = pattern.test(regExpression);


if (regExpressionCheck) {
    console.log("Success");
}
else {
    console.log("Error. Please re-enter the zip code.");
    zipCode = prompt('Re enter zip code');
}




//~~~~~~~~~~~~   Exercise 3 : Secret word ~~~~~~~~~~~~ 
// Prompt the user for a word and save it to a variable.
let word = prompt('Enter a word!');

// Delete all the vowels of the word and console.log the result.

const regexVowel = /[aeiou]/gi; // g (global) flag is used because we want to match all occurrences of a vowel in the string and not just the first occurrence. The i flag is used to make the search case insensitive. 
let wordWithoutVowel = word.replace(/[aeiou]/gi, '');
console.log("Word without vowels is " + wordWithoutVowel);

// Bonus: Replace the vowels with another character and console.log the rest

word = word.replace(/a/gi, 1);
word = word.replace(/e/gi, 2);
word = word.replace(/i/gi, 3);
word = word.replace(/o/gi, 4);
word = word.replace(/u/gi, 5);
console.log("Word without vowels is " + word);