function swapCase(str) {
    return str.split('')
    .map(char => char === char.toLowerCase()? char.toUpperCase() : char.toLowerCase())
    .join('');
}
console.log(swapCase('The Big Black Brave Dog'));
console.log('GOOD MORNING AFRICA');
console.log('i need a Quiky')