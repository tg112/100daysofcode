// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// First solution
function reverse(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

// solution 2
function reverse2(str) {
    return str.split("").reverse().join("");
}

// solution 3
function reverse3(str) {
    let reversed = "";
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
}

// solution 4
function reverse4(str) {
  return str.split("").reduce((reversed, character) =>character + reversed, "")
}

module.exports = reverse;
