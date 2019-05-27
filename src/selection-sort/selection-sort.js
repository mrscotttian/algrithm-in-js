const {
    swap
} = require('../util');

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (lowest !== i) swap(arr, lowest, i);
    }
    return arr;
}

selectionSort([4, 8, 7, 2, 5, 1, 6, 3, 9]);