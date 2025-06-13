// Write a program to find the second largest number in the array

function secondLargest (arr) {
  let largest = -Infinity
  let secondLargest = -Infinity
  for (let i = 0; i  < arr.length; i++ ) {
    if(arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    }
    else if( a[i] > secondLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest
}

let arr = [2, -6, 4, 8, 1, -9]
let result = secondLargest(arr)
console.log("Result:", result)