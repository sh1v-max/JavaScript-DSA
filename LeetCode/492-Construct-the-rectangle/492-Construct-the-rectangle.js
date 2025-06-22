// Approach:
// Start from √area, go down till you find a number that divides area. That’s your width.
// Length = area / width. Return [length, width].

// Intuition:
// Closer L and W → smaller difference → more optimal.

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area));
  for (let i = w; i >= 1; i--) {
      if (area % i === 0) {
          const l = area / i;
          const res = [l, i];
          return res;
      }
  }
};

console.log(constructRectangle(4));

// time complexity:  O(√n)
// space complexity: O(1)