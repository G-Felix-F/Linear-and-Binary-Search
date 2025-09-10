export function linearSearch(array: number[], value: number): number {
    let operations: number = 0;
    for (let i = 0; i < array.length; i++) {
        operations++;
        if (array[i] === value) {
            console.log(`Linear Search total operations: ${operations}`);
            return i;
        }
    }
    console.log(`Binary Search total operations: ${operations}`);
    return -1;
}