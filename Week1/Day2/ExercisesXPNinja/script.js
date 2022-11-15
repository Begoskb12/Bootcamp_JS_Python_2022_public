//~~~~~~~~~~~~  Exercise 1 : Evaluation~~~~~~~~~~~~ 

5 >= 1;
// Prediction: true
// Actual: true

0 === 1
// Prediction: true
// Actual: true

4 <= 1
// Prediction: false
// Actual: false

1 != 1
// Prediction: false
// Actual: false

"A" > "B"
// Prediction: false
// Actual: false

"B" < "C"
// Prediction: true
// Actual: false

"a" > "A"
// Prediction: true
// Actual: true

"b" < "A"
// Prediction: false
// Actual: false

true === false
// Prediction: false
// Actual: false

true != true
// Prediction: false
// Actual: false

// ~~~~~~~~~~~~Exercise 2 : Ask For Numbers~~~~~~~~~~~~ 
let inputByUser = prompt("Enter a list of numbers separated by commas", "2,3");
let inputArray = inputByUser.split(",");

let sum = 0;

for(let i = 0; i < inputArray.length; i++)
{
    sum += parseInt(inputArray[i]);
}
console.log(sum);

// ~~~~~~~~~~~~Exercise 3 : Find Nemo~~~~~~~~~~~~ 
let text = prompt("Enter a sentence containing the word 'Nemo'", "Nemo is a cute fish.");
let found = text.indexOf("Nemo");
if ( found >= 0 )
{
    let position = text.split("Nemo")[0].split(" ").length - 1 ;
    console.log(`I found Nemo at ${position}`);
}
else
{
    console.log("I can't find Nemo");

}


let num = parseInt(prompt("Enter a number",10));
let output;
if (num < 2) 
{
    output = "boom";
}
else if (num > 2)
{
    output = "b" + "o".repeat(num) + "m";
}
if (num % 2 == 0)
{
    output += "!";
}
if (num % 5 == 0)
{
    output = output.toUpperCase();
}

console.log(output)


alert(`${num1} ${op} ${num2} = ${output}`);