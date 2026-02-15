/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// approach: easy method
// sort both strings
// if both strings are equal, then they are anagram of each other
// else they are not anagram of each other

var isAnagram = function (s, t) {
  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')

  return sortedS === sortedT
};

// time complexity: O(n log n)
// space complexity: O(n)