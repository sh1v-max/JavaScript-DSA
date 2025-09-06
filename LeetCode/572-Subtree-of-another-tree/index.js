// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/

// given two trees, return true if t1 is a subtree of t2

// a subtree of a binary tree is a tree that consists of a node in tree and all of this node's descendants
// the tree could also be it's subtree

// example:
// t1 = [3,4,5,1,2]
// t2 = [4,1,2]
// return true

// explanation:
//         t1:
//          3
//        /   \
//       4     5
//      / \
//     1   2
//
//         t2:
//         4
//        / \
//       1   2

// example 2:
// t1 = [3,4,5,1,2,null,null,null,null,0]
// t2 = [4,1,2]
// return false

// explanation:
//         t1:
//          3
//        /   \
//       4     5
//      / \
//     1   2
//        /
//       0
//
//         t2:
//         4
//        / \
//       1   2

// brute force
// comparing all the nodes of t1 with all the nodes of t2
// time: O(n^2) or O(n x m)

// approach:
// recursive fun isSameTree(p, q) that checks if two are same or not
// traverse root recursively
// at each node, check isSameTrue(node, subRoot)
// return true if it's true
// else call recursion on node.left and node.right

function isSubtree(root, subRoot) {
  if (!root) return false
  function isSameTree(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  )
  // return true if
  // current node matches
  // or left subtree matches
  // or right subtree matches
}

// time: O(nm)
// space: O(n + m)
// n and m are number of nodes in root and subRoot

// Optimized Approach: Serialization + Substring Search

// Instead of recursively comparing subRoot with every node in root (brute force),
// we can convert both trees into strings and then just check if one string is
// contained in the other.

// Key Insight:
// If two trees are identical in structure + values, their serialized strings
// (with null markers) will also match exactly.
// So, subRoot being a subtree of root ⇔ subRoot’s serialized string appears
// as a substring in root’s serialized string.

// Steps:
// 1. Serialize the `root` tree using preorder traversal (Root → Left → Right).
//    - While serializing, add:
//        • A delimiter "-" before every node value (prevents value merging issues).
//        • A special marker "#” for null nodes (ensures structure is preserved).
// 2. Serialize the `subRoot` tree in the same way.
// 3. Compare the two serialized strings by checking if subRoot’s string
//    is a substring of root’s string (using `.includes()`).

// Example:
// Tree (root):
//       3
//      / \
//     4   5
//    / \
//   1   2
//
// Tree (subRoot):
//     4
//    / \
//   1   2

// Serialized root:    "-3-4-1-#-#-2-#-#-5-#-#"
// Serialized subRoot: "-4-1-#-#-2-#-#"

// Substring check: rootString.includes(subRootString) → true

// Complexity:
// - Serialization: O(n + m)  (visit every node once).
// - Substring search:
//      → O(n*m) with naive `.includes()`
//      → O(n+m) with KMP (if implemented).
// - Space: O(n + m) for serialized strings.
//
// This makes it significantly faster and cleaner than brute force recursion

var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root)
  let hashSubRoot = serialize(subRoot)
  // now we just need to check if hashSubRoot is a substring of hashRoot
  return hashRoot.includes(hashSubRoot)

  // return kmpSearch(hashRoot, hashSubRoot)
}

let serialize = function (root) {
  let hash = ''

  let traversal = (curr) => {
    if (!curr) {
      // bc we need to add null nodes too
      hash = hash + '-#'
      return
    }
    hash = hash + '-' + curr.val
    traversal(curr.left)
    traversal(curr.right)
  }
  traversal(root)
  return hash
}

// kmp algo
function kmpSearch(text, pattern) {
  if (!pattern.length) return true

  // Build LPS (Longest Prefix Suffix) array for the pattern
  let lps = buildLPS(pattern)

  let i = 0,
    j = 0
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++
      j++
      if (j === pattern.length) {
        return true // found match
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1] // jump in pattern
      } else {
        i++ // move in text
      }
    }
  }
  return false
}

// to find lps
function buildLPS(pattern) {
  let lps = new Array(pattern.length).fill(0)
  let len = 0,
    i = 1

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len !== 0) {
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }
  return lps
}
