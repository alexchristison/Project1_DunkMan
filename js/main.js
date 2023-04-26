
/*------------Constants----------*/



// random array of six letter words
const items = ["orange", "apples", "poster", "burger", "pizzas", "litmus", "locker", "soccer", "bishop", "casual", "castle", "snazzy", "ornery", "walrus", "poncho", "velvet"];

// const correctLetter = [];
// const wrongLetter = [];
// const underScore = [];

console.log(dunk6LetterWords(items));

function dunk6LetterWords(items){
return items[Math.floor(Math.random()*items.length)]; 
}


// STEPS OF THE GAME (assuming a random SIX letter word has been generated, ie: randomWord)
// 1) display dashes (or underscores) representing each letter of randomWord (in our case it will be six)
// 2) user clicks on any letter
// 3) check to see if that letter is in the randomWord
// 4) block out that letter from being chosen again (bad user experience to skip, but is it needed for MVP?)
// 5) if the letter is in the randomWord's display of dashes/underscores show anywhere the letter is located in the randomWord (letter can obviously appear multiple times in a word)
// 6) if the letter is not in the randomWord count -1 point agaist user AND display part of an image of the DunkMan (2 legs, body, 2 arms, head, bball) (***for mvp-MVP can be it be a "wrong" counter??)
// 7) tally the -1 points against player
// 8) check and see if all letters in randomWord have been guessed correctly
// 9) check and see if user has made 7 incorrect guesses, ie: do they have -7 points (these represent 2 legs, body, 2 arms, head, bball)
// 10) if step 8 is true = user wins (display "winner" message)
// 11) if step 9 is true = user loses (display "loser" message)
// 12) if step 8 and 9 are false user clicks on any letter that has not already been clicked
// 13) repeat steps 2-11


/*--------App's state (variables)----------*/
 // randomWord - array of letters from randomWord
 const randomWord = '';
 // guessedLetters - (sring or array)
 const guessedLetters = [];
 // numberGuesses - int (guessed lettter lenght || incremented separately)
 const numberOfGuesses = guessedLetters.length;
 // wrongGuesses - array 
 // const wrongGuesses = [];
 // correctLetterGuesses - array 
 // const correctLetterGuesses = []; 
 // game over - boolean
 let gameOver = false; 

/*------------Cashed elements------------*/
const letterButtonsEl = document.querySelector('#letters');

// const docUnderScore = document.getElementsByClassName(underScore);
// const docCorrectLetter = document.getElementsByClassName(correctLetter);
// const docWrongLettter = document.getElementsByClassName(wrongLetter);
/*-------------Event Listeners------------*/

// this works for testing button!!! 
letterButtonsEl.addEventListener('click', function(event) {
    const buttonValue = event.target.textContent;

    console.log('Button clicked:', buttonValue);
});
// ------------------------------------
// letterButtonsEl.addEventListener('click', function(event) {
//     const buttonValue = event.target.textContent;
  
// let stringArray = inputSelection.split('')
// if (randomWord.includes(buttonValue)) {
//     for(let i = 0; i < randomWord; i++) {
//         if(randomWord[i] === buttonValue) {
//             stringArray[i] = buttonValue 
//         } 
//     }
// }
// else {
//     console.log('wrong letter')
// }
//     console.log('Button clicked:', buttonValue);
// });
// ------------------------------------

// const docUnderScore = document.getElementsByClassName(underScore);
// const docCorrectLetter = document.getElementsByClassName(correctLetter);
// const docWrongLettter = document.getElementsByClassName(wrongLetter);

/*-----------Functions-----------------*/

// the function here is to randomly choose a word from the dunk 6 letter word array
// --------------------------
// function dunk_6letter_words(items) {
//     randomWord = items[Math.floor(Math.random()*items.length)];
//     return randomWord
// }

// let currentWord = items[Math.floor(Math.random()*items.length)]; 
// console.log(currentWord)
// return currentWord

// }
// console.log(currentWord)
//////
// Get user guess
// const array = [items];

// HARD CODED TEST FOR WORD / LETTER CHECK  up to 7 down.------>
// let currentWord = 'chopped'
// console.log(currentWord.includes.buttonValue);
// if (currentWord.includes('d') === true) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// function to see if the letter the user inputs is in the word


// this function may work once letter input is working? 
// function letterInWord(word, letter) {
//     return word.indexOf(letter) !== -1;
//   }

//   const chosenWord = dunk_6letter_words(items);

  // create underscore array to show number of letters in a word
// for (let i = 0; 1 < chosenWord.length; i++) {
//     underScore.push("_");  
// }
// check if letter in a word
// function checkLetter(letter) {
//     if (letterExistInWord(chosenWord, letter)) {
//         correctLetter.push(letter);
//         // update underscore array to show a correctly guessed letter
//     }
//     for (let i = 0; i < chosenWord.length; i++) {
//         if (chosenWord[i] === letter) {
//         }
//     }
// }

// console.log(chosenWord);
// console.log(underScore); 


  // listen for event
  // if letter clicked is equal to a letter in the word (e.target) then the 




/*---------cashed elements-------------*/




// create underscore based on word length
// const generateUnderScore = () => {
//     for (const i = 0; i < dunk_6letter_words.length; i++) {
//         underScore.push("_");
//     }
//     return underScore;
// }
/*----- event listeners -----*/
// we're going to have a handle click function that manages all user interactions
// with the alphabet buttons in the main section of HTML 
// document.querySelector('main').addEventListener('click', handleClick)

// const html = '';
// const ;
// for (const i = 65; 90 >= i; i++) {// A-65, Z-90
//   c = String.fromCharCode(i);
//   html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
// }
// document.getElementById('box').innerHTML = html;

// const setLetter = function(x) {
//   document.getElementById('name').innerHTML += x;
// };



// get user's guess of word by guessing one letter at a time by calling event listener
// letterButtonsEl.addEventListener("click", function() {
//     console.log("letterButtonsEl")
// })
// will use eventually once letter exists in word function up above 
// letterButtonsEl.addEventListener('click', letterInWord)