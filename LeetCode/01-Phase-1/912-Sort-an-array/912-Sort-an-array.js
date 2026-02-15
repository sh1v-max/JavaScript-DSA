/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) {
      return nums
  }
  let m = Math.floor(nums.length / 2)
  let l = sortArray(nums.slice(0, m))
  let r = sortArray(nums.slice(m))
  return merge(l, r)
};

function merge(l, r) {
  let res = [], i = 0, j = 0
  while (i < l.length && j < r.length) {
      if (l[i] < r[j]) {
          res.push(l[i++])
      } else {
          res.push(r[j++])
      }
  }
  return [...res, ...l.slice(i), ...r.slice(j)]
}