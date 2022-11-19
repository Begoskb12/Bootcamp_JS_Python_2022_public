//~~~~~~~~~~~~    Exercise 1 : Information~~~~~~~~~~~~ 
// Part I : function with no parameters

//     Create a function called infoAboutMe() that takes no parameter.
//     The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//     Call the function.

function infoAboutMe(){
    console.log(`My name is Shrutee and I like to watch anime.`); 

};

infoAboutMe();

// Part II : function with three parameters

//     Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//     The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//     Call the function twice with the following arguments:
//     infoAboutPerson("David", 45, "blue")
//     infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`You name is ${personName}, you are  ${personAge} old, your favoite colour is ${personFavoriteColor}.`);

};
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


//~~~~~~~~~~~~    Exercise 2 : Tips~~~~~~~~~~~~ 

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

//     Create a function named calculateTip() that takes no parameter.

//     Inside the function, use prompt to ask John for the amount of the bill.

//     Here are the rules
//         If the bill is less than $50, tip 20%.
//         If the bill is between $50 and $200, tip 15%.
//         If the bill is more than $200, tip 10%.

//     Console.log the tip amount and the final bill (bill + tip).

//     Call the calculateTip() function.


function calculateTip(){
    let bill = Number(prompt("Please enter the total bill amount!"));
    console.log(`The bill is ${bill}.`);
    let tip;
    let totalBill;

    if (bill < 50 ){
        tip = (20/100)*bill; // tip 20% for bill less than $50,
        totalBill = bill + tip;                

    }else if (bill >= 50  &&  bill <= 200){
        tip = (15/100)*bill; // tip 15% for bill less than $50,
        totalBill = bill + tip; 

    }else if(bill > 200){
        tip = (10/100)*bill; // tip 10% for bill less than $50,
        totalBill = bill + tip; 

    };

    console.log(`Please give a tip of ${tip}. Total bill will be ${totalBill}`);
    
};

calculateTip();



//~~~~~~~~~~~~   Exercise 3 : Find the numbers divisible by 23 ~~~~~~~~~~~~ 


// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

function isDivisible(){
    let outcomes="";
    let sumOfAllDivisibleValues = 0;
    for (let i=0; i<= 500 ; i++) {
        console.log(`${i}`);        
        if (i % 23 === 0) {
            outcomes = outcomes + i + " ";
            console.log(`${i} is divisible by 23`);
            sumOfAllDivisibleValues += i;
        };
    };

    console.log(`sum of all numbers that are divisible by 23, i.e ${outcomes}, is ${sumOfAllDivisibleValues}`);

};
isDivisible();



// adding parameter divisor

function isDivisible(divisor){
    let outcomes="";
    let sumOfAllDivisibleValues = 0;
    for (let i=0; i<= 500 ; i++) {
        console.log(`${i}`);        
        if (i % divisor === 0) {
            outcomes = outcomes + i + " ";
            console.log(`${i} is divisible by ${divisor}`);
            sumOfAllDivisibleValues += i;
        };
    };

    console.log(`sum of all numbers that are divisible by ${divisor}, i.e ${outcomes}, is ${sumOfAllDivisibleValues}`);

};
isDivisible(3);
isDivisible(45);


//~~~~~~~~~~~~  Exercise 4 : Shopping List~~~~~~~~~~~~ 

//     Add the stock and prices objects to your js file.

//     Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

//     Create a function called myBill() that takes no parameters.

//     The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//         The item must be in stock. (Hint : check out if .. in)
//         If the item is in stock find out the price in the prices object.

//     Call the myBill() function.

//     Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  ;

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} ;

const shoppingList = ["banana", "orange", "apple"]

function myBill(){
    let fruitPrice = 0;
    let totalFruitPrice = 0;
  
    for (const item of shoppingList){
        console.log(`${item}`);     
        const fruitInStock = stock[item]; 
        console.log(`${fruitInStock}`);     

        if (fruitInStock > 0){
            console.log(`${item}`); 
            fruitPrice = prices[item];
            totalFruitPrice += fruitPrice;
            console.log(`price of ${item} is ${fruitPrice}`); 

        } else {
            console.log(`${item} is out of stock`); 

        };            
        
        };
        // total price
        console.log(`Total price is ${totalFruitPrice} `); 

    };

myBill();


//--decrease stock by 1 if item s available

function myBill(){
    let fruitPrice = 0;
    let totalFruitPrice = 0;
    let newStock = 0;
  
    for (const item of shoppingList){
        console.log(`${item}`);     
        const fruitInStock = stock[item]; 
        console.log(`${fruitInStock}`);     

        if (fruitInStock > 0){
            console.log(`${item}`); 
            fruitPrice = prices[item];
            totalFruitPrice += fruitPrice;
            console.log(`price of ${item} is ${fruitPrice}`); 
            newStock = fruitInStock - 1 ;
            console.log(`new stock of ${item} is ${newStock}`); 

        } else {
            console.log(`${item} is out of stock`); 

        };            
        
        };
        // total price
        console.log(`Total price is ${totalFruitPrice} `); 

    };

myBill();



// ~~~~~~~~~~~~ Exercise 5 : What’s in my wallet ?~~~~~~~~~~~~ 

// Instructions

// Note: Read the illustration (point 4), while reading the instructions

//     Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//         an item price
//         and an array representing the amount of change in your pocket.

//     In the function, determine whether or not you can afford the item.
//         If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//         If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

//     Change will always be represented in the following order: quarters, dimes, nickels, pennies.

//     A quarters is 0.25
//     A dimes is 0.10
//     A nickel is 0.05
//     A penny is 0.01



//     4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])

//     The value 4.25 represents the item’s price
//     The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
//     The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true



function changeEnough(itemPrice, amountOfChange){
    let change = [ 0.25, 0.10,0.05, 0.01];
    let sumOfChange = 0;

    for (const item in amountOfChange){
        sumOfChange += change[item] * amountOfChange[item];
        console.log(sumOfChange);
    };

    if (sumOfChange > itemPrice){
        return true;
    }else {
        return false;

    };
};

console.log(changeEnough(14.11, [2,100,0,0])) //=> returns false
console.log(changeEnough(0.75, [0,0,20,5])) //=> returns true



//~~~~~~~~~~~~ Exercise 6 : Vacations Costs~~~~~~~~~~~ 

// Let’s create functions that calculate your vacation’s costs:

//     Define a function called hotelCost().
//         It should ask the user for the number of nights they would like to stay in the hotel.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//    

function hotelCost(){
    let totalHotelNightStays;
    let totalHotelNightStaysPrice;

    do {
        totalHotelNightStays = prompt(`Please enter the number of nights you would like to say in the hotel`);

    }

    while ((Number(totalHotelNightStays) <= 0) || (totalHotelNightStays == null) || (typeof(totalHotelNightStays) !== "number" ));
    totalHotelNightStaysPrice =  140 * Number(totalHotelNightStays);
    console.log(totalHotelNightStaysPrice);
    return (totalHotelNightStaysPrice);
};


// hotelCost();


//     Define a function called planeRideCost().
//         It should ask the user for their destination.
//         If the user doesn’t answer or if the answer is not a string, ask again.
//         The function should return a different price depending on the location.
//             “London”: 183$
//             “Paris” : 220$
//             All other destination : 300$



function planeRideCost(){
    let destination = "";    
    do {
        destination = prompt(`Please enter a destination `);
    }

    while (destination.length === 0 || destination === "" || typeof(destination) !== "string" );
    console.log(destination);

    destination = destination.toLocaleLowerCase() === "london" ? 183 : destination.toLocaleLowerCase() === "france" ? 220 : 300;
    return (destination);
};

// planeRideCost();

//     Define a function called rentalCarCost().
//         It should ask the user for the number of days they would like to rent the car.
//         If the user doesn’t answer or if the answer is not a number, ask again.
//         Calculate the cost to rent the car. The car costs $40 everyday.
//             If the user rents a car for more than 10 days, they get a 5% discount.
//         The function should return the total price of the car rental.

function rentalCarCost(){
    let carRentalDays;

    do {
        carRentalDays = prompt(`Please enter the number of days you would like to rent the car`);

    }

    while ((Number(carRentalDays) <= 0) || (carRentalDays == null) || (typeof(carRentalDays) !== "number" ));
    carRentalPrice = (Number(carRentalDays) > 10) ? Number(carRentalDays)*40*0.95 : 40 * Number(carRentalDays);
    console.log(carRentalPrice);
    return (carRentalPrice);
};


// rentalCarCost();


//     Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//     Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

//     Call the function totalVacationCost()

//     Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.




function totalVacationCost(){
    let carCost = rentalCarCost();
    let hotelCost = hotelCost();
    let planeCost = planeRideCost();
    let totalCost = carCost+ hotelCost +planeCost ;
    console.log(totalCost);

  
};
totalVacationCost();
