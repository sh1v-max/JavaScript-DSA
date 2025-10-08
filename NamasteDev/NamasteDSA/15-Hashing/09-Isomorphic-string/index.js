// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/

// two string s and t are isomorphic if the characters in s can be replaced to get t
// all occurrences of a character must be replaced with another character while preserving the order of characters


// intuition:
// two strings are isomorphic if they contain the same characters in the same order
// - idea: use a hash (object) to count the frequency of each character in the first string
// - then iterate over the second string and decrement the counts
// - if a character in the second string either doesn't exist in the map or has count 0, not isomorphic
// - if we successfully decrement all characters, strings are isomorphic

// approach:
// use two maps to store the frequency of characters in s and t
// iterate through s and t and update the frequency of each character in map1 and map2 
// if the mapping exists but doesn't match the current char, return true
// else return true

function isIsomorphic(s, t) {
  let map1 = {}; // s - t mapping
  let map2 = {}; // t - s mapping

  for (let i = 0; i < s.length; i++) {
    // if there's no mapping yet
      if (!map1[s[i]] && !map2[t[i]]) {
          map1[s[i]] = t[i];``
          map2[t[i]] = s[i];
      } 
      // if there's a mapping but doesn't match
      else if (map2[t[i]] !== s[i] || map1[s[i]] !== t[i]) {
          return false;
      }
  }

  return true;
}

// time complexity: O(n)
// space complexity: O(n)