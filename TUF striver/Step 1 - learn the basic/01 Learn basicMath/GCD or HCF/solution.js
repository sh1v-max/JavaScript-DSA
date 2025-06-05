class Solution {
  GCD(a, b) {
      while (a > 0 && b > 0) {
          if (a > b) {
              a = a % b;
          }
          else {
              b = b % a;
          }
      }
      if (a === 0) {
          return b;
      }
      return a;
  }
}

// let n1 = 4
// let n2 = 6

// let sol = new Solution()

// let ans = sol.GCD(n1, n2)
// console.log(ans)