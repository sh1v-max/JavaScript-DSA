// design a stack that supports push, pop, top,
// and retrieving the minimum element in constant time
// time complexity must be O(1) for each operation



var MinStack = function () {
  this.s = []
}

MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]) // First element, min = val
  } else {
    // s.length-1 is last val
    // s[4][1]
    let currentMin = this.s[this.s.length - 1][1]
    this.s.push([val, Math.min(val, currentMin)])
  }
}

MinStack.prototype.pop = function () {
  this.s.pop()
}

MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0]
}

MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1]
}

// Time: O(1) for all operations.
// Space: O(n), because we store both value and min for each element.
