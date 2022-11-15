//~~~~~~~~~~~~  Exercise 1: Favorite color~~~~~~~~~~~~ 

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join());

// ~~~~~~~~~~~~Exercise 2 : Mixup~~~~~~~~~~~~ 
// Create 2 variables. The values should be strings. 
let str1 = "Buenos"
let str2 = "Dias Amigo";

// Slice out and swap the first 2 characters of the two strings from part 1.
let str3 = str1;
str1 = str2.slice(0,2) + str1.slice(2);
str2 = str3.slice(0,2) + str2.slice(2);

// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space)
str3 = str1 + " " + str2;

// Finally console.log the new concatenated string.
console.log(str3);

// ~~~~~~~~~~~~Exercise 3 : Calculator~~~~~~~~~~~~ 
let num1 = parseInt(prompt("Please enter your first number",0));
let num2 = parseInt(prompt("Please enter your second number",0));
let output = num1 + num2;
let op = prompt("Please enter your arithmetic operator (+, -, *, /, %)",0);

switch (op) {
    case "+": output = num1 + num2; break;
    case "-": output = num1 - num2; break;
    case "*": output = num1 * num2;break;
    case "%": output = num1 % num2;break;
    case "/": output = num1 / num2;break;
    default: alert("unrecognised operation"); break;
}


alert(`${num1} ${op} ${num2} = ${output}`);