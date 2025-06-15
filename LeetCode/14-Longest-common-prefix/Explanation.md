# Explanation and approach

### 🔍 **Approach Used: Horizontal Scanning**

I used the **horizontal scanning approach**, which works like this:

1. **Start with the first string** as your assumed prefix.
2. Compare it with the next string:

   * If it doesn't start with the prefix, **trim** one character from the end of the prefix.
   * Keep trimming until the current string starts with the prefix.
3. Move to the next string and repeat.
4. If at any point the prefix becomes empty (`""`), return it — since no common prefix exists.


### 🧠 Why It Works:

We **gradually reduce** the common prefix by checking it **against each string**. Since we reduce the prefix only when needed, this approach is efficient for small to medium input sizes.


### 💻 Code Breakdown:

```javascript
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
```

> Edge case: if the input array is empty, there's no prefix to find.


```javascript
    let prefix = strs[0];
```

> Assume the first word is the longest possible prefix. We'll test this assumption.


```javascript
    for (let i = 1; i < strs.length; i++) {
```

> Start comparing with the second word onward.


```javascript
        while (strs[i].indexOf(prefix) !== 0) {
```

> Keep shortening the `prefix` until the current word (`strs[i]`) **starts with** it.

* `indexOf(prefix) !== 0` means the current string doesn't begin with `prefix`.


```javascript
            prefix = prefix.slice(0, -1);
```

> Remove the last character from `prefix`.


```javascript
            if (prefix === "") return "";
```

> If the prefix becomes empty, there's no common prefix.


```javascript
        }
    }
    return prefix;
};
```

> After checking all strings, the `prefix` variable holds the longest common prefix.


### 🧪 Example Walkthrough:

**Input:** `["flower", "flow", "flight"]`

* Start with `"flower"` as the prefix.
* Compare with `"flow"` → `"flower"` is not a prefix of `"flow"`, so reduce:

  * `"flowe"` → no
  * `"flow"` → ✅ match
* Now `prefix = "flow"`
* Compare with `"flight"`:

  * `"flow"` is not a prefix → reduce:

    * `"flo"` → no
    * `"fl"` → ✅ match
* Final answer: `"fl"`
