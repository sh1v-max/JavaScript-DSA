## 🧠 What is the Two-Pointer Method?

It’s a strategy where you use **two variables ("pointers")** to traverse or process a data structure from **different directions** or **positions**, usually to improve efficiency over brute-force.


### 📌 Common Scenarios:

| Problem Type                   | Pointer Setup                        |
| ------------------------------ | ------------------------------------ |
| Searching for a pair / target  | One pointer at each end (start, end) |
| Merging / comparing two arrays | One pointer in each array            |
| Removing duplicates            | Slow and fast pointer                |
| Reversing an array or string   | One from start, one from end         |
| Trapping rain water, etc.      | Depends on the problem               |


### ✅ Example 1: Reverse an array using two pointers

```js
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // swap
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
```

🧠 Why two pointers?

* One moves from the start
* One moves from the end
* Swap until they meet — **efficient and clean**


### ✅ Example 2: Two Sum (sorted array)

Find two numbers that add up to a target:

```js
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }

  return []; // not found
}
```

🧠 This avoids nested loops (O(n²)) and works in O(n).


### ✅ Example 3: Remove Duplicates from Sorted Array

```js
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}
```

* `slow` tracks last unique
* `fast` explores ahead


### 🔑 Key Advantages:

* Reduces time complexity (usually from O(n²) to O(n))
* Simple logic, clean code
* Great for **sorted arrays**, **strings**, and **linked lists**

