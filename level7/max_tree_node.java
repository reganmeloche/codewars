/*
You are given a binary tree. Implement the method findMax which returns the maximal node valuein the tree.

For example, maximum in the following Tree is 11.

              7
            /   \ 
           /     \
          5       2
           \       \
           6        11          
           /\      /
          1  9   4
          
Note:
Tree node values range is Integer MIN VALUE - Integer MAX VALUE constants.
Tree can unbalanced and unsorted.
Root node is always not null.
You are given a tree node class as follows:

class TreeNode {
  TreeNode  left;
  TreeNode  right;
  int value;
}

*/

public class FindMaxValueInTree {

    static int findMax(TreeNode  root) {
        Integer lMax = Integer.MIN_VALUE;
        Integer rMax = Integer.MIN_VALUE;
        
        if (root.left != null) {
          lMax = findMax(root.left);
        }
        
        if (root.right != null) {
          rMax = findMax(root.right);
        }
        return Math.max(root.value, Math.max(lMax, rMax));
    }
    
}
