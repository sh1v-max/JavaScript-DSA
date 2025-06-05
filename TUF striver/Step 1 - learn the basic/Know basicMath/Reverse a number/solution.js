class Solution {
  reverseNumber(n) {
      let rev = 0
      while (n > 0) {
          let lastD = n % 10;
          rev = (rev * 10) + lastD
          n = Math.floor(n / 10)
      }
      return rev
  }
}