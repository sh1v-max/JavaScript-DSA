// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/

// intuition:
// postorder: left -> right -> root, we need to process node after both subtrees
// we will use two stacks
// the first one to simulate a preorder traversal
// and then push nodes from the first stack to the second stack
// the second stack will have nodes in Root → Right → Left order

// approach: iterative (using two stack)
// use two stack, s1, and s2
// push root to s1
// while s1 is not empty
// pop a node curr from s1 and push to s2
// then push curr.left and curr.right to s1
// once s1 is empty, s2 will have nodes in root -> right -> left order
// pop all the nodes and add to res
// return res

function postorderTraversal(root) {
    if (!root) return [];

    let stack1 = [root];
    let stack2 = [];
    let res = [];

    while (stack1.length > 0) {
        let curr = stack1.pop();
        stack2.push(curr);

        if (curr.left) stack1.push(curr.left);
        if (curr.right) stack1.push(curr.right);
    }

    // now s2 has nodes in preorder
    // reversing gives left -> right -> root (postorder)
    while (stack2.length > 0) {
        res.push(stack2.pop().val);
    }

    return res
}

// time: O(n)
// space: O(n)
