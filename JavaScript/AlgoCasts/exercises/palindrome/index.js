// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome3(str) {
    let arr = str.split("");
    let reverseStr = "";
    for (let val of arr) {
        reverseStr = val + reverseStr;
    }

    return str === reverseStr;
}

function palindrome2(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

function palindrome(str) {
    return str.split("").every((val, i) => {
        return val === str[str.length - i - 1];
    });
}

module.exports = palindrome;
