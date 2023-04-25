
// the function here is to randomly choose a word from the array under this function
function dunk_6letter_words(items)
{
return items[Math.floor(Math.random()*items.length)]; 
}
// random array of six letter words
const items = ["orange", "apples", "poster", "burger", "pizzas", "litmus", "locker", "soccer", "bishop", "casual", "castle", "snazzy", "ornery", "walrus", "poncho", "velvet"];

// const correctLetter = [];
// const wrongLetter = [];
// const underScore = [];

console.log(dunk_6letter_words(items));

function letterExistsInWord(word, letter) {
    return word.indexOf(letter) !== -1;
  }
  // listen for event
  // if letter clicked is equal to a letter in the word (e.target) then the 




/*---------cashed elements-------------*/
const letterButtonsEl = document.querySelector('#letters');

// const docUnderScore = document.getElementsByClassName(underScore);
// const docCorrectLetter = document.getElementsByClassName(correctLetter);
// const docWrongLettter = document.getElementsByClassName(wrongLetter);

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

letterButtonsEl.addEventListener('click', function(event) {
    const buttonValue = event.target.textContent;
  
    console.log('Button clicked:', buttonValue);
  });

//  letterExistsInWord)




// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];

