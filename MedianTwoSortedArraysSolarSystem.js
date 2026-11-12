/* =========================================================
   PROJECT 4
   MEDIAN OF TWO SORTED ARRAYS
========================================================= */

function medianArrays() {

    let earth = 1;
    let mars = 3;
    let jupiter = 5;

    let saturn = 2;
    let uranus = 4;
    let neptune = 6;
    let pluto = 8;

    let array1 = [
        earth,
        mars,
        jupiter
    ];

    let array2 = [
        saturn,
        uranus,
        neptune,
        pluto
    ];

    let merged = [...array1, ...array2];

    merged.sort((a, b) => a - b);

    let middle = Math.floor(merged.length / 2);

    let median;

    if (merged.length % 2 === 0) {

        median =
            (merged[middle - 1] +
            merged[middle]) / 2;

    } else {

        median = merged[middle];
    }

    document.getElementById("output4").textContent =
        `Array 1: ${array1}\n` +
        `Array 2: ${array2}\n` +
        `Merged: ${merged}\n` +
        `Median: ${median}`;
}


