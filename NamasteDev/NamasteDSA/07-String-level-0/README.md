## 📘 DSA: **Strings — Complete Technical Guide**

### 1. What is a String?

A string is a **sequence of characters**, typically stored as a contiguous block of memory.

Example:

```js
let s = "hello";  
// Internally: ['h', 'e', 'l', 'l', 'o']
```

Each character is indexed starting from 0, and in JavaScript, strings are **immutable**, meaning you cannot change individual characters directly.

### 2. String Internals in JavaScript

* Type: **Primitive**
* Mutability: **Immutable**
* Access: Zero-based indexing → `str[0]`, `str.charAt(i)`
* Storage: UTF-16 encoding (each character may take more than 1 byte)

### 3. Time Complexity of Common Operations

| Operation        | Syntax                  | Time Complexity |
| ---------------- | ----------------------- | --------------- |
| Access char      | `str[i]`                | O(1)            |
| Length           | `str.length`            | O(1)            |
| Comparison       | `str1 === str2`         | O(n) worst case |
| Concatenation    | `str1 + str2`           | O(n + m)        |
| Slicing          | `str.slice(start, end)` | O(k)            |
| Searching        | `str.indexOf(substr)`   | O(n)            |
| Replace          | `str.replace(...)`      | O(n)            |
| Split            | `str.split(delimiter)`  | O(n)            |
| Join (on array)  | `arr.join('')`          | O(n)            |
| Upper/Lower case | `str.toUpperCase()`     | O(n)            |

### 4. Core Methods

#### String access

```js
let s = "abc";
console.log(s[0]);         // 'a'
console.log(s.charAt(1));  // 'b'
```

#### Substring extraction

```js
let s = "abcdef";
s.slice(1, 4);       // 'bcd'
s.substring(1, 4);   // 'bcd'
```

#### Splitting and joining

```js
let s = "a-b-c";
let arr = s.split('-');   // ['a', 'b', 'c']
let joined = arr.join('-'); // 'a-b-c'
```

#### Reversing a string

```js
let s = "abc";
let reversed = s.split('').reverse().join(''); // 'cba'
```

#### Case conversion

```js
let s = "HeLLo";
s.toLowerCase();  // 'hello'
s.toUpperCase();  // 'HELLO'
```

### 5. Character Operations

You can convert characters to and from ASCII using:

```js
let c = 'a';
let ascii = c.charCodeAt(0);        // 97
let char = String.fromCharCode(97); // 'a'
```

For lowercase letters: `'a'.charCodeAt(0)` = 97
For uppercase: `'A'.charCodeAt(0)` = 65

You can use this to create frequency arrays for lowercase alphabets:

```js
let freq = new Array(26).fill(0);
for (let c of s) {
  freq[c.charCodeAt(0) - 97]++;
}
```

### 6. Important String Algorithms

#### 6.1 Palindrome Check

```js
function isPalindrome(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}
```

#### 6.2 Character Frequency

```js
function countFrequency(s) {
  let map = {};
  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}
```

#### 6.3 Reverse Words in a Sentence

```js
function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(' ');
}
```

#### 6.4 Longest Common Prefix

```js
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) return strs[0].slice(0, i);
    }
  }
  return strs[0];
}
```

### 7. Interview Patterns

| Pattern                       | Examples                            |
| ----------------------------- | ----------------------------------- |
| Two pointers                  | Palindrome, reverse string, anagram |
| Sliding window                | Longest substring without repeating |
| Hash map for frequency        | Valid anagram, ransom note          |
| Stack for parsing             | Valid parentheses, decode string    |
| Brute + Optimize with HashSet | Length of longest substring         |

### 8. Common LeetCode Problems on Strings

| Problem # | Name                                           | Concepts Covered         |
| --------- | ---------------------------------------------- | ------------------------ |
| 344       | Reverse String                                 | Two pointers             |
| 125       | Valid Palindrome                               | Two pointers, char check |
| 242       | Valid Anagram                                  | Frequency map            |
| 14        | Longest Common Prefix                          | Compare all strings      |
| 3         | Longest Substring Without Repeating Characters | Sliding Window           |
| 49        | Group Anagrams                                 | HashMap + Sorting        |
| 5         | Longest Palindromic Substring                  | Expand around center     |
| 58        | Length of Last Word                            | Simple parsing           |
| 387       | First Unique Character in a String             | Frequency count          |
| 451       | Sort Characters by Frequency                   | Heap or Bucket sort      |
| 443       | String Compression                             | In-place, two pointers   |

### 9. Space Optimizations

* For strings with only lowercase letters, you can replace a hash map with an array of size 26.
* For palindrome or substring problems, consider using **two pointers** to avoid extra space.

### 10. Summary of What to Master

| Skill                               | Use Case                       |
| ----------------------------------- | ------------------------------ |
| Char access, slicing, splitting     | Basic manipulation             |
| Frequency counting                  | Anagram, uniqueness, frequency |
| Two pointer pattern                 | Palindrome, reversing          |
| Hashing (map, set)                  | Uniqueness, counting           |
| Sliding window                      | Longest substring problems     |
| Regular expressions (in moderation) | Cleaning strings, splitting    |