# 🧮 Learn Basic Hashing in JavaScript (For DSA)


## 📌 What is Hashing?

**Hashing** is a technique used to **map data to a fixed-size value (hash code)**, typically using a **hash function**. It helps in **efficient storage, lookup, and retrieval** — especially in scenarios where time complexity matters.

In DSA, hashing is commonly used in:

* Lookup operations
* Counting elements
* Detecting duplicates
* Caching
* Implementing sets and maps


## 🔑 Key Concepts

| Term              | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| **Hash Function** | Converts input (key) into a hash (index)                           |
| **Hash Table**    | A data structure that stores key-value pairs using a hash function |
| **Collision**     | When two keys hash to the same index                               |
| **Load Factor**   | Ratio of number of entries to size of table                        |


## 📦 Built-in Hashing Tools in JavaScript

JavaScript provides built-in **hash-like data structures**:

* `Object` – simple key-value pairs (non-ordered)
* `Map` – ordered key-value pairs with any type of key
* `Set` – unique values only

These act like hash tables internally.


## 🧠 Why Use Hashing?

### Time Complexities (on average):

| Operation | Array | Hashing (`Map`/`Set`) |
| --------- | ----- | --------------------- |
| Insert    | O(n)  | **O(1)**              |
| Search    | O(n)  | **O(1)**              |
| Delete    | O(n)  | **O(1)**              |


## 🧪 Real World Analogy

Imagine a library:

* Books are stored based on their **ISBN number**.
* Instead of searching every shelf, you use a **catalog system** (hash table) to jump directly to the right shelf.


## 📘 Examples (with Code)


### ✅ 1. Frequency Count of Characters in a String

```js
function charFrequency(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

console.log(charFrequency("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }
```


### ✅ 2. Count Frequency of Elements in an Array

```js
function elementFrequency(arr) {
  const freq = new Map();

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return freq;
}
```


### ✅ 3. Find First Repeating Element

```js
function firstRepeating(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return -1;
}
```


### ✅ 4. Check if Two Strings are Anagrams

```js
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}
```


### ✅ 5. Remove Duplicates from Array

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// Output: [1, 2, 3, 4]
```


### ✅ 6. Longest Substring Without Repeating Characters

```js
function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0, maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
```


## ⚠️ Handling Collisions (Advanced Hashing)

While JS abstracts this away, in theory collisions are handled via:

* **Chaining** (linked list at each index)
* **Open addressing** (probe to next available index)


## 🧪 Hash Table vs Object vs Map

| Feature     | `Object`        | `Map`                           |
| ----------- | --------------- | ------------------------------- |
| Key types   | String / Symbol | Any type                        |
| Order       | Unordered       | Insertion-ordered               |
| Performance | Slightly slower | Optimized for hashing           |
| Useful for  | Simple lookups  | Frequent insertions & deletions |


## 🎯 Practice Problems

| Problem                         | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| 🔹 Two Sum                      | Find 2 indices such that their sum equals target |
| 🔹 Group Anagrams               | Group anagram strings using hash map             |
| 🔹 Longest Consecutive Sequence | Use Set for O(n) solution                        |
| 🔹 Subarray Sum Equals K        | Prefix sum + hash map                            |
| 🔹 Top K Frequent Elements      | Use hash map with sorting/heap                   |


## 📌 Summary

* **Hashing** is one of the most powerful tools in DSA.
* JavaScript gives you built-in tools like `Map`, `Set`, and `Object` for this.
* Aim for **O(1)** operations where possible.
* Know when to prefer `Map` over `Object` and `Set` over `Array`.

