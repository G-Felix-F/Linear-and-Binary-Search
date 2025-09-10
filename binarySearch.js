function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    let operations = 0;

    while (left <= right) {
        operations++;
        mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            console.log('Binary Search operations:', operations);
            return mid;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log('Binary Search operations:', operations);
    return -1;
}

module.exports = binarySearch;