/* =========================================================
   PROJECT 7
   REVERSE INTEGER
========================================================= */

function reverseInteger() {

    let earth = 12;
    let mars = 34;
    let jupiter = 56;
    let saturn = 78;
    let uranus = 90;
    let neptune = 123;
    let pluto = 456;

    let numbers = [
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto
    ];

    let reversed = numbers.map(number => {

        return Number(
            String(number)
                .split("")
                .reverse()
                .join("")
        );

    });

    document.getElementById("output7").textContent =
        `Original:\n${numbers.join(", ")}\n\n` +
        `Reversed:\n${reversed.join(", ")}`;
}
