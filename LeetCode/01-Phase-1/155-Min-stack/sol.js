
var MinStack = function () {
  this.s = []
};

/** 
* @param {number} val
* @return {void}
*/

// Approach:
// Use a stack of pairs [val, minForThatVal]
// On push: store [val, min(val, currentMin)]
// we will store data as array (val and min)
// On pop: remove the top
// top(): return top[0]
// getMin(): return top[1] 

MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
      this.s.push([val, val]) // First element, min = val
  } else {
      // s.length-1 is last val
      // s[4][1]
      let currentMin = this.s[this.s.length - 1][1]
      this.s.push([val, Math.min(val, currentMin)])
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.s.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1][0]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/