## 📘 JavaScript Basics

---

### 1. Variables

#### ➤ `let`

* Block-scoped
* Can be updated, **not re-declared** in the same scope

```js
let name = "Wazir";
```

#### ➤ `const`

* Block-scoped
* **Cannot be updated or re-declared**

```js
const age = 23;
```

#### ➤ `var`

* Function-scoped (old method)
* Can be updated and re-declared

```js
var city = "Varanasi";
```

---

### 2. Data Types

#### ➤ Primitive Types

* `String` → `"hello"`
* `Number` → `42`, `3.14`
* `Boolean` → `true`, `false`
* `Undefined` → a declared variable with no value
* `Null` → an empty value on purpose

#### ➤ Non-Primitive Types

* `Array` → `["apple", "banana"]`
* `Object` → `{ name: "Crescha", age: 22 }`

---

### 3. Operators

#### ➤ Arithmetic Operators

* `+`, `-`, `*`, `/`, `%`, `**`

#### ➤ Comparison Operators

* `==` (equal)
* `===` (strict equal)
* `!=`, `!==`, `<`, `>`, `<=`, `>=`

#### ➤ Logical Operators

* `&&` (and), `||` (or), `!` (not)

---

### 4. Conditionals

#### ➤ `if`, `else if`, `else`

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

#### ➤ Ternary Operator

```js
let msg = (age >= 18) ? "Adult" : "Minor";
```

---

### 5. Loops

#### ➤ `for` loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### ➤ `while` loop

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

---

### 6. Functions

#### ➤ Regular Function

```js
function greet() {
  console.log("Hello!");
}
greet();
```

#### ➤ Arrow Function

```js
const greet = () => {
  console.log("Hey!");
};
```

---

### 7. Arrays

#### ➤ Create and Access

```js
let fruits = ["apple", "banana"];
console.log(fruits[0]);  // apple
```

#### ➤ Methods

* `push()` – Add to end
* `pop()` – Remove from end
* `shift()` – Remove from start
* `unshift()` – Add to start
* `length` – Get array length

---

### 8. Objects

#### ➤ Create Object

```js
let person = {
  name: "Crescha",
  age: 22
};
```

#### ➤ Access Properties

```js
console.log(person.name); // "Crescha"
```

---

### 9. Events (in browser)

#### ➤ Add Event Listener

```js
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

### 10. Console Methods

* `console.log()` – Output data
* `console.error()` – Show error
* `console.warn()` – Show warning

---

### 11. Comments

#### ➤ Single-line

```js
// This is a comment
```

#### ➤ Multi-line

```js
/*
This is a 
multi-line comment
*/
```

