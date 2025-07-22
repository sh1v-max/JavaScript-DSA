/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// approach 1: sorted key
// Create a hashmap to group anagrams
// For each word in the input list:
// Sort the letters in the word in alphabetical order
// Use the sorted letters as a key in the hashmap
// Add the original word to the list of values at that key
// Return all the lists of anagrams from the hashmap
 
var groupAnagrams = function (strs) {
  const res = {};

  for (let i = 0; i < strs.length; i++) {
      const sortedWord = strs[i].split('').sort().join('');
      // if it's not in map, create a new key
      if (!res[sortedWord]) {
          res[sortedWord] = [strs[i]];
      } else
      // if it's in map, add word to that key
      {
          res[sortedWord].push(strs[i]);
      }
  }

  return [...Object.values(res)];
};

// time complexity: O(n * m log m)
// where n is the number of words in the input list and m is the length of the longest word
// it take m log n time to sort the word
// space complexity: O(n m)