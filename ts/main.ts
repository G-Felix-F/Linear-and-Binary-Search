import { linearSearch } from "./linearSearch";
import { binarySearch } from "./binarySearch";

let arrayLenght: number = 1000000;
let array = Array.from<number, number>({ length: arrayLenght }, (_, i) => i + 1);

console.warn('---------------------------------');

console.time('Linear Search Execution Time');
console.log(linearSearch(array, arrayLenght));
console.timeEnd('Linear Search Execution Time');

console.warn('---------------------------------');

console.time('Binary Search Execution Time');
console.log(binarySearch(array, arrayLenght));
console.timeEnd('Binary Search Execution Time');

console.warn('---------------------------------');