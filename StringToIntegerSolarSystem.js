/* =========================================================
   PROJECT 8
   STRING TO INTEGER - ATOI
========================================================= */

function stringToInteger() {

    let earth = "42";
    let mars = "17";
    let jupiter = "100";
    let saturn = "256";
    let uranus = "512";
    let neptune = "1024";
    let pluto = "2048";

    let values = [
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto
    ];

    let converted = values.map(value => {

        return parseInt(value, 10);

    });

    document.getElementById("output8").textContent =
        `Strings:\n${values.join(", ")}\n\n` +
        `Integers:\n${converted.join(", ")}`;
}
