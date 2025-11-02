var POSSIBLE_WORDS = ["obdurate", "juggernaut", "catalyst", "quixotic", "zephyr", "xenophobia", "serendipity", "ephemeral", "labyrinth", "mellifluous"];
var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = MAX_GUESSES;
var gameOver = false;

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    console.log(`Word chosen was: ${word}`);
    guesses = "";
    guess_count = MAX_GUESSES;
    gameOver = false; // reset game finish status
    document.getElementById("guess").disabled = false; // enable input on new game start
    document.getElementById("guessButton").disabled = false; //dont allow guesses when game is finished
    updatePage();
}

function guessLetter() {
    var input = document.getElementById("guess");
    var message = document.getElementById("message");
    var letter = input.value;

    // clear last msg each guess attempt
    message.innerHTML = "";

    //dont let it guess previously guessed letters 2x
    if (guesses.indexOf(letter) !== -1) {
        message.innerHTML = `You already guessed the letter "${letter}". Try another letter!`; //i used the way u do it.
        input.value = "";
        return;
    }

    //dont let user guess previously guessed letters twice
    if (word.indexOf(letter) < 0) {
        console.log(`Incorrect Guess!`);
        guess_count--;
    }
    console.log(`You have ${guess_count} guesses left.`);
    guesses += letter;
    updatePage();
    input.value = ""; //add a clear to the input field on a guess

    var allGuessed = true; // assume win
    for (var i = 0; i < word.length; i++) {
        if (guesses.indexOf(word[i]) === -1) {
            allGuessed = false; // found letter still missing
            break;
        }
    }

    if (allGuessed) {
        document.getElementById("guesses").innerHTML = "You win! The word was: " + word;
        // Prevent further guessing:
        gameOver = true;
        document.getElementById("guess").disabled = true;
        document.getElementById("guessButton").disabled = true; //dont allow guesses when game is finished
    }
    else if (guess_count <= 0) { // lose condition
        document.getElementById("guesses").innerHTML = "You lose! The word was: " + word;
        gameOver = true;
        document.getElementById("guess").disabled = true;
        document.getElementById("guessButton").disabled = true; //dont allow guesses when game is finished
    }

}


function updatePage() {
    console.log("Ran Function: 'updatePage()'");
    var clueString = "";
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