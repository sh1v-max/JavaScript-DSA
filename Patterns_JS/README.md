# Pattern Printing Problems - JavaScript

This repository contains various pattern printing problems solved using JavaScript. Each pattern includes a description, the code solution, and an optional explanation.

## Pattern 1: Right-angled Triangle

**Pattern:**

```
*
**
***
****
*****
```

**Solution:**

```javascript
function rightAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
}
rightAngledTriangle(5);
```

## Pattern 2: Pyramid

**Pattern:**

```
    *
   ***
  *****
 *******
*********
```

**Solution:**

```javascript
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
pyramid(5);
```

## Pattern 3: Diamond

**Pattern:**

```
    *
   ***
  *****
   ***
    *
```

**Solution:**

```javascript
function diamond(n) {
  let mid = Math.floor(n / 2) + 1;

  for (let i = 1; i <= mid; i++) {
    let spaces = ' '.repeat(mid - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  for (let i = mid - 1; i > 0; i--) {
    let spaces = ' '.repeat(mid - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
diamond(5);
```