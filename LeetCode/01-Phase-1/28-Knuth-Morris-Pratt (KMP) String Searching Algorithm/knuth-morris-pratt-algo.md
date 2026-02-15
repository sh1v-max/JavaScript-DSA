# Knuth-Morris-Pratt (KMP) String Searching Algorithm

## 📌 Introduction

The **Knuth-Morris-Pratt (KMP) algorithm** is a classic string-searching (or substring search) algorithm.
It finds occurrences of a *pattern string (P)* inside a *text string (T)* efficiently, without re-checking characters unnecessarily.

* **Naive approach** → O(n·m), where `n = length of text`, `m = length of pattern`.
* **KMP approach** → O(n + m), much faster for large inputs.


## ⚡ Core Idea

Instead of re-checking characters in the text when a mismatch happens, KMP uses **preprocessing** of the pattern to know *how much we can safely skip ahead*.

This preprocessing is done using the **Longest Prefix Suffix (LPS)** array.


## 🛠️ Step 1: Build the LPS Array

**LPS\[i] = length of the longest proper prefix of the pattern\[0..i] which is also a suffix.**

* A **prefix** = starting substring
* A **suffix** = ending substring
* **Proper prefix** = prefix that’s not equal to the full string

👉 LPS helps avoid re-checking characters.

**Example: Pattern = `"ababaca"`**

| Index | Pattern | LPS |
| ----- | ------- | --- |
| 0     | a       | 0   |
| 1     | ab      | 0   |
| 2     | aba     | 1   |
| 3     | abab    | 2   |
| 4     | ababa   | 3   |
| 5     | ababac  | 0   |
| 6     | ababaca | 1   |

So `LPS = [0,0,1,2,3,0,1]`


## 🛠️ Step 2: Search Using LPS

We slide the pattern over the text:

1. Compare characters of text `T[i]` and pattern `P[j]`.
2. If **match**, move both `i++` and `j++`.
3. If **mismatch**:

   * If `j > 0`, don’t restart from `0`. Instead, set `j = LPS[j-1]`.
   * If `j == 0`, move `i++`.
4. If `j == m` (pattern fully matched), record occurrence and continue with `j = LPS[j-1]`.


## 🔎 Example Walkthrough

**Text = `"ababcababcabab"`, Pattern = `"ababc"`**

1. Compare → matches until full pattern found at index `0`.
2. Instead of restarting, use LPS to continue.
3. Next match found at index `5`.

✅ Efficient search — no redundant comparisons.


## ⏱️ Time Complexity

* **Preprocessing (LPS array):** O(m)
* **Searching:** O(n)
* **Total:** **O(n + m)**


## ✅ Advantages

* Much faster than brute force for large text/patterns.
* Guarantees linear time.
* Useful in **plagiarism detection, DNA sequencing, text editors, IDEs (find/replace)**.


## 💻 Pseudocode

```text
function KMP(text, pattern):
    lps = computeLPS(pattern)
    i = 0  # index for text
    j = 0  # index for pattern

    while i < len(text):
        if text[i] == pattern[j]:
            i++, j++
            if j == len(pattern):
                print("Pattern found at", i - j)
                j = lps[j - 1]
        else:
            if j > 0:
                j = lps[j - 1]
            else:
                i++
```

**LPS computation:**

```text
function computeLPS(pattern):
    lps = [0] * len(pattern)
    length = 0  # length of previous longest prefix suffix
    i = 1

    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length++
            lps[i] = length
            i++
        else:
            if length > 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i++

    return lps
```


## 📝 Key Takeaways

* KMP avoids re-checking by preprocessing pattern.
* LPS array is the heart of KMP.
* Time complexity = O(n + m), very efficient.
* Great for real-time pattern searching problems.
