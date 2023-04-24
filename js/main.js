
// the function here is to randomly choose a word from the array under this function
function dunk_6letter_words(items)
{
return items[Math.floor(Math.random()*items.length)]; 
}
// random array of six letter words
const items = ["orange", "apples", "poster", "burger", "pizzas", "litmus", "locker", "soccer", "bishop", "casual", "castle", "snazzy", "ornery", "walrus", "poncho", "velvet"];

// const correctLetter = [];
// const wrongLetter = [];
// const letterUnderscores = [];

console.log(dunk_6letter_words(items));

// get user's guess of word by guessing one letter at a time by calling event listener
document.addEventListener("keyup", (event) => {
    const keyWord = String.fromCharCode(event.keyWord);
})

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];



