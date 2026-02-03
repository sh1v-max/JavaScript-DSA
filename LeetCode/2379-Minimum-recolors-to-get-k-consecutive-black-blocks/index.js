// 2379. Minimum Recolors to Get K Consecutive Black Blocks
// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

// intuition:
// we want k consecutive black blocks
// for any substring of len k, the number of recolors needed to make it all black is equal to the number of white blocks in that substring
// so the task is to find a window of size k with the min number of white blacks
// we can use sliding window approach to solve this problem

// approach (Fixed-size Sliding Window):
// count the number of 'W' in the first window of size k
// store this as the initial minimum
// slide the window one step at a time:
// - if a 'W' leaves the window, decrement count
// - if a 'W' enters the window, increment count
// - update the minimum
// return the minimum count

var minimumRecolors = function(blocks, k){
  let whiteCount = 0

  // count w in the first window
  for(let i = 0; i< k; i++){
    if(blocks[i] === "W"){
      whiteCount++
    }
  }

  let minRecolors = whiteCount

  // slide window
  for(let i = k; i < blocks.length; i++){
    // remove leftmost elem
    if(blocks[i - k] === "W"){
      // if the leftmost elem is w, we are removing a w from the window, so we decrement the count
      whiteCount--
    }

    // add rightmost elem
    if(blocks[i] === "W"){
      // same reason as above
      whiteCount++
    }

    minRecolors = Math.min(minRecolors, whiteCount)
  }
  
  return minRecolors
}

// time complexity: O(n)
// space complexity: O(1)