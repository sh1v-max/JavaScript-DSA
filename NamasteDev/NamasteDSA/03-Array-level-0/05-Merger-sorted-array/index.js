// brute force
var merge = function(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
};

// time complexity: O((m + n)+ log(m + n))
// space complexity: O(1)