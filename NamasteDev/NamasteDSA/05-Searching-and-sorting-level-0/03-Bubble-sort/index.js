//  write a function to sort an array using bubble sort

let arr = [5, 4, 3, 2, 1]
  
function bubbleSort(arr){
  let n = arr.length;
  for(let i=0; i<n-1; i++) {
    let isSwapped = false;
    for(let j=0; j<n-1-i; j++) {
      if(arr[j]>arr[j+1]) {
        let temp=arr[j]
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        isSwapped=true;
      }
    }
    if(!isSwapped)
      break;
  }
  return arr;
}

console.log(bubbleSort(arr))

// Time Complexity: O(n^2)
// Space Complexity: 0(1)