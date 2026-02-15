// 455. Assign Cookies
// https://leetcode.com/problems/assign-cookies/

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:
// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

// Example 2:
// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
// You need to output 2.

// greedy
// intuition:
// each child has a greed factor — the minimum cookie size they need
// each cookie has a size — and each child can get at most one
// to maximize the number of satisfied children, you should always try to
// give the *smallest possible cookie* that can satisfy a child
// if you waste a large cookie on a child with small greed,
// you might lose the ability to satisfy a child with higher greed later
//
// sorting both arrays helps because:
// - the smallest greed child should try with the smallest cookie
// - if that cookie is too small, there's no point giving it to any other child
// - if it satisfies, move both pointers
// the greedy pairing ensures minimal waste and maximum total satisfaction
// this works because the problem doesn’t require perfectly matching sizes,
// only s[j] >= g[i], so a sorted two-pointer approach is optimal

// approach:
// sort g (children’s greed) in ascending order
// sort s (cookie sizes) in ascending order
// use two pointers:
//   i → index for children (who we’re trying to satisfy)
//   j → index for cookies (smallest available cookie)
// while both pointers are within range:
//   - if cookie s[j] satisfies child g[i]:
//         increment i (child satisfied)
//         increment j (cookie used)
//   - else:
//         increment j (try next bigger cookie)
// when loop ends, i = total satisfied children
// return i

var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b)
  g.sort((a, b) => a - b)

  let i = 0
  let j = 0

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      ++i
      ++j
    } else {
      ++j
    }
  }
  return i
}

// time: O(n log n + m log m) due to sorting
// space: O(1)