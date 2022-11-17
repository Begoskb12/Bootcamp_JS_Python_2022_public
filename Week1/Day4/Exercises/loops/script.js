// //~~~~~~~~~~~~  Exercise 1~~~~~~~~~~~~ 


// // Create a structured HTML file linked to a JS file

// // 1. Write a JavaScript for loop that will iterate from 0 to 15.
// //  For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// // Sample Output: //"0 is even" //"1 is odd" //"2 is even"


// for (let i=0; i<=15; i++) {
    
//     let type = i % 2 === 0 ? 'even' : 'odd'
//     console.log(i);
//     if (c === 0) {
//         console.log(i +  " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


// // improvement by using tenary operators

// for (let i = 0; i <= 15; i++) {
//     console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`)
// }

// // ------additional examples---------------------

// for (let index in arr){
//     console.log(`the value at index ${index} is ${arr[index]}`)
// }

// // ------
// for(let key in obj) {
//     console.log(`the value of the key ${key} is ${obj[key]}`)

// }

// ------~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---------------------






//~~~~~~~~~~~~  Exercise 2~~~~~~~~~~~~ 
let names= ["john", "sarah", 23, "Rudolf",34]
// 1. Write a JavaScript for loop that will go through the variable names.

//     if the item is not a string, pass.
//     if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

for (let name of names) {​​​​​​
    if (typeof (name) !== 'string') {​​​​​​
        continue;
    }​​​​​​
    let firstLetter = name.charAt(0)
    if ( firstLetter !== firstLetter.toUpperCase()) {​​​​​​
        name = firstLetter.toUpperCase() + name.slice(1);
    }​​​​​​
    console.log(name)
}​​​​​​



// 2. Write a JavaScript for loop that will go through the variable names

//     if the item is not a string, go out of the loop.
//     if the item is a string, display it.

for (let name of names) {​​​​​​
    if (typeof (name) !== 'string') {​​​​​​
        continue;
    }​​​​​​
    console.log(name)
}





