# Pattern Printing Problems - JavaScript

This repository contains various pattern printing problems solved using JavaScript. Each pattern includes a description, the code solution, and an optional explanation.

## Pattern 1

**Pattern:**

```
*****
*****
*****
*****
*****
```

**Solution:**

```javascript
    pattern1(n) {
        for (let i = 0; i < n; i++) {
            let star = '';
            for (let j = 0; j < n; j++) {
                star += '*';
            }
            console.log(star);
        }

    }
```

## Pattern 2

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
    pattern2(n) {
        for(let i = 1; i <= n; i++){
            let star = ''
            for(let j = 1; j <= i; j++){
                star += '*'
            }
            console.log(star)
        }
    }
```

## Pattern 3

**Pattern:**

```
1
12
123
1234
12345
```

**Solution:**

```javascript
    pattern3(n) {
        for(let i = 1; i <= n; i++){
            let num = ''
            for(let j = 1; j <= i; j++){
                num += `${j}`
            }
            console.log(num)
        }
    }
```

## Pattern 4

**Pattern:**

```
1
22
333
4444
55555
```

**Solution:**

```javascript
    pattern4(n) {
        for (let i = 1; i <= n; i++) {
            let num = ''
            for (let j = 1; j <= i; j++) {
                num += `${i}`
            }
            console.log(num)
        }
    }
```

## Pattern 5

**Pattern:**

```
*****
****
***
**
*
```

**Solution:**

```javascript
    pattern5(n) {
        for (let i = n; i >= 1; i--) {
            let num = ''
            for (let j = 1; j <= i; j++) {
                num += `*`
            }
            console.log(num)
        }
    }
```

## Pattern 6

**Pattern:**

```
12345
1234
123
12
1
```

**Solution:**

```javascript
    pattern6(n) {
        for (let i = n; i >= 1; i--) {
            let num = ''
            for (let j = 1; j <= i; j++) {
                num += `${j}`
            }
            console.log(num)
        }
    }
```

## Pattern 7

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
    pattern7(n) {
        for (let i = 1; i <= n; i++) {
            let star = ''
            for (let j = i; j < n; j++) {
                star += ` `
            }
            for (let st = 1; st <= 2*i-1; st++){
                star += `*` 
            }    
            console.log(star)
        }
    }
```

## Pattern 8

**Pattern:**

```
*********
 *******
  *****
   ***
    *
```

**Solution:**

```javascript
    pattern8(n) {
        for (let i = n; i >= 1; i--) {
            let star = ''
            for (let j = n; j > i; j--) {
                star += ' ';
            }
            for (let st = 1; st <= 2 * i - 1; st++) {
                star += `*`
            }
            console.log(star)
        }
    }
```

## Pattern 9

**Pattern:**

```
    * 
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
```

**Solution:**

```javascript
    pattern9(n) {
        for (let i = 1; i <= n; i++) {
            let star = ''
            for (let j = i; j < n; j++) {
                star += ` `
            }
            for (let st = 1; st <= 2*i-1; st++){
                star += `*` 
            }    
            console.log(star)
        }
        for (let i = n; i >= 1; i--) {
            let star = ''
            for (let j = n; j > i; j--) {
                star += ' ';
            }
            for (let st = 1; st <= 2 * i - 1; st++) {
                star += `*`
            }
            console.log(star)
        }
    }
```

## Pattern 10

**Pattern:**

```
*
**
***
****
*****
****
***
**
*
```

**Solution:**

```javascript
    pattern10(n) {
        for (let i = 1; i <= n; i++) {
            let star = ''
            for (let st = 1; st <=i; st++){
                star += `*` 
            }    
            console.log(star)
        }
        for (let i = n-1; i >= 1; i--) {
            let star = ''
            for (let st = 1; st <= i; st++) {
                star += `*`
            }
            console.log(star)
        }
    }
```

## Pattern 11

**Pattern:**

```
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1
```

**Solution:**

```javascript
    pattern11(n) {
        let num = 1
        for (let i = 0; i < n; i++) {
            if(i % 2 === 0) {
                num = 1
            }else {
                num = 0
            }
            let val = ''
            for (let j = 0; j <= i; j++) { 
                val += num + ' '
                num = 1 - num
            }

            console.log(val.trim())
        }
    }
```

## Pattern 12

**Pattern:**

```
1        1
12      21
123    321
1234  4321
1234554321
```

**Solution:**

```javascript
    pattern12(n) {
        for (let i = 1; i <= n; i++) {
            let left = '';
            let right = '';

            for (let j = 1; j <= i; j++) {
                left += j;
            }
            let spaces = ' '.repeat((n - i) * 2);

            for (let j = i; j >= 1; j--) {
                right += j;
            }

            console.log(left + spaces + right);
        }
    }
```

## Pattern 13

**Pattern:**

```
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15
```

**Solution:**

```javascript
    pattern13(n) {
        let num = 1
        for (let i = 1; i <= n; i++) {
            let line = ''
            for (let j = 1; j <= i; j++) {
                line += num + ' '
                num++
            }
            console.log(line.trim())
        }
    }
```

## Pattern 14

**Pattern:**

```
A
AB
ABC
ABCD
ABCDE
```

**Solution:**

```javascript
    pattern14(n) {
        for (let i = 1; i <= n; i++) {
            let char = "";
            for (let j = 0; j < i; j++) {
                char += String.fromCharCode(65 + j);
            }
            console.log(char);
        }
    }
```

## Pattern 15

**Pattern:**

```
ABCDE
ABCD
ABC
AB
A
```

**Solution:**

```javascript
    pattern15(n) {
        for (let i = n; i >= 1; i--) {
            let char = "";
            for (let j = 0; j < i; j++) {
                char += String.fromCharCode(65 + j);
            }
            console.log(char);
        }
    }
```

## Pattern 16

**Pattern:**

```
A
BB
CCC
DDDD
EEEEE
```

**Solution:**

```javascript
    pattern16(n) {
        for (let i = 0; i < n; i++) {
            let line = ''
            const char = String.fromCharCode(65 + i)
            for (let j = 0; j <= i; j++) {
                line += char
            }
            console.log(line)
        }
    }
```

## Pattern 17

**Pattern:**

```
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
```

**Solution:**

```javascript
    pattern17(n) {
        for (let i = 1; i <= n; i++) {
            let char = "";

            for (let s = 0; s < n - i; s++) {
                char += " ";
            }

            for (let j = 0; j < i; j++) {
                char += String.fromCharCode(65 + j);
            }

            for (let j = i - 2; j >= 0; j--) {
                char += String.fromCharCode(65 + j);
            }

            console.log(char);
        }
    }
```

## Pattern 18

**Pattern:**

```
E 
D E 
C D E 
B C D E 
A B C D E
```

**Solution:**

```javascript
    pattern18(n) {
        for (let i = 0; i < n; i++) {
            let char = "";
            for (let j = n - 1 - i; j < n; j++) {
                char += String.fromCharCode(65 + j) + " ";
            }
            console.log(char.trim());
        }
    }
```

## Pattern 19

**Pattern:**

```
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
```

**Solution:**

```javascript
    pattern19(n) {
        let space = 0;
        for (let i = 0; i < n; i++) {
            let line = ''
            for (let j = 0; j < n - i; j++) {
                line += '*'
            }
            for (let j = 0; j < space; j++) {
                line += ' '
            }
            for (let j = 0; j < n - i; j++) {
                line += '*'
            }
            console.log(line);
            space += 2;
        }

        space = 2 * n - 2;
        for (let i = 1; i <= n; i++) {
            let line = ''
            for (let j = 0; j < i; j++) {
                line += '*'
            }
            for (let j = 0; j < space; j++) {
                line += ' '
            }
            for (let j = 0; j < i; j++) {
                line += '*'
            }
            console.log(line);
            space -= 2;
        }
    }
```

## Pattern 20

**Pattern:**

```
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
```

**Solution:**

```javascript
    pattern20(n) {
        let space = 2 * (n - 1); 
        for (let i = 1; i <= n; i++) {
            let line = '';
            for (let j = 0; j < i; j++) {
                line += '*';
            }
            for (let j = 0; j < space; j++) {
                line += ' ';
            }
            for (let j = 0; j < i; j++) {
                line += '*';
            }
            console.log(line);
            space -= 2; 
        }

        space = 2; 
        for (let i = n - 1; i >= 1; i--) {
            let line = '';

            for (let j = 0; j < i; j++) {
                line += '*';
            }
            for (let j = 0; j < space; j++) {
                line += ' ';
            }
            for (let j = 0; j < i; j++) {
                line += '*';
            }
            console.log(line);
            space += 2;
        }
    }
```

## Pattern 21

**Pattern:**

```

```

**Solution:**

```javascript

```
