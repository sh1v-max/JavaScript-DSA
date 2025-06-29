## How to convert Linked List into an Array

To **convert a linked list into an array**, you simply need to **traverse** the list node by node and **push each value into an array**.

Here’s how to do it in **JavaScript**, assuming you're using a singly linked list like this:

```js
function Node(val) {
    this.val = val;
    this.next = null;
}
```

And the linked list might look like:

```js
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
```

### ✅ Convert Linked List to Array

```js
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}
```

### 🔍 Example Usage:

```js
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

console.log(linkedListToArray(head));  // Output: [10, 20, 30]
```
