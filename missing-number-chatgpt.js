const array = [1, 3, 6, 9, 7, 5, 2, 11, 14, 13];
const missing = [];
const sorted_array = array.sort((a, b) => a - b);
for (let i = 0; i < sorted_array.length - 1; i++) {
    if (sorted_array[i + 1] - sorted_array[i] !== 1) {
        const diff = sorted_array[i + 1] - sorted_array[i];
        console.log(diff)
        for (let j = 1; j < diff; j++) {
            missing.push(sorted_array[i] + j);
        }
    }
}
console.log(missing);
