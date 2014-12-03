var Node = function (data) {
  this.data = data;
  this.count = 1;
  this.left = null;
  this.right = null;
};

Node.prototype.show = function () {
  return {data: this.data, count: this.count};
};

Node.prototype.increment = function(n) {
  this.count += n;
};

var BST = function () {
  this.root = null;
};

BST.prototype.insert = function (value) {
  if (this.root === null) {
    this.root = new Node(value);
  } else {
    var cur = this.root;
    var parent;
    while (true) {
      parent = cur;
      if (value < cur.data) {
        cur = cur.left;
        if (cur === null) {
          parent.left = new Node(value);
          break;
        }
      } else if (value > cur.data) {
        cur = cur.right;
        if (cur === null) {
          parent.right = new Node(value);
          break;
        }
      } else { // value === cur.data
        cur.increment(1);
        break;
      }
    }
  }
};

BST.prototype.inOrder = function () {
  return this.inOrderHelper(this.root);
};

BST.prototype.inOrderHelper = function (node) {
  if (node === null) {
    return '';
  }
  return this.inOrderHelper(node.left) + ' ' +
    node.data + ' ' + 
    this.inOrderHelper(node.right);
};

BST.prototype.preOrder = function () {
  return this.preOrderHelper(this.root);
};

BST.prototype.preOrderHelper = function (node) {
  if (node === null) {
    return '';
  }
  return node.data + ' ' + 
    this.preOrderHelper(node.left) + ' ' +
    this.preOrderHelper(node.right);
};

BST.prototype.postOrder = function () {
  return this.postOrderHelper(this.root);
};

BST.prototype.postOrderHelper = function (node) {
  if (node === null) {
    return '';
  }
  return this.postOrderHelper(node.left) + ' ' +
    this.postOrderHelper(node.right) + ' ' + 
    node.data;
};

BST.prototype.getMax = function(node) {
  var cur = node || this.root;
  while (cur.right !== null) {
    cur = cur.right;
  }
  return cur;
};

BST.prototype.getMin = function(node) {
  var cur = node || this.root;
  while (cur.left !== null) {
    cur = cur.left;
  }
  return cur;
};

BST.prototype.get = function(value) {
  var cur = this.root;
  while (cur !== null) {
    if (value < cur.data) {
      cur = cur.left;
    } else if (value > cur.data) {
      cur = cur.right;
    } else { // value === cur.data
      break;
    }
  }
  return cur;
};

BST.prototype.remove = function (value) {
  this.root = this.removeHelper(this.root, value);
};

BST.prototype.removeHelper = function (node, value) {
  if (node === null) {
    return null;
  }
  if (value < node.data) {
    node.left = this.removeHelper(node.left, value);
    return node;
  } else if (value > node.data) {
    node.right = this.removeHelper(node.right, value);
    return node;
  } else { // value === node.data
    if (node.left === null && node.right === null) {
      // 叶子节点
      return null;
    }

    if (node.left === null) {
      // 左节点为空
      return node.right;
    }

    if (node.right === null) {
      // 右节点为空
      return node.left;
    }

    // 中层节点
    var tmpNode = this.getMin(node.right);
    node.data = tmpNode.data;
    node.count = tmpNode.count;
    node.right = this.removeHelper(node.right, tmpNode.data);
    return node;
  }
};

BST.prototype.nodeCount = function (node) {
  if (node === null) {
    return 0;
  }
  var cur = node || this.root;
  var count = 0;
  count += (cur===null)?0:1;
  return count + this.nodeCount(cur.left) + this.nodeCount(cur.right);
};

BST.prototype.edgeCount = function (node) {
  if (node === null) {
    return 0;
  }
  var cur = node || this.root;
  var count = 0;
  count += (cur.left)?1:0;
  count += (cur.right)?1:0;
  return count + this.edgeCount(cur.left) + this.edgeCount(cur.right);
};

module.exports = BST;

if (!module.parent) {
  var bst = new BST();
  bst.insert(23);
  bst.insert(45);
  bst.insert(16);
  bst.insert(16);
  bst.insert(37);
  bst.insert(3);
  bst.insert(3);
  bst.insert(99);
  bst.insert(22);
  console.log(bst.inOrder());
  console.log(bst.preOrder());
  console.log(bst.postOrder());
  console.log(bst.getMax());
  console.log(bst.getMin());
  console.log(bst.get(22));
  console.log('nodes: ' + bst.nodeCount());
  console.log('edge: ' + bst.edgeCount());
  bst.remove(16);
  console.log(bst.inOrder());
  console.log('nodes: ' + bst.nodeCount());
  console.log('edge: ' + bst.edgeCount());
}
