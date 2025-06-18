// remove duplicates from sorted array
// leetcode question: 12. remove duplicates from sorted array
// sorted non-decreasing array - may contain duplicates
// sorted increasing array - do not contains duplicates

function revString(s) {
  let n = s.length
  for (let i = 0; i < n/2; i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
  return s
}

console.log(revString(["h","e","l","l","o"]))
