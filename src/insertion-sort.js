function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > curr; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = curr;
    }
    return arr;
}

insertionSort([4, 8, 7, 2, 5, 1, 6, 3, 9]);