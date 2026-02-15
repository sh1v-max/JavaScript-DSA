// 1652. Defuse the Bomb
// https://leetcode.com/problems/defuse-the-bomb/


// each element in the array must be replaced
//  array is circular, check corner cases
// we will replace based on these conditions
// if k > 0, with sum of the next k elements
// if k < 0, with sum of the prev k elements
// if k == 0, all with zeros
// for each index, we nee the sum of a fixe window of sike k
// instead of finding the sum all the time
// we will use sliding window

// approach (sliding window):
// if k == 0, return an array filled with 0
// initialize a result array of size n
// determine the direction of summation:
//    - if k > 0, sum the next k elements
//    - if k < 0, sum the previous k elements
// compute the initial window sum for index 0
// slide the window across the array:
//    - remove the element leaving the window
//    - add the element entering the window (using modulo for wrap-around)
// store the window sum for each index
// return the result array

var decrypt = function (code, k) {
    let n = code.length
    let res = new Array(n).fill(0)

    if (k === 0) {
        return res
    }

    let sum = 0
    let start, end

    if (k > 0) {
        // sum of next k elements
        start = 1
        end = k
    } else {
        // sum of prev k elements
        start = n + k
        end = n - 1
        k = -k
    }

    // checking window sum
    for (let i = start; i <= end; i++) {
        sum += code[i % n]
    }

    // sliding window
    for (let i = 0; i < n; i++) {
        res[i] = sum;
        sum -= code[(start + i) % n];
        sum += code[(end + i + 1) % n];
    }

    return res;
};

// time complexity: O(n)
// - each element is added and removed from the sliding window once

// space complexity: O(n)
// - output array of size n