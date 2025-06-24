# SEARCHING

### What is Searching?

It means **finding an element** in a collection of items (like an array or list).


### 1. **Linear Search** (Brute-force)

#### Idea:

Go through each element one by one and check if it’s equal to the target.

#### Intuition:

This is like looking through a stack of papers **one by one** until you find the name you’re searching for.

#### Code (JS):

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

#### ⏱Time Complexity:

* Worst: `O(n)`
* Best: `O(1)` (if the target is at the start)


### 2. **Binary Search** (Efficient – works only on sorted arrays)

#### Idea:

Divide the array in half each time:

* If middle element = target → Done
* If target < middle → Search left half
* If target > middle → Search right half

#### Intuition:

Like finding a word in a **dictionary** — you don’t read every word, you jump sections.

#### Code (JS):

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

#### Time Complexity:

* Worst: `O(log n)` ← super fast
* Best: `O(1)`


# SORTING

### What is Sorting?

It means arranging data in a specific order (like ascending or descending).


### 1. **Bubble Sort** (Basic one)

#### Idea:

Repeatedly swap adjacent elements if they’re in the wrong order.

#### Intuition:

Imagine **bubbling up the largest value** to the end in each pass.

#### Code:

```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

#### Time Complexity:

* Worst: `O(n²)`
* Best (already sorted): `O(n)` if optimized


### 2. **Selection Sort**

#### Idea:

Find the smallest element and put it at the beginning, then repeat.

#### Intuition:

Like **selecting the smallest shirt** from a pile and hanging it first.

#### Code:

```js
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
```

#### Time Complexity:

* Always: `O(n²)` (no optimization)


### 3. **Insertion Sort**

#### Idea:

Build the sorted array one element at a time by inserting items into the correct position.

#### Intuition:

Like **inserting playing cards** into your hand in sorted order.

#### Code:

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

#### Time Complexity:

* Worst: `O(n²)`
* Best (sorted input): `O(n)`


### 4. **Merge Sort** (Divide and Conquer)

#### Idea:

Split the array into halves, sort each half, then merge them.

#### Code (Short):

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let res = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) res.push(left[i++]);
    else res.push(right[j++]);
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}
```

#### Time Complexity:

* Always: `O(n log n)`


## Your Plan:

1. **Understand each algorithm's working principle**
2. **Implement them in JS**
3. **Know time complexity**
4. **Visualize with dry runs (paper or online tools)**
