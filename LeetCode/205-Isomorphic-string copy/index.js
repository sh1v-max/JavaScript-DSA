// two string s and t are isomorphic if the characters in s can be replaced to get t
// all occurrences of a character must be replaced with another character while preserving the order of characters

// approach:
// use two maps to store the frequency of characters in s and t
// iterate through s and t and update the frequency of each character in map1 and map2 
// if the mapping exists but doesn't match the current char, return true
// else return true\

function isIsomorphic(s, t) {
  let map1 = {};
  let map2 = {};

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