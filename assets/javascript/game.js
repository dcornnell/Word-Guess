let gameData = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    words: ["ox", "llama", "bear", "lynx", "camel", "zebra"],
    picked: [],
    wins: 0,
    numberOfGuesses: 5
}
let userGuess;
const randomWord = gameData.words[Math.floor(Math.random() * gameData.words.length)];

let blankWord = [];
let lettersLeft = randomWord.length;
let gameStatus;


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

        $('body').append($('<div id=message class="message">you picked that already</div>'))
        $("#message").fadeOut(1000);
    } else {
        gameData.picked.push(userGuess);



    }
}

function checkWin() {
    if (randomWord.includes(userGuess) && lettersLeft === 0) {
        gameStatus = "won";


    } else if (gameData.numberOfGuesses === 0) {
        gameStatus = "loss"

    }

    if (gameStatus === "won") {
        console.log("win");
        $('body').append($('<div class="win">YOU WIN!</div>'))
    } else if (gameStatus === "loss") {
        $('body').append($('<div class="loss">YOU LOSE!</div>'))
    }
}

////BODY

$(document).ready(function() {
    $(gameBoard).text(blankWord.join(" "));



    document.onkeyup = function(event) {

        $("#message").remove();
        $(guessesLeft).text(gameData.numberOfGuesses);

        userGuess = event.key.toLowerCase();

        if (blankWord.indexOf(userGuess) !== -1) {
            console.log("you guessed that already")
            addToGuessed();
            $(gameBoard).text(blankWord.join(" "));
            $(pickedLetters).text(gameData.picked);

        } else if ((lettersLeft) > 0 && randomWord.includes(userGuess)) {
            console.log("correct guess");
            addToGuessed();
            checkForLetter(userGuess);

            $(gameBoard).text(blankWord.join(" "));
            $(pickedLetters).text(gameData.picked);
        } else {
            gameData.numberOfGuesses--;
        }
        $(guessesLeft).text(gameData.numberOfGuesses);



        checkWin();




    }


});