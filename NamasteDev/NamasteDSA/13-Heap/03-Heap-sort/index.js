let arr = [1, 4, 10, 5, 3, 6, 7, 9, 2]

function heapSort(arr) {
  let n = arr.length

  // create max heap
  // why? because when we create a max heap, the max element will always be at the beginning (root), which we can easily swap and place it to the end
  // we'll start from the last element
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n)
  }
  // console.log(arr);

  // sorting the array
  // we'll swap the first element (max element) with the last element, then reduce the heap size by 1 and heapify down from the root
  for (let i = n - 1; i > 0; i--) {
    // swap value at index 0 and last(i)
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    // calling the heapify down fn to maintain the max heap property
    heapifyDown(arr, 0, i)
  }
  return arr
}

// heapify down function to maintain the max heap property
function heapifyDown(arr, i, n) {
  // assuming largest to be i
  let largest = i

  let left = 2 * 1 + 1
  let right = 2 * i + 2

  // finding the largest among i, left, right
  if(left < n && arr[left] > arr[largest]){
    largest = left
  }

  if(right < n && arr[right] > arr[largest]){
    largest = right
  }

  // if largest is not i, we need to swap and continue heapifying down
  if(largest != i){
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapifyDown(arr, largest, n)
  }
}

const sortedArray = heapSort(arr)
console.log(sortedArray)