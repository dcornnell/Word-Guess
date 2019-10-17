let gameData = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    words: ["ox", "dog", "bear"],
    pick: [],
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

function checkForLetter(letter) {
    for (i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
            blankWord[i] = letter;
            lettersLeft--;
            return lettersLeft;
        }
    }
}


document.onkeyup = function(event) {
    if (0 < lettersLeft) {
        console.log(event.key);
        userGuess = event.key;

        checkForLetter(userGuess);
        console.log(blankWord);
    } else {
        console.log("you win")
    }
}






//     console.log(userGuess);



//     if (gameData.pick.indexOf(userGuess) !== -1) {
//         console.log("you already guessed that!");
//         gameData.pick.push(userGuess);
//         document.getElementById('lettersGuessed').innerHTML = gameData.pick;
//     } else {
//         if (randomWord.includes(userGuess)) {
//             console.log("awesome");


//         } else {
//             console.log("not in the word guy")
//             gameData.numberOfGuesses += 1;
//             document.getElementById('guessesLeft').innerHTML = gameData.numberOfGuesses;

//         }
//     }
// }