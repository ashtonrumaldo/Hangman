var POSSIBLE_WORDS = ["obdurate", "juggernaut", "catalyst", "quixotic", "zephyr", "xenophobia", "serendipity", "ephemeral", "labyrinth", "mellifluous"];
var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = MAX_GUESSES;

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    console.log(`Word chosen was: ${word}`);
    guesses = "";
    guess_count = MAX_GUESSES;
    updatePage();
}

function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value;
    if (word.indexOf(letter) < 0) {
        console.log(`Incorrect Guess!`);
        guess_count--;
    }
    console.log(`You have ${guess_count} guesses left.`);
    guesses += letter;
    updatePage();
    input.value = "";
}

function updatePage() {
    console.log("Updated Called");
    var clueString = "";
    console.log(`Updated Cluestring: ${clueString}`);
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) { // you guess it
            clueString += currentLetter + " ";

        }

        else {
            clueString += "_ ";
        }

    }

    //update the clue string
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //update the guesses
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    //update the image
    var image = document.getElementById("HangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}