Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

```js
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"
```

The function returned by createHelloWorld should always 
Example 2:

```js
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10