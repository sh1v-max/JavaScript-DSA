class Solution {
  isPalindrome(n) {
      // let rev = Number(String(n).split('').reverse().join(''))
      // if( rev == n) return true
      // else return false

      let original = n
      let rev = 0
      while (n > 0){
          let lsatD = n % 10

          rev = (rev * 10) + lsatD
          n = Math.floor(n/10)
      }
      return rev === original
  }
}