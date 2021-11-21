// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar2(str) {
    let chars = {}
    let max = 0;
    let maxCharVal = "";
    for(let char of str) {
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        };
    };

    for (let char in chars) {
        if(chars[char] > max){
            max = chars[char];
            maxCharVal = char;
        }
    }
    return maxCharVal;
}

function maxChar(str) {
    let chars = {};
    let max = 0;
    let maxCharVal = "";
    for(let char of str) {
      chars[char] = chars[char] + 1 || 1;
    }

    for (let char in chars) {
        if(chars[char] > max){
            max = chars[char];
            maxCharVal = char;
        }
    }
    return maxCharVal;
}

module.exports = maxChar;
