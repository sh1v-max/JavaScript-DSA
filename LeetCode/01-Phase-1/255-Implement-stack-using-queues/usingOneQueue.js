var MyStack = function () {
  this.q = []
}

/**
 * @param {number} x
 * @return {void}
 */
 
MyStack.prototype.push = function (x) {
    this.q.push(x)
}

/**
 * @return {number}
 */

// approach 2: using one queue
// maintain a single queue (q).
// push(x): Add (enqueue) element to the back of the queue.
// pop(): Rotate the queue to bring the last pushed element to the front by
// dequeuing and enqueuing (shift + push) all previous elements.
// Then dequeue the front (which is the stack top).
// top(): Same as pop(), but after retrieving the front element,
// we push it back to keep the queue intact.
// empty(): Check if queue is empty.
 
MyStack.prototype.pop = function () {
  let n = this.q.length
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift())
  }

  return this.q.shift()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q.length
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift())
  }

  let front = this.q.shift()
  this.q.push(front)
  return front
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0;
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Time Complexity:
// push → O(n)
// pop → O(1)
// top → O(1)
// empty → O(1)
// Space Complexity:
// Space Complexity = O(n)
// Where n is the total number of elements in the stack.