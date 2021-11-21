// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels2(str) {
    let counter = 0;
    const checker = ["a", "i", "u", "e", "o"];
    for(let val of str.toLowerCase()) {
        if(checker.includes(val)) {
            counter += 1;
        }
    }
    return counter;
}

function vowels(str) {
    const matches = str.match(/[aiueo]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;
