// Node constructor to create a new node with a value and next pointer
function Node(val) {
  this.val = val;
  this.next = null;
}

// Constructor for the LinkedList
var MyLinkedList = function () {
  this.head = null;   // Start with an empty list
  this.size = 0;      // Tracks the number of nodes
};

// Get the value at a specific index
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1; // Invalid index check
  let curr = this.head;
  for (let i = 0; i < index; i++) curr = curr.next; // Traverse to the index
  return curr.val;
};

// Add a node at the beginning of the list
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);       // Create a new node
  newNode.next = this.head;            // Link it to current head
  this.head = newNode;                 // Make new node the head
  this.size++;                         // Increase size
};

// Add a node at the end of the list
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);       // Create a new node
  if (!this.head) this.head = newNode; // If list is empty, make it head
  else {
    let curr = this.head;
    while (curr.next) curr = curr.next; // Traverse to the last node
    curr.next = newNode;                // Link the last node to new node
  }
  this.size++;                          // Increase size
};

// Add a node at a specific index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return; // Invalid index
  if (index === 0) return this.addAtHead(val); // If at head
  if (index === this.size) return this.addAtTail(val); // If at tail

  const newNode = new Node(val);       // Create new node
  let curr = this.head;
  for (let i = 0; i < index - 1; i++) curr = curr.next; // Stop one before index

  newNode.next = curr.next;  // Link new node to next node
  curr.next = newNode;       // Link previous node to new node
  this.size++;               // Increase size
};

// Delete a node at a specific index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return; // Invalid index
  if (index === 0) this.head = this.head.next; // Remove head
  else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) curr = curr.next; // Stop one before
    curr.next = curr.next.next; // Skip over the node to delete it
  }
  this.size--; // Decrease size
};
