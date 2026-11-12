/* =========================================================
   PROJECT 5
   LONGEST PALINDROMIC SUBSTRING
========================================================= */

function longestPalindrome() {

    let earth = "racecar";
    let mars = "planet";
    let jupiter = "level";
    let saturn = "orbit";
    let uranus = "radar";
    let neptune = "space";
    let pluto = "noon";

    let text =
        earth +
        mars +
        jupiter +
        saturn +
        uranus +
        neptune +
        pluto;

    function expand(left, right) {

        while (
            left >= 0 &&
            right < text.length &&
            text[left] === text[right]
        ) {

            left--;
            right++;
        }

        return text.slice(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < text.length; i++) {

        let odd = expand(i, i);

        let even = expand(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    document.getElementById("output5").textContent =
        `Planet data:\n${text}\n\n` +
        `Longest palindrome:\n${longest}\n\n` +
        `Length: ${longest.length}`;
}
