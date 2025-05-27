class Stack {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
      return this.items.length
  }

  pop() {
      if (this.isEmpty()) { 
          return undefined
      }
      return this.items.pop();
  }

  peek() {
      if (this.isEmpty()) { 
          return undefined
      }
      return this.items[this.items.length - 1];
  }

  isEmpty() {
      return this.items.length === 0;
  }

  size() {
      return this.items.length;
  }

  clear() {
      this.items = [];
  }
}

module.exports = Stack;
