// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize2(str) {
    let splited = str.split(" ");
    const capitalizedArr = splited.map(val => {
        return val.slice(0, 1).toUpperCase() + val.slice(1);
    });
    
    return capitalizedArr.join(" ");
}

function capitalize3(str) {
    const words = [];
    for (let val of str.split(" ")) {
        words.push(val[0].toUpperCase() + val.slice(1));
    }
    return words.join(" ")
}

function capitalize(str) {
    let result = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++) {
        if (str[i -1] === " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;
