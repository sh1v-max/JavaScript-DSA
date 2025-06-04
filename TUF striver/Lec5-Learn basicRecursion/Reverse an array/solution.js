class Solution {
  reverse(arr, n) {
      let ans = new Array(n);

      for (let i = n - 1; i >= 0; i--) {
          ans[n - i - 1] = arr[i];
      }

      for (let i = 0; i < n; i++) {
          arr[i] = ans[i];
      }

      return;
  }
}
