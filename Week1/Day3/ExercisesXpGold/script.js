// //~~~~~~~~~~~~   Exercise 1 : The World Translator ~~~~~~~~~~~~ 

// Ask the user which language they speak.
let spokenLanguage = prompt('Enter one language you speak!');

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
spokenLanguage = spokenLanguage.toLowerCase();
// console.log(spokenLanguage);

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

switch(spokenLanguage){
    case 'French'.toLocaleLowerCase():
        console.log('Bonjour');
        break;
    case 'English'.toLocaleLowerCase():
        console.log('Hello');
        break;
    case 'Hebrew'.toLocaleLowerCase():
        console.log('Shalom');
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');
};

//~~~~~~~~~~~~   Exercise 2 : The Grade Assigner~~~~~~~~~~~~

// Ask the user for their grade.
let userGrade = prompt('Please enter your grade!');

// If the grade is bigger than 90, console.log “A”
// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

switch(true){
    case (userGrade > 90) :
        console.log('A');
        break;
    case (userGrade > 80 && userGrade < 90):
        console.log('B');
        break;
    case (userGrade >= 70 && userGrade <= 80):
        console.log('C');
        break;
    case (userGrade < 70):
        console.log('D');
        break;
    default:
        break;
        
};

//~~~~~~~~~~~~   Exercise 3 : Verbing ~~~~~~~~~~~~ 

// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

let verb = prompt('Please enter a verb!');
let verbEndingWithIng = verb.endsWith('ing');


let verbLength = verb.length;
verb = verb.toLowerCase();

if (verbLength >= 3 && !verbEndingWithIng) {
    let newVerb=verb+'ing';
    console.log(newVerb);

}else if (verbLength >= 3 && verbEndingWithIng) {
    let newVerb=verb+'ly';
    console.log(newVerb);

}else {
    console.log(verb);
};

