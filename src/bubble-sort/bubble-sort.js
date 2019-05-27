const {
    swap
} = require("../util");

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    return arr;
}

bubbleSort([4, 8, 7, 2, 5, 1, 6, 3, 9]);