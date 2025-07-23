# Stack in JavaScript

A **Stack** is a **linear data structure** that follows the **LIFO (Last In, First Out)** principle, meaning the last element added to the stack is the first one removed.


## **Key Characteristics**
- **LIFO**: Last element added (pushed) is the first to be removed (popped).
- Elements are inserted and removed **from the same end** called the **top**.
- Useful in **undo mechanisms**, **browser history**, **expression evaluation**, etc.


## **Basic Operations**
1. **push(element)** – Add an element to the top of the stack.
2. **pop()** – Remove and return the top element.
3. **peek()** or **top()** – **NOT VALID IN JAVASCRIPT** Return the top element without removing it. (Not a standard JavaScript method, but a simple stack/queue functionality)
3. **peek()** or **top()** – Return the top element without removing it.
4. **isEmpty()** – Check if the stack is empty.
5. **size()** – Get the number of elements in the stack.
6. **clear()** – Remove all elements from the stack.

### Example Flow

- stack.push(1) → `[1]`
- stack.push(3) → `[1, 3]`
- stack.pop() → returns `3` → `[1]`
- stack.peek() → **NOT VALID IN JAVASCRIPT** returns `1`
- stack.peek() → returns `1`

### **Important Note**
- In JavaScript, the `stack[3]` notation is **restricted** for accessing elements, as it creates a new property on the stack object. Instead, use `stack.peek()` to safely access the top element.

## **Time & Space Complexity**

| Operation   | Time Complexity |
|-------------|-----------------|
| push        | O(1)            |
| pop         | O(1)            |
| peek/top    | O(1)            |
| isEmpty     | O(1)            |
| size        | O(1)            |

- **Space Complexity**: O(n), where n is the number of elements stored.


## **JavaScript Implementation**

### **Approach 1: Using an Array**
JavaScript arrays have built-in methods (`push` and `pop`) that make implementing a stack straightforward.

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) return "Stack Underflow";
    return this.items.pop();
  }

  // Return top element
  peek() {
    if (this.isEmpty()) return "No elements in stack";
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return size of stack
  size() {
    return this.items.length;
  }

  // Clear stack
  clear() {
    this.items = [];
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.size()); // 1
```

### **Approach 2: Using an Object (Optimized for Large Data)**

Using an object avoids the re-indexing cost of arrays in some cases (rare but possible for huge arrays).

```javascript
class StackObject {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) return "Stack Underflow";
    this.count--;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }

  peek() {
    if (this.isEmpty()) return "No elements in stack";
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

// Example
const stack2 = new StackObject();
stack2.push(1);
stack2.push(2);
console.log(stack2.peek()); // 2
stack2.pop();
console.log(stack2.size()); // 1
```


## **Real-World Examples of Stacks**

1. **Undo/Redo functionality** (text editors).
2. **Browser history** (back and forward).
3. **Expression evaluation** (e.g., converting infix to postfix).
4. **Call stack in JavaScript** – function calls are managed using stacks.
5. **Balanced Parentheses** checking.

### Use case:
- Recursion (stack)
- Level-Order Traversal (queue)
- BFS (queue)
- DFS (stack)

## **Example Problem: Valid Parentheses**

```javascript
function isValidParentheses(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]"));     // false
```


## **Stack vs Queue**

| Feature   | Stack (LIFO)             | Queue (FIFO)        |
| --------- | ------------------------ | ------------------- |
| Insertion | Push (top)               | Enqueue (rear)      |
| Deletion  | Pop (top)                | Dequeue (front)     |
| Use Cases | Undo, Recursion, Parsing | Scheduling, Buffers |


## **Key Takeaways**

* Stacks are simple but powerful structures that are foundational in computing.
* LIFO behavior makes them perfect for problems requiring **reversing** or **backtracking**.
* Implementation is easy in JavaScript due to built-in `push` and `pop`.


## **Further Reading**

* [MDN Web Docs: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [GeeksforGeeks – Stack Data Structure](https://www.geeksforgeeks.org/stack-data-structure/)
* [LeetCode Stack Problems](https://leetcode.com/tag/stack/)



