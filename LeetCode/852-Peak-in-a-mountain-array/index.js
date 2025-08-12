// leetcode problem: 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// Function to find the peak index in a mountain array
// using binary search

// intuition:
// either the mid is smaller than its next element
// or the mid is greater than its next element
// in later case, mid can be the peak or the peak is on left side of mid

// approach:
// let l = 0, r = arr.length - 1;
// we will run while loop until l < r, will stop when l == r
// if arr[mid] < arr[mid + 1] then l = mid + 1
// else r = mid
// finally return l, which is the peak index

function peakIndexInMountainArray(arr) {
    let l = 0 
    let r = arr.length - 1

    while (l < r) {
        let m = l + Math.floor((r - l) / 2)
        
        if (arr[m] < arr[m + 1]) {
            l = m + 1 // peak is on the right side
        } else {
            r = m // peak is on the left side or mid is the peak
        }
    }

    return l
}

// time complexity: O(log n)
// space complexity: O(1)