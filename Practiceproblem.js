// Function to check citizenship eligibility
function getCitizenship(age, yearsResident, hasGreenCard, passedTest) {
    // Check whether all requirements are satisfied
    if (
        age >= 18 &&
        yearsResident >= 5 &&
        hasGreenCard === true &&
        passedTest === true
    ) {
        return "Eligible for citizenship";
    }

    // If one or more requirements are not satisfied
    return "Not currently eligible";
}

// Example
console.log(
    getCitizenship(25, 6, true, true)
);

// Output:
// Eligible for citizenship
