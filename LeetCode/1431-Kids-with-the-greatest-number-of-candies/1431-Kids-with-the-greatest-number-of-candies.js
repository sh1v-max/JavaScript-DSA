/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = candies.map(candy => {
      const res = (candy + extraCandies) >= max
      return res
  });
  return result
};