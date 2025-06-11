function lengthOfLongestSubstring(s) {
  // Your implementation
  let left = 0;
  let maxLength = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
          charSet.delete(s[left]);
          left++;
      }

      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
  }
  console.log(maxLength)
  return maxLength;
}

//For the purpose of user debugging.
lengthOfLongestSubstring("abcabcbb");

module.exports = lengthOfLongestSubstring
