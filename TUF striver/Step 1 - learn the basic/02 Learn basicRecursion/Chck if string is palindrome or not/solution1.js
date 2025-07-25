class Solution {
  palindromeCheck(s) {
      const check = (left, right) => {
          if (left >= right) return true;
          if (s[left] !== s[right]) return false;
          return check(left + 1, right - 1);
      };

      return check(0, s.length - 1);
  }
}

function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true; // done checking
  if (str[left] !== str[right]) return false; // mismatch
  return isPalindrome(str, left + 1, right - 1);
}


// madam