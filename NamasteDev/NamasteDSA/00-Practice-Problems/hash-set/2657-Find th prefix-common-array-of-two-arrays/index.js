// 2657. Find the prefix common array of two arrays
// https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/

// you're given two 0-indexed integer permutations A and B of length n
// a prefix common array of a and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B

// return the prefix common array of A and B

// a sequence of numbers is called a permutation if it contains all the integers from 0 to n-1 exactly once

// Example 1:
// Input: A = [1,3,2,4], B = [3,1,2,4]
// Output: [0,2,3,4]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
// At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.

// Example 2:
// Input: A = [2,3,1], B = [3,1,2]
// Output: [0,1,3]
// Explanation: At i = 0: no number is common, so C[0] = 0.
// At i = 1: only 3 is common in A and B, so C[1] = 1.
// At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.

// - we need to build the prefix common array C
// - for each index i, we want to know how many numbers
//   have appeared at or before i in both arrays a and b
// - a number is considered common only if it exists in both prefixes

// intuition (hash-set):
// - to know whether a number is common, we must know:
//   - whether it has appeared in a so far
//   - whether it has appeared in b so far
// - hash sets allow us to track presence efficiently
// - as we move forward index by index, we update this information incrementally
// - whenever a number appears in both sets for the first time,
//   we increase the common count

// approach:
// - create two sets:
//   - setA to store numbers seen so far in array a
//   - setB to store numbers seen so far in array b
// - initialize a variable commonCount = 0
// - iterate through the arrays from left to right using a single loop
// - at each index i:
//   - add a[i] to setA
//   - if a[i] already exists in setB, increment commonCount
//   - add b[i] to setB
//   - if b[i] already exists in setA, increment commonCount
// - store commonCount in the result array at index i
// - return the result array after the loop finishes

var findThePrefixCommonArray = function (A, B) {
  // creating two sets to track numbers seen so far
  const setA = new Set()
  const setB = new Set()
  const res = []
  let count = 0

  for (let i = 0; i < A.length; i++) {
    // at each index i, we update the common count
    // adding element in A while checking if it's present in B, also increasing count if present
    setA.add(A[i])
    if (setB.has(A[i])) count++

    // same as above
    setB.add(B[i])
    if (setA.has(B[i])) count++

    // adding count to res
    res.push(count)
  }

  return res
}

// time complexity: O(n)
// space complexity: O(n)