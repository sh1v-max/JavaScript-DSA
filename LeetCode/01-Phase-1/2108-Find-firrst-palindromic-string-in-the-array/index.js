// 2108. Find first palindromic string in the array
//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

// given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string

//  intuition:
// we need the first string that reads the same forward and backward
// since order matters, we must check string one by one
// as soon as a palindromic string is found, we can return immediately

// approach: two pointer
// traverse the array words from left to right
// for each word, check if it is a palindrome using two pointers
// one from the start, one from the end
// if a palindrome is found, return that word
// else return an empty string

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let left = 0
    let right = word.length - 1
    let isPalindrome = true

    while (left < right) {
      if (word[left] !== word[right]) {
        isPalindrome = false
        break
      }
      left++
      right--
    }

    if (isPalindrome) return word
  }

  return ''
}

// time complexity: O(n * m)
// n is number of words, m is length of word
// space complexity: O(1)
