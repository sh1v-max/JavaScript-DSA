var MyStack = function () {
  this.q1 = []
  this.q2 = []
}

/**
* @param {number} x
* @return {void}
*/

// Approach 1: Using Two Queues
// We maintain two queues q1 (main) and q2 (helper).
//   - push(x): Simply push into q1 (O(1)).
//   - pop(): Move all elements except the last one from q1 to q2. The last element in q1 is the stack's "top" which we pop and return. Then swap q1 and q2.
//   - top(): Similar to pop(), but instead of removing the last element, we peek at it, push it to q2, and swap q1 and q2.
//   - empty(): Return true if q1 is empty.


MyStack.prototype.push = function (x) {
  this.q1.push(x)
}

/**
* @return {number}
*/
MyStack.prototype.pop = function () {
  let n = this.q1.length
  for (let i = 0; i < n - 1; i++) {
      this.q2.push(this.q1.shift())
  }

  let res = this.q1.shift()

  let temp = this.q1
  this.q1 = this.q2
  this.q2 = temp

  return res
}

/**
* @return {number}
*/
MyStack.prototype.top = function () {
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

  let temp = this.q1
  this.q1 = this.q2
  this.q2 = temp

  return front;
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function () {
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

// Time Complexity:
// push → O(1)
// pop/top → O(n)
// empty → O(1)
// Space Complexity:
// Space Complexity = O(1)
// In-place modifications with constant extra space.