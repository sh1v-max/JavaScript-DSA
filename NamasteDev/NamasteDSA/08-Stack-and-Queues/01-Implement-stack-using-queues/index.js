// Implementing a Stack (LIFO) using Queues (FIFO).

// Approach 1: Using Two Queues
// We maintain two queues q1 (main) and q2 (helper).
//   - push(x): Simply push into q1 (O(1)).
//   - pop(): Move all elements except the last one from q1 to q2. The last element in q1 is the stack's "top" which we pop and return. Then swap q1 and q2.
//   - top(): Similar to pop(), but instead of removing the last element, we peek at it, push it to q2, and swap q1 and q2.
//   - empty(): Return true if q1 is empty.

var MyStack = function () {
  // create two queues to store elements
  this.q1 = []
  this.q2 = []
}

MyStack.prototype.push = function (x) {
  // push the element into the first queue
  this.q1.push(x)
}

MyStack.prototype.pop = function () {
  // Move all elements except the last one from q1 to q2
  // The last element in q1 is the "top" of our stack
  let n = this.q1.length
  // Dequeue from q1 and enqueue into q2
  for (let i = 0; i < n - 1; i++) {
    // let frontEle = this.q1.shift()
    // this. q2.push(frontEle)
    // can also write as
    this.q2.push(this.q1.shift())
  }

  // The last remaining element in q1 is the stack top
  let res = this.q1.shift()

  // swap the queues
  let temp = this.q1
  this.q1 = this.q2
  this.q2 = temp

  return res
}

MyStack.prototype.top = function () {
  // Move all elements except the last one from q1 to q2
  let n = this.q1.length
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift())
  }

  // The last element in q1 is the "top"
  // this is valid, because we've moved all elements from q1 to q2
  // and accessing the peek
  let front = this.q1[0]

  // Move the last element into q2
  // because that's what top says
  this.q2.push(this.q1.shift())

  // Swap q1 and q2
  let temp = this.q1
  this.q1 = this.q2
  this.q2 = temp

  // Return the top element
  return front
}

MyStack.prototype.empty = function () {
  // If q1 is empty, the stack is empty
  return this.q1.length === 0
}

// approach 2: using one queue
// maintain a single queue (q).
// push(x): Add (enqueue) element to the back of the queue.
// pop(): Rotate the queue to bring the last pushed element to the front by
// dequeuing and enqueuing (shift + push) all previous elements.
// Then dequeue the front (which is the stack top).
// top(): Same as pop(), but after retrieving the front element,
// we push it back to keep the queue intact.
// empty(): Check if queue is empty.

var MyStack = function () {
  this.q = []
}

MyStack.prototype.push = function (x) {
  this.q.push(x)
}

MyStack.prototype.pop = function () {
  let n = this.q.length
  // rotate the queue by removing all elements except the last one
  // the last pushed element will become the "front" of the queue
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift())
  }

  return this.q.shift()
}

MyStack.prototype.top = function () {
  let n = this.q.length
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift())
  }

  let front = this.q.shift()
  this.q.push(front)
  return front
}

MyStack.prototype.empty = function () {
  return this.q.length === 0
}
