function removeDuplicates() {

    let earth = 1;
    let mars = 1;
    let jupiter = 2;
    let saturn = 2;
    let uranus = 3;
    let neptune = 3;
    let pluto = 4;

    let nums = [
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto
    ];

    let unique = [];

    for (let number of nums) {

        if (
            unique.length === 0 ||
            unique[unique.length - 1] !== number
        ) {
            unique.push(number);
        }
    }

    return unique;
}

console.log(
    "2. Remove Duplicates:",
    removeDuplicates()
);
