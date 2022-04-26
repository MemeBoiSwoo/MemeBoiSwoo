class TreeNode {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let tree = new TreeNode('*');
tree.left = new TreeNode('+');
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(2);
tree.right = new TreeNode('+');
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

console.log(evalMyTree(tree));

function evalMyTree(root) {
    if (root == null) {
        return 0;
    }

    let leftEval = evalMyTree(root.left);
    let rightEval = evalMyTree(root.right);

    switch (root.data) {
        case '+':
            return leftEval + rightEval;
            break;
        case '-':
            return leftEval - rightEval;
            break;
        case '*':
            return leftEval * rightEval;
            break;
        case '/':
            return leftEval / rightEval;
            break;
    }

    return root.data;
}

// This problem was asked by Microsoft.

// Suppose an arithmetic expression is given as a binary tree. 
// Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.