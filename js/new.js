// CONSTANTS
//      possible words array 
        const items = ["orange", "apples", "poster", "burger", "pizzas", "litmus", "locker", "soccer", "bishop", "casual", "castle", "snazzy", "ornery", "walrus", "poncho", "velvet"];
        items.forEach(word => console.log(word))
// GLOBAL VARIABLES
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
// CACHED ELEMENTS
        // 

// EVENT LISTENERS

// FUNCTIONS

function dunk6LetterWords(items){
    return items[Math.floor(Math.random()*items.length)]; 
    }
    console.log(dunk6LetterWords(items));