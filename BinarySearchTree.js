/*The left subtree of a node contains only nodes with keys lesser than the node’s key.
The right subtree of a node contains only nodes with keys greater than the node’s key.
The left and right subtree each must also be a binary search tree.
There must be no duplicate nodes.*/

/*Searching a key
To search a given key in Bianry Search Tree, we first compare it with root,
if the key is present at root, we return root.
If key is greater than root’s key, we recur for right subtree of root node.
Otherwise we recur for left subtree.*/



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
      };
      return searchTree(node);
    }
  }

  findMax() {
    let current = this.root;
    while(current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  findMin() {
    let current = this.root;
    while(current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  isPresent(data) {
    let current = this.root;
    while(current) {
      if(data == current.data) {
        return true;
      }
      if(data < current.data) {
        current = current.left;
      }
      else if(data > current.data) {
        current = current.right;
      }
    }
    return false;
  }

  found(data) {
    let current = this.root;
    while(current !== null) {
      if(data == current.data) {
        return current;
      } else {
        if(data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
    }
    }
    return "Not Found";
  }

  remove(data) {
    const removeNode = function(node, data) {
      if(node == null) {
        return null;
      }
      if(data == node.data) {
        if(node.left == null && node.right == null) {
          return null;
        };
        if(node.left == null) {
          return node.right;
        };
        if(node.right == null) {
          return node.left;
        };

        //if node has children
        var tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }


}

var myTree = new BST();
myTree.add(9);
console.log(myTree);
myTree.add(12);
console.log(myTree);
myTree.add(23);
console.log(myTree);
myTree.add(13);
console.log(myTree);
myTree.add(13);
console.log(myTree.findMax());
console.log(myTree.findMin());
console.log(myTree.isPresent(13));
console.log(myTree.isPresent(0));
console.log(myTree.found(0));
console.log(myTree.found(12));
myTree.remove(12);
console.log(myTree);
console.log(myTree.found(12));
