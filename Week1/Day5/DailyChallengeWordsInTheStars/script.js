// Instructions

//     Prompt the user for several words (separated by commas).
//     Put the words into an array.
//     Console.log the words one per line, in a rectangular frame as seen below.
//     Check out the Hints and Requirements below.

// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:
// stars and words


// Hint

//     The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements

//     To do this challenge you only need Javascript(No HTML and no CSS)


let groupOfWords = prompt("Please enter several words separated by commas: ");
let groupOfWordsArray = [];

groupOfWordsArray = groupOfWords.split(',');

console.log(groupOfWordsArray);

let finalString  = groupOfWordsArray.join('\r\n');

console.log(groupOfWordsArray);


function findLongestWord(groupOfWordsArray) {
    let longestWord= groupOfWordsArray[0];
    let longestWordLength = 0;
  
    for(let i = 0; i < groupOfWordsArray.length; i++) {
       if(groupOfWordsArray[i].length > longestWordLength) {
        longestWord = groupOfWordsArray[i];
        longestWordLength = longestWord.length;

       }   
    
    }
    
    return longestWordLength;
  };

console.log(findLongestWord(groupOfWordsArray));



function rectangularFrame(finalString){
  let longestWordLength = findLongestWord(groupOfWordsArray);
  let border = '*'.repeat(longestWordLength + 4);
  return border + "\n* "+finalString+" *\n" + border;

}
console.log(rectangularFrame(finalString));




