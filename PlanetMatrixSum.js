// ============================================================
// PROJECT 2: PLANET MATRIX SUM
// Add every value in a 2D array
// ============================================================

function planetMatrixSum() {

    let earth = 10;
    let mars = 20;
    let jupiter = 30;
    let saturn = 40;
    let uranus = 50;
    let neptune = 60;
    let pluto = 70;

    let matrix = [
        [earth, mars, jupiter],
        [saturn, uranus, neptune],
        [pluto, 80, 90]
    ];

    let total = 0;

    for (let row = 0; row < matrix.length; row++) {

        for (
            let column = 0;
            column < matrix[row].length;
            column++
        ) {

            total += matrix[row][column];
        }
    }

    console.log("PROJECT 2: MATRIX SUM");

    console.log("Matrix:", matrix);

    console.log("Total:", total);

    return total;
}

planetMatrixSum();

