const {
    swap
} = require("../util");

function makePivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = makePivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

quickSort([4, 8, 7, 2, 5, 1, 6, 3, 9]);