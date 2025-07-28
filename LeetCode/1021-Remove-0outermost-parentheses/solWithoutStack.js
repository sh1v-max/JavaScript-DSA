/**
 * @param {string} s
 * @return {string}
 */

// approach: Splitting Primitive Parts using String
// we track primitive substrings by counting parentheses balance.
// whenever the balance goes back to 0, we know a primitive substring ended.
// for each primitive substring, we take it and remove its first and last character
// (these are the outermost parentheses).
// finally, we combine all modified primitive substrings into the result.

var removeOuterParentheses = function (s) {
  let res = "";
  let start = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
          balance++;
      } else {
          balance--;
      }

      // If balance = 0, we found a complete primitive substring
      if (balance === 0) {
          res += s.slice(start + 1, i);
          start = i + 1; // move start to next primitive
      }
  }

  return res;
};


// time complexity: O(n) - we traverse the string once
// space complexity: O(1)