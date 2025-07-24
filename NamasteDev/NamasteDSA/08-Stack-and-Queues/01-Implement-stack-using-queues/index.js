// Implementing a Stack (LIFO) using two Queues (FIFO).
// We maintain two queues q1 (main) and q2 (helper).
// Approach:
//   - push(x): Simply push into q1 (O(1)).
//   - pop(): Move all elements except the last one from q1 to q2. The last element in q1 is the stack's "top" which we pop and return. Then swap q1 and q2.
//   - top(): Similar to pop(), but instead of removing the last element, we peek at it, push it to q2, and swap q1 and q2.
//   - empty(): Return true if q1 is empty.

var MyStack = function () {
  // create two queues to store elements
  this.q1 = []
  this.q2 = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // push the element into the first queue
  this.q1.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // Step 1: Move all elements except the last one from q1 to q2
  // The last element in q1 is the "top" of our stack
  let n = this.q1.length
  // Dequeue from q1 and enqueue into q2
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift())
  }
  
  // Step 2: The last remaining element in q1 is the stack top
  let res = this.q1.shift()

  // swap the queues
  let temp = q1
  q1 = q2
  q2 = temp

  return res
}

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  // Step 1: Move all elements except the last one from q1 to q2
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // Step 2: The last element in q1 is the "top"
  let front = this.q1[0]; // Peek at it

  // Step 3: Move the last element into q2 (to keep the order intact)
  this.q2.push(this.q1.shift());

  // Step 4: Swap q1 and q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  // Step 5: Return the top element
  return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  // If q1 is empty, the stack is empty
  return this.q1.length === 0;
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
