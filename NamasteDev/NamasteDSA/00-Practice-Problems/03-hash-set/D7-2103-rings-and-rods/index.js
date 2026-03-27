/**
 * @param {string} rings
 * @return {number}
 */

// 2103-Rings-and-Rods
// https://leetcode.com/problems/rings-and-rods/

// intuition:
// we are given a string representing rings placed on rods
// every pair of characters represents:
// - color + rod number
// we need to find how many rods have all 3 colors: R, G, B
// since there are only 10 rods (0–9),
// we can track colors for each rod using a Set
// Set ensures:
// - unique colors only
// - easy size check

// approach:
// create an array of 10 sets (one for each rod)
// iterate through rings string in steps of 2:
// - color = rings[i]
// - rod = rings[i + 1]
// - add color to corresponding rod's set
// after processing:
// count how many rods have set size === 3
// return count

var countPoints = function (rings) {
  // create 10 sets
  // why 10? rods are labeled from 0 to 9
  // each index represents on rod
  //  we use set to store unique colors on that rod
  let rods = Array.from({ length: 10 }, () => new Set())
  // console.log(rod)

  // process input sting
  // every two character represents for 1 ring
  // i = color, i + 1 = rod
  // so we jump by 2 to process one ring at a time
  for (let i = 0; i < rings.length; i += 2) {
    let color = rings[i]
    let rod = Number(rings[i + 1])

    // adding this color to the corresponding rod
    // set ensures no duplicate colors stored
    rods[rod].add(color)
  }

  let count = 0
  // check each rod if they contains all color
  for (let i = 0; i < 10; i++) {
    // if a rod has all 3 colors, r, g, b... then size = 3
    if (rods[i].size === 3) {
      count++
    }
  }
  return count
}

// time complexity: O(n)
// space complexity: O(1), only 10 rods, constant space
