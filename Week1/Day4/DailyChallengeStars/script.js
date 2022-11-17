
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// method1
let dot = "* ";

for (let i = 0; i < 6; i++) {
    console.log(dot.repeat(i+1));
    
};


for (let i = 1; i <= 6; i ++) {
    let pattern = '';
    for (let j = 0; j < i; j++) {
        pattern = pattern + dot;
    }
    console.log(pattern);
}