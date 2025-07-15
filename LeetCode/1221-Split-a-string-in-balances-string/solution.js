/**
 * @param {string} s
 * @return {number}
 */

// approach: two loop, one for string, and one for count of L and R
// iterate through give string
// count L and R, and check if L and R are equal
// if equal, increment count, if not, reset R and L to 0
// return count

// better approach
// maintain a count and temp variable 
// increase temp by one when found L and decrease by one when found R
// if temp is zero, increment count, return count
 
var balancedStringSplit = function (s) {
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
};