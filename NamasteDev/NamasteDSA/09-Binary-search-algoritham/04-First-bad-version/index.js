// This problem finds the first bad version in a sequence of versions from 1 to n. We have an API isBadVersion(version) that returns whether a version is bad. We use binary search to pinpoint the first bad version.

// approach: binary search
// use pointer l = 1, r = n
// while l <= r
// find m = l + (r - l) / 2
// if m is bad, r = m - 1
// else, l = m + 1
// return l

var isBadVersion = function(isBadVersion) {
  return function (n) {
    let l = 1
    let r = n
    while (l < r) {
      let m = l + Math.floor((r - l) /2)
      if(isBadVersion(m)){
        // will do r = m
        r = m
      }
      else { 
        l = m + 1
      }
    }
    // always shifting r to the bad one, so r will be the ans
    return r
  }
}

// time complexity: O(log n)
// space complexity: O(1)