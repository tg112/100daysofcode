// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt(Math.abs(n).toString().split("").reverse().join("")) * Math.sign(n);
}

function reverseInt2(n) {
    let reverseInt = Math.abs(n).toString().split("").reverse().join("");
    if(n < 0) {
        return -parseInt(reverseInt);
    }
    return parseInt(reverseInt)
}

module.exports = reverseInt;
