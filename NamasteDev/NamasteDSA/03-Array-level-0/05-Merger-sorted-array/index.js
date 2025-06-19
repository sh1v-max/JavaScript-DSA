// brute force
var merge = function(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
};

// time complexity: O((m + n)+ log(m + n))
// space complexity: O(1)

// two pointer method
var merge = function(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m)
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
      if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
          nums1[i] = nums1Copy[p1];
          p1++;
      } else {
          nums1[i] = nums2[p2];
          p2++;
      }
  }
};

// time complexity: O(m + n)
// space complexity: O(m)

// Optimal approach
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1--];
    } else {
      nums1[i] = nums2[p2--];
    }
  }
};

// time complexity: O(m + n)
// space complexity: O(1)