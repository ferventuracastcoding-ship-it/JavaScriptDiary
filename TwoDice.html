<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Two Dice Conquest</title>

<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;

    font-family: Arial, sans-serif;

    background:
        radial-gradient(circle at center, #172554, #020617 70%);

    color: white;

    display: flex;
    justify-content: center;
    padding: 30px;
}

.game {
    width: 100%;
    max-width: 1100px;
}

header {
    text-align: center;
    margin-bottom: 25px;
}

h1 {
    color: #facc15;
    font-size: 3rem;

    text-shadow:
        0 0 20px rgba(250, 204, 21, 0.5);
}

.subtitle {
    color: #94a3b8;
}

/* SCOREBOARD */

.scoreboard {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.player-card {
    padding: 20px;

    background: rgba(15, 23, 42, 0.9);

    border: 2px solid #334155;

    border-radius: 15px;

    text-align: center;
}

.player-card h2 {
    margin: 0;
}

.player-score {
    font-size: 3rem;
    font-weight: bold;

    color: #facc15;
}

/* MAP */

.map {
    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    gap: 10px;

    margin: 25px 0;
}

.territory {
    min-height: 100px;

    border-radius: 12px;

    border: 2px solid #475569;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    background: #1e293b;

    transition: 0.2s;
}

.territory:hover {
    transform: scale(1.05);

    border-color: #facc15;
}

.territory-number {
    font-size: 1.5rem;
    font-weight: bold;
}

.owner {
    margin-top: 8px;

    font-size: 0.8rem;

    color: #94a3b8;
}

/* PLAYER TERRITORY */

.player-territory {
    background:
        linear-gradient(135deg, #064e3b, #065f46);

    border-color: #22c55e;
}

/* COMPUTER TERRITORY */

.computer-territory {
    background:
        linear-gradient(135deg, #7f1d1d, #991b1b);

    border-color: #ef4444;
}

/* DICE */

.battle {
    padding: 25px;

    background: rgba(2, 6, 23, 0.9);

    border-radius: 20px;

    border: 2px solid #334155;

    text-align: center;
}

.dice-container {
    display: flex;

    justify-content: center;

    gap: 30px;

    margin: 25px 0;
}

.dice {
    width: 100px;
    height: 100px;

    background: white;

    color: #111827;

    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 4rem;

    box-shadow:
        0 0 25px rgba(255,255,255,0.2);
}

.roll-animation {
    animation: rollDice 0.5s;
}

@keyframes rollDice {

    0% {
        transform: rotate(0deg) scale(1);
    }

    50% {
        transform: rotate(180deg) scale(1.2);
    }

    100% {
        transform: rotate(360deg) scale(1);
    }
}

/* BUTTON */

button {
    padding: 15px 30px;

    border: none;

    border-radius: 10px;

    background: #facc15;

    color: #111827;

    font-size: 1rem;

    font-weight: bold;

    cursor: pointer;

    margin: 5px;
}

button:hover {
    transform: scale(1.05);

    box-shadow:
        0 0 20px rgba(250,204,21,0.5);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#result {
    min-height: 30px;

    font-size: 1.4rem;

    font-weight: bold;

    color: #facc15;
}

/* LOG */

.log {
    margin-top: 25px;

    padding: 20px;

    background: #020617;

    border: 1px solid #334155;

    border-radius: 12px;

    height: 180px;

    overflow-y: auto;

    font-family: monospace;
}

.log-entry {
    padding: 6px;

    border-bottom: 1px solid #1e293b;
}

/* MOBILE */

@media (max-width: 700px) {

    h1 {
        font-size: 2rem;
    }

    .map {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .scoreboard {
        grid-template-columns: 1fr;
    }

    .dice {
        width: 80px;
        height: 80px;

        font-size: 3rem;
    }
}

</style>
</head>

<body>

<div class="game">

<header>

    <h1>⚔️ TWO DICE CONQUEST</h1>

    <p class="subtitle">
        Roll two dice. Capture territories. Conquer the map.
    </p>

</header>


<!-- SCOREBOARD -->

<section class="scoreboard">

    <div class="player-card">

        <h2>🟢 PLAYER</h2>

        <div
            id="playerScore"
            class="player-score">
            5
        </div>

        <p>Territories</p>

    </div>


    <div class="player-card">

        <h2>🔴 COMPUTER</h2>

        <div
            id="computerScore"
            class="player-score">
            5
        </div>

        <p>Territories</p>

    </div>

</section>


<!-- MAP -->

<div
    id="map"
    class="map">
</div>


<!-- BATTLE -->

<section class="battle">

    <h2>
        ⚔️ Battle
    </h2>

    <p>
        Roll two dice against the computer.
    </p>


    <div class="dice-container">

        <div
            id="playerDice1"
            class="dice">
            🎲
        </div>

        <div
            id="playerDice2"
            class="dice">
            🎲
        </div>

    </div>


    <div id="result">
        Choose a territory and roll!
    </div>


    <button
        id="rollButton"
        onclick="rollBattle()">

        🎲 ROLL TWO DICE

    </button>


    <button
        onclick="resetGame()">

        🔄 RESET CONQUEST

    </button>

</section>


<!-- BATTLE LOG -->

<div class="log">

    <h3>📜 Battle Log</h3>

    <div id="battleLog"></div>

</div>

</div>


<script>

/*
==================================================
TWO DICE CONQUEST
==================================================
*/


/*
    NUMBER OF TERRITORIES
*/

const TERRITORY_COUNT = 10;


/*
    GAME STATE
*/

let territories = [];

let playerScore = 5;

let computerScore = 5;

let turn = 0;


/*
==================================================
DICE
==================================================
*/

const diceFaces = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];


/*
==================================================
CREATE MAP
==================================================
*/

function createMap() {

    const map =
        document.getElementById("map");

    map.innerHTML = "";


    /*
        Create 10 territories.
    */

    for (
        let i = 0;
        i < TERRITORY_COUNT;
        i++
    ) {

        /*
            First five territories
            belong to player.

            Last five belong
            to computer.
        */

        let owner =
            i < 5
                ? "player"
                : "computer";


        territories.push(owner);


        /*
            Create territory element.
        */

        const territory =
            document.createElement("div");


        territory.className =
            "territory";


        /*
            Add owner class.
        */

        territory.classList.add(
            owner === "player"
                ? "player-territory"
                : "computer-territory"
        );


        /*
            Territory HTML.
        */

        territory.innerHTML = `

            <div class="territory-number">
                Territory ${i + 1}
            </div>

            <div class="owner">
                ${owner === "player"
                    ? "🟢 PLAYER"
                    : "🔴 COMPUTER"}
            </div>

        `;


        /*
            Add territory
            to the map.
        */

        map.appendChild(territory);
    }
}


/*
==================================================
ROLL ONE DIE
==================================================
*/

function rollDie() {

    return Math.floor(
        Math.random() * 6
    ) + 1;
}


/*
==================================================
ROLL BATTLE
==================================================
*/

function rollBattle() {

    /*
        Prevent rolling after
        the game is finished.
    */

    if (
        playerScore === TERRITORY_COUNT ||
        computerScore === TERRITORY_COUNT
    ) {

        return;
    }


    const button =
        document.getElementById(
            "rollButton"
        );


    button.disabled = true;


    /*
        Increment turn.
    */

    turn++;


    /*
        Roll player's two dice.
    */

    const playerDie1 =
        rollDie();

    const playerDie2 =
        rollDie();


    /*
        Roll computer's
        two dice.
    */

    const computerDie1 =
        rollDie();

    const computerDie2 =
        rollDie();


    /*
        Calculate totals.
    */

    const playerTotal =
        playerDie1 + playerDie2;

    const computerTotal =
        computerDie1 + computerDie2;


    /*
        Console output.
    */

    console.log(
        "=============================="
    );

    console.log(
        "TURN:",
        turn
    );

    console.log(
        "Player Dice:",
        playerDie1,
        playerDie2
    );

    console.log(
        "Player Total:",
        playerTotal
    );

    console.log(
        "Computer Dice:",
        computerDie1,
        computerDie2
    );

    console.log(
        "Computer Total:",
        computerTotal
    );


    /*
        Get dice elements.
    */

    const dice1 =
        document.getElementById(
            "playerDice1"
        );

    const dice2 =
        document.getElementById(
            "playerDice2"
        );


    /*
        Add animation.
    */

    dice1.classList.add(
        "roll-animation"
    );

    dice2.classList.add(
        "roll-animation"
    );


    /*
        Wait for animation.
    */

    setTimeout(() => {

        /*
            Remove animation.
        */

        dice1.classList.remove(
            "roll-animation"
        );

        dice2.classList.remove(
            "roll-animation"
        );


        /*
            Display player's dice.
        */

        dice1.textContent =
            diceFaces[playerDie1 - 1];

        dice2.textContent =
            diceFaces[playerDie2 - 1];


        /*
            Determine winner.
        */

        if (
            playerTotal >
            computerTotal
        ) {

            playerScore++;

            computerScore--;


            /*
                Capture a computer
                territory.
            */

            captureTerritory(
                "computer",
                "player"
            );


            document.getElementById(
                "result"
            ).textContent =
                `🏆 PLAYER WINS! ${playerTotal} vs ${computerTotal}`;

            
            addLog(
                `Turn ${turn}: Player wins ${playerTotal}-${computerTotal} and captures territory.`
            );

        }

        else if (
            computerTotal >
            playerTotal
        ) {

            computerScore++;

            playerScore--;


            /*
                Capture a player
                territory.
            */

            captureTerritory(
                "player",
                "computer"
            );


            document.getElementById(
                "result"
            ).textContent =
                `🤖 COMPUTER WINS! ${computerTotal} vs ${playerTotal}`;


            addLog(
                `Turn ${turn}: Computer wins ${computerTotal}-${playerTotal} and captures territory.`
            );

        }

        else {

            /*
                Tie means nobody
                captures territory.
            */

            document.getElementById(
                "result"
            ).textContent =
                `🤝 DRAW! Both rolled ${playerTotal}.`;


            addLog(
                `Turn ${turn}: Draw! Both sides rolled ${playerTotal}.`
            );
        }


        /*
            Update scoreboard.
        */

        updateScores();


        /*
            Print updated scores.
        */

        console.log(
            "Player Territories:",
            playerScore
        );

        console.log(
            "Computer Territories:",
            computerScore
        );


        /*
            Check victory.
        */

        checkVictory();


        /*
            Allow another roll.
        */

        button.disabled = false;

    }, 500);
}


/*
==================================================
CAPTURE TERRITORY
==================================================
*/

function captureTerritory(
    oldOwner,
    newOwner
) {

    /*
        Find territories
        belonging to old owner.
    */

    const available =
        territories
            .map((owner, index) => {

                return {
                    owner,
                    index
                };

            })
            .filter(
                item =>
                    item.owner === oldOwner
            );


    /*
        If no territory exists,
        stop.
    */

    if (
        available.length === 0
    ) {

        return;
    }


    /*
        Select random territory.
    */

    const selected =
        available[
            Math.floor(
                Math.random() *
                available.length
            )
        ];


    /*
        Change ownership.
    */

    territories[
        selected.index
    ] = newOwner;


    /*
        Redraw map.
    */

    renderMap();
}


/*
==================================================
RENDER MAP
==================================================
*/

function renderMap() {

    const map =
        document.getElementById("map");


    map.innerHTML = "";


    territories.forEach(
        (owner, index) => {

            const territory =
                document.createElement("div");


            territory.className =
                "territory";


            territory.classList.add(
                owner === "player"
                    ? "player-territory"
                    : "computer-territory"
            );


            territory.innerHTML = `

                <div class="territory-number">
                    Territory ${index + 1}
                </div>

                <div class="owner">
                    ${owner === "player"
                        ? "🟢 PLAYER"
                        : "🔴 COMPUTER"}
                </div>

            `;


            map.appendChild(
                territory
            );

        }
    );
}


/*
==================================================
UPDATE SCORES
==================================================
*/

function updateScores() {

    document.getElementById(
        "playerScore"
    ).textContent =
        playerScore;


    document.getElementById(
        "computerScore"
    ).textContent =
        computerScore;
}


/*
==================================================
BATTLE LOG
==================================================
*/

function addLog(message) {

    const log =
        document.getElementById(
            "battleLog"
        );


    const entry =
        document.createElement(
            "div"
        );


    entry.className =
        "log-entry";


    entry.textContent =
        message;


    log.prepend(entry);
}


/*
==================================================
CHECK VICTORY
==================================================
*/

function checkVictory() {

    if (
        playerScore >=
        TERRITORY_COUNT
    ) {

        document.getElementById(
            "result"
        ).textContent =
            "👑 PLAYER CONQUERS THE MAP!";


        addLog(
            "🏆 PLAYER HAS CONQUERED ALL TERRITORIES!"
        );

    }


    else if (
        computerScore >=
        TERRITORY_COUNT
    ) {

        document.getElementById(
            "result"
        ).textContent =
            "🤖 COMPUTER CONQUERS THE MAP!";


        addLog(
            "💀 COMPUTER HAS CONQUERED ALL TERRITORIES!"
        );
    }
}


/*
==================================================
RESET GAME
==================================================
*/

function resetGame() {

    /*
        Reset scores.
    */

    playerScore = 5;

    computerScore = 5;


    /*
        Reset turn.
    */

    turn = 0;


    /*
        Reset territories.
    */

    territories = [];


    /*
        Create original map.
    */

    createMap();


    /*
        Update scoreboard.
    */

    updateScores();


    /*
        Reset dice.
    */

    document.getElementById(
        "playerDice1"
    ).textContent = "🎲";


    document.getElementById(
        "playerDice2"
    ).textContent = "🎲";


    /*
        Reset result.
    */

    document.getElementById(
        "result"
    ).textContent =
        "Choose a territory and roll!";


    /*
        Clear log.
    */

    document.getElementById(
        "battleLog"
    ).innerHTML = "";


    /*
        Console message.
    */

    console.log(
        "Two Dice Conquest has been reset."
    );
}


/*
==================================================
START GAME
==================================================
*/

createMap();

updateScores();

console.log(
    "🎲 TWO DICE CONQUEST STARTED"
);

console.log(
    "Player territories:",
    playerScore
);

console.log(
    "Computer territories:",
    computerScore
);

</script>

</body>
</html>
