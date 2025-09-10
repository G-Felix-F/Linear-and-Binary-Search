const linearSearch = require('./linearSearch.js');
const binarySearch = require('./binarySearch.js');

let arrayLenght = 1000000;
let array = Array.from({ length: arrayLenght }, (_, i) => i + 1);

console.warn('---------------------------------');

console.time('Linear Search Execution Time');
console.log(linearSearch(array, arrayLenght));
console.timeEnd('Linear Search Execution Time');

console.warn('---------------------------------');

console.time('Binary Search Execution Time');
console.log(binarySearch(array, arrayLenght));
console.timeEnd('Binary Search Execution Time');

console.warn('---------------------------------');