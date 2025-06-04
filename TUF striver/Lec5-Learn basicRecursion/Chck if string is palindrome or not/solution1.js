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