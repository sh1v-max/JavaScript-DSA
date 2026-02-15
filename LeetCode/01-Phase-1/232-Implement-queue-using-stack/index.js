// implement first in first out queue using two stack only
// must support all operations of a normal queue
// push, peek, pop, and empty
// You must use only standard operations of a stack
// push to top, peek/pop from top,size and empty

// approach: using 2 stack
// Create two stacks, stack1 and stack2
// When an element is pushed into the queue, push it onto stack1
// When an element is popped from the queue, check if stack2 is empty
//   - If stack2 is empty, move all elements from stack1 to stack2
//   - Then, pop the top element from stack2 and return it
// When we want to peek at the top element of the queue, check if stack2 is empty
//   - If stack2 is empty, move all elements from stack1 to stack2
//   - Then, return the top element of stack2 without popping it

var MyQueue = function () {
  this.s1 = []
  this.s2 = []
}


MyQueue.prototype.push = function (x) {
  // always push in s1
  this.s1.push(x)
}


MyQueue.prototype.pop = function () {
  // move s1 to s2 if s2 is empty
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  }
  return this.s2.pop()
}

MyQueue.prototype.peek = function () {
  // same as pop
  // move all elements from s1 to s2
  // and return the last elem (do not pop it)
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  }
  return this.s2[this.s2.length - 1]
}


MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0
}


// time complexity:
// push: O(1)
// pop: O(1) on average, O(n) in worst case
// peek: O(1) on average, O(n) in worst case
// empty: O(1)
// space complexity: O(n)
