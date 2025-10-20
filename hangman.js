var POSSIBLE_WORDS = ["obdurate", "juggernaut", "catalyst", "quixotic", "zephyr", "xenophobia", "serendipity", "ephemeral", "labyrinth", "mellifluous"];

var word = "";

function newGame() {
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];

    var clueString = "";
    for (var i = 0; i < word.length; i++) {
        clueString += "_ ";
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
}