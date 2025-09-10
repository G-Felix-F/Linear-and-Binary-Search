function linearSearch(array, value) {
    let operations = 0;
    for (let i = 0; i < array.length; i++) {
        operations++;
        if (array[i] === value) {
            console.log('Linear Search operations:', operations);
            return i;
        }
    }
    console.log('Linear Search operations:', operations);
    return -1;
}

module.exports = linearSearch;