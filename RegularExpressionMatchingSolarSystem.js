/* =========================================================
   PROJECT 10
   REGULAR EXPRESSION MATCHING
========================================================= */

function regexMatching() {

    let earth = "Earth";
    let mars = "Mars";
    let jupiter = "Jupiter";
    let saturn = "Saturn";
    let uranus = "Uranus";
    let neptune = "Neptune";
    let pluto = "Pluto";

    let planets = [
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto
    ];

    let pattern = /^M.*$/;

    let results = planets.map(planet => {

        return `${planet}: ${pattern.test(planet)}`;

    });

    document.getElementById("output10").textContent =
        `Regular Expression: /^M.*$/\n\n` +
        results.join("\n");
}
