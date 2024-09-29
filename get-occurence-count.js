//Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it's occurrence (count).
const array = [{ language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }];
const countObject = {};

for (let i = 0; i < array.length; i++) {
    const language = array[i].language;
    
    if (countObject[language]) {
        countObject[language]++;

    } else {
        countObject[language] = 1;
    }
}
console.log('countObject',countObject);
const countArray = Object.keys(countObject).map(language => ({ language, count: countObject[language] }));

console.log(countArray);