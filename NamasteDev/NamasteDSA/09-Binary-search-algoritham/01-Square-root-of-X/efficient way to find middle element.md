# How to find the middle element for binary search efficiently

## 🧠 Basic Way

```js
let mid = Math.floor((low + high) / 2);
```

This is **fine in JavaScript** (and Python), because JS uses **64-bit floating-point numbers**, so overflow isn’t usually a problem here.


## ⚠️ But in languages like **Java/C++**, this can overflow:

```cpp
int mid = (low + high) / 2;  // ❌ May overflow if low + high > INT_MAX
```


## ✅ Safer and Efficient Formula (works everywhere):

```js
let mid = low + Math.floor((high - low) / 2);
```

### 💡 Why it works:

* `high - low` will never overflow.
* You're shifting the middle from `low`, not from 0.


## 🏁 Summary

| Language       | Safe Way to Find Mid                                       |
| -------------- | ---------------------------------------------------------- |
| JavaScript     | `Math.floor((low + high) / 2)` ✅ fine usually              |
| Universal Safe | `low + Math.floor((high - low) / 2)` ✅ always safe         |
| C++ / Java     | `low + (high - low) / 2` ✅ must use this to avoid overflow |


### Example in your case:

```js
let m = l + Math.floor((r - l) / 2);
```

This is the most **robust and recommended way** — even though in JS the regular way won’t usually break.
