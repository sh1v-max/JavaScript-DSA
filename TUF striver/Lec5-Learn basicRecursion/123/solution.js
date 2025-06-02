class Solution {
  isArmstrong(n) {
      const digits = n.toString().split('').map((n) => Number(n));
      // console.log(digits)
      const num = digits.length;
      const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, num), 0);
      return sum === n;
  }
}