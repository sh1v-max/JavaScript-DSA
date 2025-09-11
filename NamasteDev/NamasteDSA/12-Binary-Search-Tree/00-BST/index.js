// Node structure
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// BST class (recursive + iterative helpers)
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // Insert value (recursive)
  insert(val) {
    const insertNode = (node, val) => {
      if (!node) return new Node(val)
      if (val === node.val) return node // ignore duplicates; modify if you want counts
      if (val < node.val) node.left = insertNode(node.left, val)
      else node.right = insertNode(node.right, val)
      return node
    }
    this.root = insertNode(this.root, val)
  }

  // Search (recursive) — returns the node or null
  search(val) {
    const find = (node, val) => {
      if (!node) return null
      if (val === node.val) return node
      return val < node.val ? find(node.left, val) : find(node.right, val)
    }
    return find(this.root, val)
  }

  // Iterative search — returns boolean
  contains(val) {
    let curr = this.root
    while (curr) {
      if (val === curr.val) return true
      curr = val < curr.val ? curr.left : curr.right
    }
    return false
  }

  // Find min value node in subtree
  _minValueNode(node) {
    let current = node
    while (current && current.left) current = current.left
    return current
  }

  // Delete a value (recursive) — handles 3 cases
  delete(val) {
    const deleteNode = (node, val) => {
      if (!node) return null

      if (val < node.val) {
        node.left = deleteNode(node.left, val)
        return node
      } else if (val > node.val) {
        node.right = deleteNode(node.right, val)
        return node
      }

      // node.val === val -> delete this node
      // Case 1: no child
      if (!node.left && !node.right) return null

      // Case 2: one child
      if (!node.left) return node.right
      if (!node.right) return node.left

      // Case 3: two children
      // Find inorder successor (smallest in right subtree)
      const successor = this._minValueNode(node.right)
      node.val = successor.val
      node.right = deleteNode(node.right, successor.val)
      return node
    }

    this.root = deleteNode(this.root, val)
  }

  // Inorder traversal (left, root, right) — returns sorted array
  inorder() {
    const res = []
    const dfs = (node) => {
      if (!node) return
      dfs(node.left)
      res.push(node.val)
      dfs(node.right)
    }
    dfs(this.root)
    return res
  }

  // Preorder: root, left, right
  preorder() {
    const res = []
    ;(function dfs(node) {
      if (!node) return
      res.push(node.val)
      dfs(node.left)
      dfs(node.right)
    })(this.root)
    return res
  }

  // Postorder: left, right, root
  postorder() {
    const res = []
    ;(function dfs(node) {
      if (!node) return
      dfs(node.left)
      dfs(node.right)
      res.push(node.val)
    })(this.root)
    return res
  }

  // Level-order traversal (BFS)
  levelOrder() {
    const res = []
    if (!this.root) return res
    const q = [this.root]
    while (q.length) {
      const node = q.shift()
      res.push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    return res
  }
}

// Usage example / tests

// quick smoke test
const bst = new BinarySearchTree()
;[8, 3, 10, 1, 6, 14, 4, 7].forEach((n) => bst.insert(n))
console.log('Inorder (sorted):', bst.inorder()) // [1,3,4,6,7,8,10,14]
console.log('Contains 6?', bst.contains(6)) // true
console.log('Contains 2?', bst.contains(2)) // false

bst.delete(3) // delete node with two children
console.log('Inorder after deleting 3:', bst.inorder())
console.log('Level order:', bst.levelOrder())
