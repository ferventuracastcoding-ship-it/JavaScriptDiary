/* =========================================================
   PROJECT 9
   PALINDROME NUMBER
========================================================= */

function palindromeNumber() {

    let earth = 121;
    let mars = 1221;
    let jupiter = 12321;
    let saturn = 12345;
    let uranus = 1331;
    let neptune = 4554;
    let pluto = 9876;

    let planets = {
        Earth: earth,
        Mars: mars,
        Jupiter: jupiter,
        Saturn: saturn,
        Uranus: uranus,
        Neptune: neptune,
        Pluto: pluto
    };

    let output = "";

    for (let planet in planets) {

        let number = planets[planet];

        let reversed =
            Number(
                String(number)
                    .split("")
                    .reverse()
                    .join("")
            );

        let palindrome =
            number === reversed;

        output +=
            `${planet}: ${number} → ` +
            `${palindrome ? "PALINDROME" : "NOT PALINDROME"}\n`;
    }

    document.getElementById("output9").textContent =
        output;
}
