/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// approach 2: using 2 map
// Create two maps, map1 and map2
// map1 and map2 will store the frequency of each character in s and t respectively
// Iterate through s and t and update the frequency of each character in map1 and map2
// Then iterate through map1 and check if the frequency of each character is equal in map2
// If all the characters have equal frequency in both strings, then they are anagram of each other
// else they are not anagram of each other

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s.length; i++) {
      if (!map1[s[i]]) {
          map1[s[i]] = 1;
      } else {
          ++map1[s[i]];
      }
      if (!map2[t[i]]) {
          map2[t[i]] = 1;
      } else {
          ++map2[t[i]];
      }
  }
  for (let i in map1) {
      if (map1[i] !== map2[i]) return false;
  }
  return true;
};

// time complexity: O(n)
// space complexity: O(1)