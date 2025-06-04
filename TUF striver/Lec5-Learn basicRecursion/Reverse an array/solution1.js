class Solution {
  reverse(arr, n) {
      return this.reverse_helper(arr, 0, n - 1);
  }

  reverse_helper(arr, start, end) {
      if (start > end) return arr;

      [arr[start], arr[end]] = [arr[end], arr[start]];
      this.reverse_helper(arr, start + 1, end - 1);
  }
}

// 1 2 3 4 5
// 2 3 4 => 4 3 2
// 1 5 => 5 1
// 5 4 3 2 1
