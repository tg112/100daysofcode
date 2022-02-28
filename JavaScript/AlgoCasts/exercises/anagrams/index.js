// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const countedA = counter(stringA);
    const countedB = counter(stringB);
    
    if(Object.keys(countedA).length !== Object.keys(countedB).length) return false;
    
    for(let key in countedA) {
        if(countedA[key] !== countedB[key]) {
            return false;
        }
    }
    return true;
}

const counter = (string) => {
    const countVals = {};
    for(let val of string.replace(/[^\w]/g).toLowerCase()) {
        countVals[val] = countVals[val] + 1 || 1;
    }
    return countVals;
};

// function anagrams(stringA, stringB) {
//   return helper(stringA) === helper(stringB);
// }

// const helper = (string) => {
//   return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

module.exports = anagrams;
