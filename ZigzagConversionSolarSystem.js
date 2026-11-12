/* =========================================================
   PROJECT 6
   ZIGZAG CONVERSION
========================================================= */

function zigzagConversion() {

    let earth = "Earth";
    let mars = "Mars";
    let jupiter = "Jupiter";
    let saturn = "Saturn";
    let uranus = "Uranus";
    let neptune = "Neptune";
    let pluto = "Pluto";

    let text =
        earth +
        mars +
        jupiter +
        saturn +
        uranus +
        neptune +
        pluto;

    let rows = 3;

    if (rows === 1) {

        document.getElementById("output6").textContent = text;

        return;
    }

    let array = Array.from(
        { length: rows },
        () => []
    );

    let row = 0;
    let direction = 1;

    for (let character of text) {

        array[row].push(character);

        if (row === 0) {

            direction = 1;

        } else if (row === rows - 1) {

            direction = -1;
        }

        row += direction;
    }

    let result = array
        .map(line => line.join(""))
        .join("");

    document.getElementById("output6").textContent =
        `Original:\n${text}\n\n` +
        `Rows: ${rows}\n\n` +
        `Zigzag result:\n${result}`;
}
