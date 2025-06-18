// remove duplicates from sorted array
// leetcode question: 12. remove duplicates from sorted array
// sorted non-decreasing array - may contain duplicates
// sorted increasing array - do not contains duplicates

function removeElement(nums, val) {
  let k = 0
  for ( let i = 0; i < nums.length; i++){
      if (nums[i] != val){
          nums[k] = nums[i]
          k++
      }
  }
  // console.log(nums)
  return k
};

console.log(removeElement([0,0,1,1,1,2,2,3,3,4], 1))