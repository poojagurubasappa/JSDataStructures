class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if(node == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if(data < node.data) {
          if(node.left == null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if(node.right == null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }

  findMinHeight(node = this.root){
    if(node == null) {
      return -1;
    };

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }


  findMaxHeight(node = this.root) {
    if(node == null) {
      return -1;
    }

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }


  isBalancedTree() {
    if(this.findMinHeight() >= (this.findMaxHeight() - 1)) {
      return true;
    } else {
      return false;
    }
  }

  inOrder() {
    if(this.root == null) {
      return null;
    } else {
      var result = [];
      function traversal(node){
        if(node.left) {
          traversal(node.left);
        }
        result.push(node.data);
        if(node.right) {
          traversal(node.right);
        }
      }
      traversal(this.root);
      return result;
    }
  }

  /*inorderShortCircuit() {
    if(this.root == null) {
      return null;
    }  else {
      var result = new Array();
      function traversalInOrder(node) {
        node.left && traversalInOrder(node.left);
        result.push(node.data);
        node.right && traversalInOrder(node.right);
      }
      traversalInOrder(this.root);
      return result;
    }
  }*/

  preOrder() {
    if(this.root == null) {
      return null;
    } else {
      var result = [];
      function traversalPreOrder(node) {
        result.push(node.data);
        if(node.left){
          traversalPreOrder(node.left);
        }
        if(node.right) {
          traversalPreOrder(node.right);
        }
      }
      traversalPreOrder(this.root);
      return result;
    }
  }


  postOrder() {
    if(this.root == null) {
      return null;
    } else {
      var result = [];
      function traversalPostOrder(node){
        if(node.left) {
          traversalPostOrder(node.left);
        }
        if(node.right) {
          traversalPostOrder(node.right);
        }
        result.push(node.data);
      }
      traversalPostOrder(this.root);
      return result;
    }
  }
}

var myBST = new BST();
myBST.add(1);
myBST.add(2);
myBST.add(3);
myBST.add(0);
myBST.add(4);
myBST.add(1);
console.log(myBST);
console.log(myBST.findMinHeight());
console.log(myBST.findMaxHeight());
console.log(myBST.isBalancedTree());
console.log(myBST.inOrder());
console.log(myBST.preOrder());
console.log(myBST.postOrder());
