/* =========================================================
   PROJECT 3
   LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
========================================================= */

function longestSubstring() {

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

    let set = new Set();

    let left = 0;
    let maxLength = 0;
    let longest = "";

    for (let right = 0; right < text.length; right++) {

        while (set.has(text[right])) {

            set.delete(text[left]);

            left++;
        }

        set.add(text[right]);

        if (right - left + 1 > maxLength) {

            maxLength = right - left + 1;

            longest = text.slice(left, right + 1);
        }
    }

    document.getElementById("output3").textContent =
        `Planet String:\n${text}\n\n` +
        `Longest unique substring:\n${longest}\n\n` +
        `Length: ${maxLength}`;
}
