// 3090. Maximum Length Substring With Two Occurrences
// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/

// intuition (brute force):
// generate all possible substrings using 2 loops
// maintain a freq map, and check if every char appears at most 2 times
// if valid, update max length
// time complexity: O(n^3)
// 3090. Maximum Length Substring With Two Occurrences
// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/

// intuition (brute force):
// generate all possible substrings using 2 loops
// maintain a freq map, and check if every char appears at most 2 times
// if valid, update max length
// time complexity: O(n^3)

// intuition (sliding window):
// we need the longest valid substring
// we can use sliding window, we expand the window using a right pointer
// maintain a freq map of char inside the window
// if any char freq exceeds 2, the window become invalid
// then we shrink the window from left till it becomes valid again
// update and return max length

// approach:
// left = 0, maxLength = 0, freqMap = {}
// iterate right from 0 to n - 1
// increment freq of s[right]
// while freq of s[right] > 2
// decrement freq of s[left]
// left++
// update maxLength = max(maxLength, right - left + 1)
// return maxLength

var maximumLengthSubstring = function (s) {
  let left = 0
  let maxLen = 0
  let freq = {}

  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    // building freq map
    freq[char] = (freq[char] || 0) + 1

    // if more than 2 occurrences, shrink window
    // only checking freq(char) > 2 because
    // before adding s[right], the window was already valid
    // only the next added char can make it invalid
    // so we only need to fix that char freq
    while (freq[char] > 2) {
      freq[s[left]]--
      left++
    }

    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

// time complexity: O(n)
// each char is visited at most twice, once by right and once by left
// space complexity: O(1), max 26 keys, only lowercase chars

// intuition (sliding window):
// we need the longest valid substring
// we can use sliding window, we expand the window using a right pointer
// maintain a freq map of char inside the window
// if any char freq exceeds 2, the window become invalid
// then we shrink the window from left till it becomes valid again
// update and return max length

// approach:
// left = 0, maxLength = 0, freqMap = {}
// iterate right from 0 to n - 1
// increment freq of s[right]
// while freq of s[right] > 2
// decrement freq of s[left]
// left++
// update maxLength = max(maxLength, right - left + 1)
// return maxLength

var maximumLengthSubstring = function (s) {
  let left = 0
  let maxLength = 0
  let freq = {}

  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    // building freq map
    freq[char] = (freq[char] || 0) + 1

    // if more than 2 occurrences, shrink window
    // only checking freq(char) > 2 because
    // before adding s[right], the window was already valid
    // only the next added char can make it invalid
    // so we only need to fix that char freq
    while(freq[char] > 2){
      freq[s[left]]--
      left++
    }

    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

// time complexity: O(n)
// each char is visited at most twice, once by right and once by left
// space complexity: O(1), max 26 keys, only lowercase chars