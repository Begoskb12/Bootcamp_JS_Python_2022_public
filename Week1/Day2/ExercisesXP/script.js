//~~~~~~~~~~~~  Exercise 1: Your favorite food~~~~~~~~~~~~ 

let favouriteFood = "Briani";
let favouriteMeal = "lunch";

console.log( `I eat ${favouriteFood} at every ${favouriteMeal}`);


// ~~~~~~~~~~~~Exercise 2 : Series~~~~~~~~~~~~ 
// Part 1
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
const myWatchedSeries = ["Black Mirror", "Money Heist", "The Big Bang Theory"];

let myWatchedSeriesLength =myWatchedSeries.length;

console.log( "Length of series 'myWatchedSeries' is " +myWatchedSeriesLength);

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;

// Console.log a sentence using both of the variables created above
console.log( `I watched ${myWatchedSeriesLength} Series : ${myWatchedSeriesSentence} `);

// Part 2

//Change the series “the big bang theory” to “friends”
theBigBangTheoryIndex = 2;
myWatchedSeries.splice(theBigBangTheoryIndex,1);
console.log(myWatchedSeries);
myWatchedSeries.push('Friends');
console.log(myWatchedSeries);

//Add, at the end of the array, the name of another series you watched
myWatchedSeries.push('Loki');
console.log(myWatchedSeries);

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift('The Witcher');
console.log(myWatchedSeries);

// Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);

// console.log the myWatchedSeries array, to see all the modifications 
console.log(myWatchedSeries);


// ~~~~~~~~~~~~ Exercise 3 : The temperature converter~~~~~~~~~~~~ 
// Store a celsius temperature into a variable.
let meetingRoomTempCelcius = 23;

// Convert celcius to fahrenheit and console.log 
meetingRoomTempFahrenheit =((meetingRoomTempCelcius/5)*9)+32;
console.log(`${meetingRoomTempCelcius}°C is ${meetingRoomTempFahrenheit}°F` );



// ~~~~~~~~~~~~ Exercise 4 : Guess the answers #1~~~~~~~~~~~~ 

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 Explanation : adding integers declared by a i.e 34 and b i.e 21
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23  Explanation : adding integers a i.e 2 since it was redecalred and b i.e 21
// Actual: 23

// What will be the outcome of a + b in the first expression ?
// Prediction: 55  Explanation : adding integers declared by a i.e 34 and b i.e 21

// What will be the outcome of a + b in the second expression ?
// Prediction: 23  Explanation : adding integers a i.e 2 since it was redecalred and b i.e 21

// What is the value of c?
// Prediction: Explanation: Undefined Since  was not declared

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Prediction: 75 Explanation: adding intergers 3 and 4 gives 7. Then concatenating string '5' to it will return 75


// ~~~~~~~~~~~~Exercise 5 : Guess the answers #2~~~~~~~~~~~~

// What is the output of each of the expressions below?

typeof(15)
// Prediction: integer Explanation: will return type of the input which is an integer in this case.
// Actual: number

typeof(5.5)
// Prediction: float Explanation: since it is a decimal 
// Actual: number

typeof(NaN)
// Prediction: Not a Number
// Actual: number

typeof("hello")
// Prediction: string Explanation: since it is between ""
// Actual:

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hambugers
// Actual: hmaburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: 
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction:
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true Explanation : since there are == only the value taken into consideration
// Actual: true

1 === "1"
// Prediction: false Explanation : since there are === the value and type are taken into consideration
// Actual: false


// ~~~~~~~~~~~Exercise 6 : Guess the answers #3~~~~~~~~~~~
// What is the output of each of the expressions below?

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: NaN
// Actual: NaN

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction:
// Actual:

" " + 0
// Prediction: 0
// Actual: 0

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN

