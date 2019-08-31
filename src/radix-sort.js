function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(nums) {
    let res = digitCount(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        let count = digitCount(nums[i]);
        if (res < count) {
            res = count;
        }
    }
    return res;
}

function radixSort(nums) {
    let maxDigitCount = mostDigit(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({
            length: 10
        }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([4343, 81123, 7545, 23, 56, 13, 634, 335, 9]);