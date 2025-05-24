## 2723. Add Two Promises

`Difficulty - Easy 🟢`

### **Description**

Given two promises `promise1` and `promise2`, return a new promise.

Each input promise resolves with a number.
The returned promise should resolve with the **sum of the two resolved numbers**.

---

### **Examples**

#### Example 1:

```js
Input:
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

Output: 7

Explanation:
promise1 resolves with 2  
promise2 resolves with 5  
Returned promise resolves with: 2 + 5 = 7
```

#### Example 2:

```js
Input:
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

Output: -2

Explanation:
promise1 resolves with 10  
promise2 resolves with -12  
Returned promise resolves with: 10 + (-12) = -2
```

---

### **Constraints**

* `promise1` and `promise2` are promises that resolve with a number.
