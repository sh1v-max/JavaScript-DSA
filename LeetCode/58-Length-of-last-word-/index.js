/**
 * @param {string} s
 * @return {number}
 */

// Approach:
// remove extra space at the beginning and end of the string
// use split to get words, and use length to get the last word
// Return the length of the last word
 
var lengthOfLastWord = function (s) {
  s = s.trim() // remove extra space at the beginning and end of the string
  const words = s.split(' '); // array of words
  const lastWord = words[words.length - 1]; // get the last word
  return lastWord.length;
};

// time complexity: O(n)
// space complexity: O(1)