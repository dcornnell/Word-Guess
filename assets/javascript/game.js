let gameData = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    words: ["ox", "llama", "bear"],
    picked: [],
    wins: 0,
    numberOfGuesses: 0
}
let userGuess;
const randomWord = gameData.words[Math.floor(Math.random() * gameData.words.length)];
console.log(randomWord);
let blankWord = [];
let lettersLeft = randomWord.length;



for (i = 0; i < randomWord.length; i++) {
    blankWord[i] = "_";

}

//let guessesLeft = $("#guesses-left");
let gameBoard = $("#game-board");
let pickedLetters = $("#picked-letters");
/// FUNCTIONS 
function checkForLetter(letter) {
    for (i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
            blankWord[i] = letter;
            lettersLeft--;

        }
    }
    return lettersLeft;
}

function addToGuessed() {
    if (gameData.picked.includes(userGuess)) {
        console.log("you already guessed that!");
    } else {
        gameData.picked.push(userGuess);



    }
}

////BODY

$(document).ready(function() {
    $(gameBoard).text(blankWord.join(" "));

    document.onkeyup = function(event) {

        userGuess = event.key.toLowerCase();

        if (blankWord.indexOf(userGuess) !== -1) {
            console.log("you picked that already");
            addToGuessed();
            $(gameBoard).text(blankWord.join(" "));
            $(pickedLetters).text(gameData.picked);
            console.log(gameData.picked);



        } else if ((lettersLeft) > 0) {
            console.log(userGuess);
            addToGuessed();
            checkForLetter(userGuess);

            $(gameBoard).text(blankWord.join(" "));
            $(pickedLetters).text(gameData.picked);
            console.log(gameData.picked);
            if (lettersLeft == 0) {
                console.log("you win!")
                $('body').append($('<div class="win">YOU WIN!</div>'))
            }
        }
    }
})