## ⚙️ JavaScript Functions

---

### 1. What is a Function?

A block of reusable code that performs a specific task.

```js
function greet() {
  console.log("Hello!");
}
greet();  // Calling the function
```

---

### 2. Function with Parameters

Pass values into a function.

```js
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Wazir");
```

---

### 3. Function with Return Value

Functions can return values using `return`.

```js
function add(a, b) {
  return a + b;
}
let result = add(3, 5);  // 8
```

---

### 4. Arrow Function (ES6)

Shorter syntax for writing functions.

```js
const greet = () => {
  console.log("Hi!");
};

const multiply = (x, y) => x * y;
```

---

### 5. Anonymous Function

A function without a name, usually used as a value.

```js
let sayHi = function() {
  console.log("Hi there!");
};
sayHi();
```

---

### 6. Immediately Invoked Function Expression (IIFE)

Runs as soon as it is defined.

```js
(function() {
  console.log("This runs immediately!");
})();
```

---

## 🔄 JavaScript If-Else

---

### 1. Basic `if` Statement

```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}
```

---

### 2. `if...else`

```js
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Enjoy the sunshine");
}
```

---

### 3. `if...else if...else`

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

---

### 4. Ternary Operator (Shortcut)

```js
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // "Adult"
```

---

### 5. Nested if

```js
let num = 5;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("Even positive number");
  } else {
    console.log("Odd positive number");
  }
}
```
