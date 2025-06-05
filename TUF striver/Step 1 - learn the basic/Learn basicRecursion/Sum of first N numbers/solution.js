class Solution {
  NumbersSum(N) {
    if (N === 0) {
      return 0
    }
    return N + this.NumbersSum(N - 1)
  }
}
