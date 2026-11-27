<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>JavaScript Dice Game</title>

<style>

/* Main page */
body {
    margin: 0;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Arial, sans-serif;

    background:
        linear-gradient(135deg, #050505, #111827);

    color: white;
}

/* Game container */
.game {
    width: 90%;
    max-width: 800px;

    padding: 30px;

    text-align: center;

    border: 2px solid #00e5ff;
    border-radius: 20px;

    background: rgba(0, 0, 0, 0.75);

    box-shadow:
        0 0 30px rgba(0, 229, 255, 0.25);
}

/* Title */
h1 {
    color: #00e5ff;
    font-size: 2.5rem;
}

/* Subtitle */
.subtitle {
    color: #aaa;
}

/* Scoreboard */
.scoreboard {
    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;

    margin: 25px 0;
}

/* Player cards */
.player {
    padding: 20px;

    border: 1px solid #333;

    border-radius: 15px;

    background: #111827;
}

/* Player name */
.player h2 {
    margin-top: 0;
}

/* Score */
.score {
    font-size: 3rem;

    font-weight: bold;

    color: #00e5ff;
}

/* Dice area */
.dice-area {
    display: flex;

    justify-content: center;

    gap: 30px;

    margin: 30px 0;
}

/* Dice */
.dice {
    width: 100px;
    height: 100px;

    display: flex;

    justify-content: center;
    align-items: center;

    font-size: 4rem;

    border-radius: 15px;

    background: white;

    color: black;

    box-shadow:
        0 0 20px rgba(255, 255, 255, 0.25);

    transition:
        transform 0.2s;
}

/* Dice rolling animation */
.rolling {
    animation: roll 0.5s linear;
}

/* Animation */
@keyframes roll {

    0% {
        transform: rotate(0deg) scale(1);
    }

    25% {
        transform: rotate(90deg) scale(1.15);
    }

    50% {
        transform: rotate(180deg) scale(0.9);
    }

    75% {
        transform: rotate(270deg) scale(1.15);
    }

    100% {
        transform: rotate(360deg) scale(1);
    }
}

/* Button */
button {
    padding: 15px 30px;

    border: none;

    border-radius: 10px;

    font-size: 1.1rem;

    font-weight: bold;

    cursor: pointer;

    background: #00e5ff;

    color: #001018;

    transition: 0.2s;
}

/* Button hover */
button:hover {
    transform: scale(1.05);

    box-shadow:
        0 0 20px rgba(0, 229, 255, 0.6);
}

/* Button disabled */
button:disabled {
    opacity: 0.5;

    cursor: not-allowed;

    transform: none;
}

/* Result */
#result {
    min-height: 35px;

    margin: 20px;

    font-size: 1.3rem;

    font-weight: bold;

    color: #00e5ff;
}

/* History */
.history {
    max-height: 200px;

    overflow-y: auto;

    margin-top: 25px;

    text-align: left;
}

/* History rows */
.history-row {
    display: grid;

    grid-template-columns:
        60px 1fr 1fr 1fr;

    padding: 10px;

    border-bottom: 1px solid #333;
}

/* Mobile */
@media (max-width: 600px) {

    .game {
        width: 85%;
        padding: 20px;
    }

    .scoreboard {
        grid-template-columns: 1fr;
    }

    .dice {
        width: 75px;
        height: 75px;

        font-size: 3rem;
    }

    .history-row {
        font-size: 0.8rem;
    }
}

</style>
</head>

<body>

<div class="game">

    <h1>🎲 JavaScript Dice Battle</h1>

    <p class="subtitle">
        Roll the dice and beat the computer!
    </p>

    <!-- Scoreboard -->
    <div class="scoreboard">

        <div class="player">

            <h2>Player</h2>

            <div
                id="playerScore"
                class="score">
                0
            </div>

        </div>

        <div class="player">

            <h2>Computer</h2>

            <div
                id="computerScore"
                class="score">
                0
            </div>

        </div>

    </div>

    <!-- Dice -->
    <div class="dice-area">

        <div
            id="playerDice"
            class="dice">
            🎲
        </div>

        <div
            id="computerDice"
            class="dice">
            🎲
        </div>

    </div>

    <!-- Result -->
    <div id="result">
        Click Roll Dice to start!
    </div>

    <!-- Roll button -->
    <button
        id="rollButton"
        onclick="rollDice()">
        🎲 Roll Dice
    </button>

    <!-- Reset button -->
    <button
        onclick="resetGame()">
        🔄 Reset
    </button>

    <!-- History -->
    <div class="history">

        <h2>Round History</h2>

        <div id="historyList"></div>

    </div>

</div>

<script>

/*
    ============================
       GAME VARIABLES
    ============================
*/

// Player score
let playerScore = 0;

// Computer score
let computerScore = 0;

// Round number
let round = 0;


/*
    ============================
       DICE SYMBOLS
    ============================
*/

// Unicode dice symbols
const diceFaces = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];


/*
    ============================
       ROLL DICE FUNCTION
    ============================
*/

function rollDice() {

    // Find the button
    const button =
        document.getElementById("rollButton");

    // Prevent another click
    button.disabled = true;


    // Find the dice elements
    const playerDice =
        document.getElementById("playerDice");

    const computerDice =
        document.getElementById("computerDice");


    // Add animation
    playerDice.classList.add("rolling");

    computerDice.classList.add("rolling");


    /*
        Generate random numbers.

        Math.random() gives a number
        between 0 and 1.

        Math.floor() converts it
        into an integer.

        + 1 makes the range:

        1 through 6
    */

    const playerRoll =
        Math.floor(Math.random() * 6) + 1;

    const computerRoll =
        Math.floor(Math.random() * 6) + 1;


    /*
        Print the rolls
        to the browser console.
    */

    console.log(
        "Player rolled:",
        playerRoll
    );

    console.log(
        "Computer rolled:",
        computerRoll
    );


    /*
        Print the round number.
    */

    console.log(
        "Round:",
        round + 1
    );


    /*
        Wait for the animation
        before displaying results.
    */

    setTimeout(function () {

        // Remove animation
        playerDice.classList.remove("rolling");

        computerDice.classList.remove("rolling");


        // Display dice
        playerDice.textContent =
            diceFaces[playerRoll - 1];

        computerDice.textContent =
            diceFaces[computerRoll - 1];


        // Increase round
        round++;


        /*
            Determine the winner.
        */

        if (playerRoll > computerRoll) {

            playerScore++;

            document.getElementById("result")
                .textContent =
                "🏆 You win this round!";

        }

        else if (computerRoll > playerRoll) {

            computerScore++;

            document.getElementById("result")
                .textContent =
                "🤖 Computer wins this round!";

        }

        else {

            document.getElementById("result")
                .textContent =
                "🤝 It's a tie!";

        }


        /*
            Update scores.
        */

        document.getElementById("playerScore")
            .textContent =
            playerScore;

        document.getElementById("computerScore")
            .textContent =
            computerScore;


        /*
            Add round to history.
        */

        addHistory(
            round,
            playerRoll,
            computerRoll
        );


        /*
            Print complete game
            information.
        */

        console.log(
            "Player Score:",
            playerScore
        );

        console.log(
            "Computer Score:",
            computerScore
        );

        console.log(
            "----------------------"
        );


        // Allow another roll
        button.disabled = false;

    }, 500);
}


/*
    ============================
       ADD HISTORY
    ============================
*/

function addHistory(
    roundNumber,
    playerRoll,
    computerRoll
) {

    // Create a new history row
    const row =
        document.createElement("div");

    // Give it a CSS class
    row.className = "history-row";


    // Determine winner
    let winner;


    if (playerRoll > computerRoll) {

        winner = "Player";

    }

    else if (computerRoll > playerRoll) {

        winner = "Computer";

    }

    else {

        winner = "Tie";

    }


    /*
        Put the information
        into the row.
    */

    row.innerHTML = `

        <div>
            ${roundNumber}
        </div>

        <div>
            🎲 ${playerRoll}
        </div>

        <div>
            🎲 ${computerRoll}
        </div>

        <div>
            ${winner}
        </div>

    `;


    /*
        Add row to history.
    */

    document
        .getElementById("historyList")
        .prepend(row);
}


/*
    ============================
       RESET GAME
    ============================
*/

function resetGame() {

    // Reset scores
    playerScore = 0;

    computerScore = 0;

    // Reset round
    round = 0;


    // Reset screen
    document.getElementById("playerScore")
        .textContent = "0";

    document.getElementById("computerScore")
        .textContent = "0";


    // Reset dice
    document.getElementById("playerDice")
        .textContent = "🎲";

    document.getElementById("computerDice")
        .textContent = "🎲";


    // Reset result
    document.getElementById("result")
        .textContent =
        "Click Roll Dice to start!";


    // Clear history
    document.getElementById("historyList")
        .innerHTML = "";


    // Print reset message
    console.log("Game reset.");
}

</script>

</body>
</html>
