// Node constructor: represents a single node in the list
function Node(val) {
  this.val = val;      // Holds the data
  this.next = null;    // Pointer to the next node
}

// Linked List constructor: initializes an empty list
var MyLinkedList = function () {
  this.head = null;    // Reference to the first node
  this.size = 0;       // Tracks the number of nodes
};

// Returns the value of the node at the given index
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;  // Out of bounds check
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;  // Traverse to the desired index
  }
  return curr.val;
};

// Inserts a new node at the beginning of the list
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;   // Link new node to current head
  this.head = newNode;        // Update head to the new node
  this.size++;
};

// Inserts a new node at the end of the list
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    // If list is empty, make new node the head
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;  // Traverse to the last node
    }
    curr.next = newNode; // Append new node at the end
  }
  this.size++;
};

// Inserts a new node at a specific index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;      // Invalid index
  if (index === 0) return this.addAtHead(val);     // Insert at beginning
  if (index === this.size) return this.addAtTail(val); // Insert at end

  const newNode = new Node(val);
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;  // Traverse to node before target index
  }
  newNode.next = curr.next;  // Link new node to next node
  curr.next = newNode;       // Link previous node to new node
  this.size++;
};

// Deletes the node at the specified index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;  // Invalid index check
  if (index === 0) {
    // Remove the head node
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;  // Traverse to node before the one to delete
    }
    curr.next = curr.next.next;  // Skip over the node being deleted
  }
  this.size--;
};
