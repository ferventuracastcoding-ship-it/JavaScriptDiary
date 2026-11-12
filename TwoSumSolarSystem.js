/* =========================================================
   PROJECT 1
   TWO SUM
========================================================= */

function twoSum() {

    let earth = 2;
    let mars = 7;
    let jupiter = 11;
    let saturn = 15;
    let uranus = 3;
    let neptune = 6;
    let pluto = 9;

    let planets = [
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto
    ];

    let target = 10;

    let map = new Map();

    for (let i = 0; i < planets.length; i++) {

        let needed = target - planets[i];

        if (map.has(needed)) {

            document.getElementById("output1").textContent =
                `Target: ${target}\n` +
                `Found: ${planets[map.get(needed)]} + ${planets[i]}\n` +
                `Indexes: ${map.get(needed)}, ${i}`;

            return;
        }

        map.set(planets[i], i);
    }
}
