## 🔹 **Time Complexity**

### ✅ What is it?

Time complexity tells you **how fast** your algorithm runs **as the input size increases**.

### ✅ Why does it matter?

Because a code that works fine for small inputs might become *super slow* for large inputs.


### 🔍 **Common Time Complexities:**

| Complexity     | Description                                                          | Example                                   |
| -------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| **O(1)**       | Constant time — doesn’t depend on input size                         | Accessing an element in an array by index |
| **O(log n)**   | Logarithmic time — input size reduced each time (like binary search) | Binary Search                             |
| **O(n)**       | Linear time — goes through every element once                        | Loop through an array                     |
| **O(n log n)** | Log-linear time — divide and conquer methods                         | Merge Sort, Quick Sort (avg case)         |
| **O(n²)**      | Quadratic time — nested loops                                        | Bubble Sort, Selection Sort               |
| **O(2ⁿ)**      | Exponential time — doubles every time                                | Recursive Fibonacci                       |
| **O(n!)**      | Factorial time — grows extremely fast                                | Solving all permutations                  |


### ✅ How to Calculate It:

* **Loops** = O(n) (single), O(n²) (nested), etc.
* **Function calls** = Check recursion depth or how often it's called
* **Recursive functions** = Use recurrence relation or recursion tree


## 🔹 **Space Complexity**

### ✅ What is it?

Space complexity tells you **how much extra memory** your code uses **as input size increases**.

### ✅ What counts as "space"?

* Extra variables
* Data structures like arrays, maps, stacks
* Recursion stack memory


### 🔍 **Common Space Complexities:**

| Complexity   | Description                              | Example                       |
| ------------ | ---------------------------------------- | ----------------------------- |
| **O(1)**     | Constant — uses a fixed amount of memory | Swapping two numbers          |
| **O(n)**     | Linear — memory grows with input size    | Creating a new array          |
| **O(n²)**    | Quadratic — for 2D arrays, matrices      | Storing a graph as a matrix   |
| **O(log n)** | Often from recursion                     | Binary search recursion stack |


### 🧠 Example:

**Palindrome Number**

* Time: **O(log₁₀ n)** → You divide the number by 10 each step
* Space: **O(1)** → No extra space used

**Reverse Integer**

* Time: **O(log₁₀ n)** → Iterates over each digit
* Space: **O(1)** → Constant variables


## 🧩 Tips to Master It:

1. Count loops and recursive calls
2. Ignore constants and lower-order terms

   * Ex: `O(2n + 10)` → Just say **O(n)**
3. Watch for hidden space (e.g., call stacks in recursion)

