// to find the number of split string that contains equal number of 'L' and 'R'
// leetcode question: 1221. Split a String in Balanced Strings
// balanced string: string that contains equal number of L and R
// return the number of split string that contains equal number of 'L' and 'R'

// approach: two loop, one for string, and one for count of L and R
// iterate through give string
// count L and R, and check if L and R are equal
// if equal, increment count, if not, reset R and L to 0
// return count

function balancedStringSplit(s) {
  let count = 0;
  let L = 0;
  let R = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      L++;
    } else {
      R++;
    }

    if (L === R) {
      count++;
      L = 0;
      R = 0;
    }
  }

  return count;
}

// better approach
// maintain a count and temp variable 
// increase temp by one when found L and decrease by one when found R
// if temp is zero, increment count, return count

function balancedStringSplit(s) {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      temp++
    } else {
      temp--
    }

    if (temp == 0) {
      count++;
    }
  }

  return count;
}

// time complexity: O(n)
// space complexity: O(1)

// note:
// if you get a question about balanced string, you can use this approach of using temp, increase and decreasing by 1