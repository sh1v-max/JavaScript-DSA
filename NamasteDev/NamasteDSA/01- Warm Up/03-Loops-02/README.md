## JavaScript Loops

Loops are used to **run the same block of code repeatedly** with different values.

---

### 1. `for` Loop

Used when you know how many times you want to loop.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);  // prints 0 to 4
}
```

#### Structure:

```js
for (initialization; condition; increment/decrement) {
  // code block
}
```

---

### 2. `while` Loop

Used when you don’t know how many times you'll loop in advance.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### Structure:

```js
while (condition) {
  // code block
}
```

---

### 3. `do...while` Loop

Runs the code **at least once**, then checks the condition.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### 4. Looping Through Arrays

```js
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

### 5. `for...of` Loop

Easier way to loop over arrays.

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### 6. `for...in` Loop

Used for looping through object properties.

```js
let person = { name: "Wazir", age: 23 };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

### 7. `break` and `continue`

#### ➤ `break` → exits the loop completely

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);  // prints 0,1,2
}
```

#### ➤ `continue` → skips to next iteration

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);  // prints 0,1,2,4
}
```
