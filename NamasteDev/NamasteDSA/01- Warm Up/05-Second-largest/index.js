// write a function that searches for an element in an array and returns its index
// if the element is not found, return -1

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5]
let result = searchElement(arr, 5)
// console.log(result)

// wrote a function that returns the number of negative numbers in an array

function countNegativeNumbers(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++
    }
  }
  // console.log(count)
  return count
}

let arr2 = [2, -6, 4, 8, 1, -9]
let result2 = countNegativeNumbers(arr2)
// console.log(result2)

// write a function that returns the largest number in an array

function findLargest(arr) {
  let largest = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest
}

let arr3 = [2, -6, 4, 8, 1, -9]
let result3 = findLargest(arr3)
// console.log(result3)


// write a function that returns the smallest number in an array

function findSmallest(arr) {
  let smallest = Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return smallest
}

let arr4 = [2, -6, 4, 8, 1, -9]
let result4 = findSmallest(arr4)
console.log(result4)
