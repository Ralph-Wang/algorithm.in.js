var BST = require('./bst');
var fs = require('fs');

var bst = new BST();

bst.wordsCount = function(node) {
  var cur = (node === undefined)?this.root:node;
  if (cur === null) {
    return;
  }
  this.wordsCount(cur.left);
  console.log(cur.data, cur.count);
  this.wordsCount(cur.right);
};

var content = fs.readFileSync('this.txt').toString();

var words = content.split(/\s/);
var word;

for (var i = 0, l = words.length; i < l; i ++) {
  word = words[i].replace(/\W/g, '');
  if (!!word) {
    bst.insert(word);
  }
}

bst.wordsCount();
