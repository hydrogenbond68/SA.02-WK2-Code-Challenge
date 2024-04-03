function generateRange(start, end) {
    let range = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            range.push(i);
        }
    } else {
        range.push(start);
    }
    return range;
}

console.log(generateRange(4, 7)); // [4, 5, 6, 7]
console.log(generateRange(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]