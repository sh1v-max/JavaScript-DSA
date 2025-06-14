# Pattern Printing Problems - JavaScript
## PART A: Star Patterns (10 Types)

---

### 1. **Square**

```js
for (let i = 1; i <= 5; i++) {
  console.log("* ".repeat(5));
}
```

```
* * * * *  
* * * * *  
* * * * *  
* * * * *  
* * * * *  
```

---

### 2. **Left-Aligned Triangle**

```js
for (let i = 1; i <= 5; i++) {
  console.log("* ".repeat(i));
}
```

```
*  
* *  
* * *  
* * * *  
* * * * *  
```

---

### 3. **Right-Aligned Triangle**

```js
for (let i = 1; i <= 5; i++) {
  console.log("  ".repeat(5 - i) + "* ".repeat(i));
}
```

```
        *  
      * *  
    * * *  
  * * * *  
* * * * *  
```

---

### 4. **Inverted Left Triangle**

```js
for (let i = 5; i >= 1; i--) {
  console.log("* ".repeat(i));
}
```

```
* * * * *  
* * * *  
* * *  
* *  
*  
```

---

### 5. **Inverted Right Triangle**

```js
for (let i = 5; i >= 1; i--) {
  console.log("  ".repeat(5 - i) + "* ".repeat(i));
}
```

```
* * * * *  
  * * * *  
    * * *  
      * *  
        *  
```

---

### 6. **Pyramid**

```js
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}
```

```
    *  
   ***  
  *****  
 *******  
*********  
```

---

### 7. **Inverted Pyramid**

```js
for (let i = 5; i >= 1; i--) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}
```

```
*********  
 *******  
  *****  
   ***  
    *  
```

---

### 8. **Diamond**

```js
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
for (let i = n - 1; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
```

```
    *  
   ***  
  *****  
 *******  
*********  
 *******  
  *****  
   ***  
    *  
```

---

### 9. **Hollow Square**

```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i === 1 || i === 5 || j === 1 || j === 5) ? "* " : "  ";
  }
  console.log(row);
}
```

```
* * * * *  
*       *  
*       *  
*       *  
* * * * *  
```

---

### 10. **Hollow Right Triangle**

```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += (j === 1 || j === i || i === 5) ? "* " : "  ";
  }
  console.log(row);
}
```

```
*  
* *  
*   *  
*     *  
* * * * *  
```

---

## PART B: Number Patterns (10 Types)

---

### 11. **Ascending Numbers Triangle**

```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
```

```
1  
1 2  
1 2 3  
1 2 3 4  
1 2 3 4 5  
```

---

### 12. **Reversed Numbers Triangle**

```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j + " ";
  }
  console.log(row);
}
```

```
1  
2 1  
3 2 1  
4 3 2 1  
5 4 3 2 1  
```

---

### 13. **Same Number Row**

```js
for (let i = 1; i <= 5; i++) {
  console.log((i + " ").repeat(i));
}
```

```
1  
2 2  
3 3 3  
4 4 4 4  
5 5 5 5 5  
```

---

### 14. **Number Pyramid**

```js
let count = 1;
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += count + " ";
    count++;
  }
  console.log(row);
}
```

```
1  
2 3  
4 5 6  
7 8 9 10  
11 12 13 14 15  
```

---

### 15. **Inverted Number Triangle**

```js
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
```

```
1 2 3 4 5  
1 2 3 4  
1 2 3  
1 2  
1  
```

---

### 16. **Right-Aligned Number Triangle**

```js
for (let i = 1; i <= 5; i++) {
  let row = "  ".repeat(5 - i);
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}
```

```
        1  
      1 2  
    1 2 3  
  1 2 3 4  
1 2 3 4 5  
```

---

### 17. **Repeated Number Pyramid**

```js
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + (i + " ").repeat(i));
}
```

```
    1  
   2 2  
  3 3 3  
 4 4 4 4  
5 5 5 5 5  
```

---

### 18. **Zig-Zag Number Pattern**

```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i === j || i + j === 6) ? j + " " : "  ";
  }
  console.log(row);
}
```

```
1       5  
  2   4    
    3      
  2   4    
1       5  
```

---

### 19. **Pascal's Triangle (Simplified)**

```js
let n = 5;
for (let i = 0; i < n; i++) {
  let row = " ".repeat(n - i);
  let val = 1;
  for (let j = 0; j <= i; j++) {
    row += val + " ";
    val = val * (i - j) / (j + 1);
  }
  console.log(row);
}
```

---

### 20. **Binary Triangle**

```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += ((i + j) % 2 === 0 ? "1 " : "0 ");
  }
  console.log(row);
}
```

```
1  
0 1  
1 0 1  
0 1 0 1  
1 0 1 0 1  
```
