// Dungeon dimensions
const WIDTH = 30;
const HEIGHT = 20;

// Create a wall-filled grid
const dungeon = Array.from(
    { length: HEIGHT },
    () => Array(WIDTH).fill("#")
);

// Create a random room
function createRoom(x, y, width, height) {

    for (let row = y; row < y + height; row++) {

        for (let col = x; col < x + width; col++) {

            if (
                row > 0 &&
                row < HEIGHT - 1 &&
                col > 0 &&
                col < WIDTH - 1
            ) {
                dungeon[row][col] = ".";
            }
        }
    }
}

// Create several rooms
for (let i = 0; i < 8; i++) {

    const x = Math.floor(Math.random() * 20) + 2;
    const y = Math.floor(Math.random() * 12) + 2;

    const width = Math.floor(Math.random() * 5) + 4;
    const height = Math.floor(Math.random() * 4) + 3;

    createRoom(x, y, width, height);
}

// Print dungeon
function printDungeon() {

    console.clear();

    dungeon.forEach(row => {
        console.log(row.join(""));
    });
}

printDungeon();
