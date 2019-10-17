let gameData = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    words: ["ox", "llama", "bear"],
    picked: [],
    wins: 0,
    numberOfGuesses: 5
}
let userGuess;
const randomWord = gameData.words[Math.floor(Math.random() * gameData.words.length)];

let blankWord = [];
let lettersLeft = randomWord.length;



for (i = 0; i < randomWord.length; i++) {
    blankWord[i] = "_";

}

//let guessesLeft = $("#guesses-left");
let gameBoard = $("#game-board");
let pickedLetters = $("#picked-letters");
let guessesLeft = $("#guesses-left");

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
        $('body').append($('<div id=message class="message">you picked that already</div>'))
        $("#message").fadeOut(1000);
    } else {
        gameData.picked.push(userGuess);



    }
}

////BODY

$(document).ready(function() {
    $(gameBoard).text(blankWord.join(" "));



    document.onkeyup = function(event) {
        $("#message").remove();
        $(guessesLeft).text(gameData.numberOfGuesses);

        userGuess = event.key.toLowerCase();

        if (gameData.numberOfGuesses === 0) {
            $('body').append($('<div class="loss">YOU LOSE!</div>'))
        } else {
            //"already picked a letter in the word"
            if (blankWord.indexOf(userGuess) !== -1) {

                addToGuessed();
                $(gameBoard).text(blankWord.join(" "));
                $(pickedLetters).text(gameData.picked);
                console.log(gameData.picked);

                // correct pick
            } else if ((lettersLeft) > 0) {

                console.log(userGuess);
                addToGuessed();
                checkForLetter(userGuess);
                gameData.numberOfGuesses--;
                $(gameBoard).text(blankWord.join(" "));
                $(pickedLetters).text(gameData.picked);
                console.log(gameData.picked);
                //win
                if (lettersLeft == 0) {

                    $('body').append($('<div class="win">YOU WIN!</div>'))
                }
            }

        }


    }

});