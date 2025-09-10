export function binarySearch(array: number[], value: number): number {
    let left: number = 0;
    let right: number = array.length - 1;
    let operations: number = 0;

    while (left <= right) {
        operations++;
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            console.log(`Binary Search total operations: ${operations}`);
            return mid;
        } else if (array[mid] != undefined && array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(`Binary Search total operations: ${operations}`);
    return -1;
}