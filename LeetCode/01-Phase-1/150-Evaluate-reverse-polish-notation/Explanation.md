### 🔢 Problem 150: Evaluate Reverse Polish Notation (Leetcode - Medium)

### ✅ **What's the problem?**

You are given a list of **tokens** that form a valid **arithmetic expression** in **Reverse Polish Notation (RPN)**.
Your job is to **evaluate the expression** and return its result as an **integer**.

### 💡 What is Reverse Polish Notation (RPN)?

Reverse Polish Notation (also called **postfix notation**) is a mathematical notation where:

* **Operators come after the operands**, instead of between them like in regular infix notation.

#### 🔁 Infix (normal):

```
(2 + 1) * 3 = 9
```

#### 🔁 Postfix / RPN:

```
2 1 + 3 * = 9
```

You evaluate **from left to right**, and every time you encounter an operator, you apply it to the last two numbers before it.

### 📘 How it works — step-by-step example

#### Input:

```js
tokens = ["2", "1", "+", "3", "*"]
```

#### Evaluation process:

1. Push 2 → stack: \[2]
2. Push 1 → stack: \[2, 1]
3. See "+", pop 1 and 2 → compute 2 + 1 = 3 → push → stack: \[3]
4. Push 3 → stack: \[3, 3]
5. See "\*", pop 3 and 3 → compute 3 \* 3 = 9 → push → stack: \[9]

✅ Final result: **9**

### ⚠️ Important Rule for Division:

* The division should **truncate toward zero**, meaning it behaves like `Math.trunc(a / b)` in JavaScript (or `int(a / b)` in Python if both are positive, but needs handling for negatives).

### 🧠 Plan to solve:

1. Use a **stack** to store numbers.
2. Iterate over each token:

   * If it's a number → push to stack.
   * If it's an operator:

     * Pop top 2 numbers.
     * Apply the operator: `left op right`
     * Push the result back to the stack.
3. At the end, the stack will contain **1 result**, which is the final answer.

### 🧮 Time and Space Complexity:

* **Time**: `O(n)` — You scan all tokens once.
* **Space**: `O(n)` — Stack might store up to `n/2` numbers in worst case.
