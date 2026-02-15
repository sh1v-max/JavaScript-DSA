## 557 Reverse words in a string III

`Difficulty - Easy 🟢`

### **Description**

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and the initial word order.


### Example 1:

**Input:**
`s = "Let's take LeetCode contest"`
**Output:**
`"s'teL ekat edoCteeL tsetnoc"`
**Explanation:**
Each word is reversed individually:

* "Let's" → "s'teL"
* "take" → "ekat"
* "LeetCode" → "edoCteeL"
* "contest" → "tsetnoc"


### Example 2:

**Input:**
`s = "Mr Ding"`
**Output:**
`"rM gniD"`
**Explanation:**
Each word is reversed individually:

* "Mr" → "rM"
* "Ding" → "gniD"


### Constraints:

* `1 <= s.length <= 5 * 10⁴`
* `s` contains printable ASCII characters.
* `s` does not contain any leading or trailing spaces.
* There is at least one word in `s`.
* All the words in `s` are separated by a single space.
