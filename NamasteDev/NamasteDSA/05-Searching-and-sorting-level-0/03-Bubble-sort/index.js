//  write a function to sort an array using bubble sort

let arr = [5, 4, 3, 2, 1]
  
function bubbleSort(arr){
  // loop through the array n times
  // in each iteration, the largest number is bubbled to the end of the array
  let n = arr.length;
  for(let i=0; i<n-1; i++) {
    let swapped = false;
    // loop through the array and check if the current element is greater than the next element
    for(let j=0; j<n-1-i; j++) {
      // if the current element is greater than the next element, swap them
      if(arr[j]>arr[j+1]) {
        let temp=arr[j]
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        swapped=true;
      }
    }
    // if no swap is made in the inner loop, the array is already sorted
    if(!swapped)
      break;
  }
  return arr;
}

console.log(bubbleSort(arr))

// Time Complexity: O(n^2)
// worst time complexity to sort and array, so we don't use this methods to sort an array
// Space Complexity: 0(1)
// we are using swapped variable to optimize and check if the array is already sorted