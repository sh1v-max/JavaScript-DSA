/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// another approach: using one map
// Create one map, map
// map will store the frequency of each character in s
// Iterate through s and update the frequency of each character in map
// Then iterate through t and check if the frequency of each character is equal in map
// If all the characters have equal frequency in both strings, then they are anagram of each other
// else they are not anagram of each other

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
          map[s[i]] = 1;
      } else {
          ++map[s[i]];
      }
  }
  for (let i = 0; i < t.length; i++) {
      if (!map[t[i]] || map[t[i]] === 0) {
          return false;
      } else {
          --map[t[i]];
      }
  }
  return true;
};

// time complexity: O(n)
// space complexity: O(1)