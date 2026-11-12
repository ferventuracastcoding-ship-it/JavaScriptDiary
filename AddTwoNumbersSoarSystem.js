/* =========================================================
   PROJECT 2
   ADD TWO NUMBERS
========================================================= */

function addTwoNumbers() {

    let earth = 2;
    let mars = 4;
    let jupiter = 3;

    let saturn = 5;
    let uranus = 6;
    let neptune = 4;
    let pluto = 2;

    let firstNumber =
        earth * 100 +
        mars * 10 +
        jupiter;

    let secondNumber =
        saturn * 100 +
        uranus * 10 +
        neptune;

    let result = firstNumber + secondNumber;

    document.getElementById("output2").textContent =
        `${firstNumber} + ${secondNumber} = ${result}\n` +
        `Pluto variable = ${pluto}`;
}
