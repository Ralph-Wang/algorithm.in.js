var Stack = require('./stack');

var toSuffix = function (s) {
  var ops = '+-*/';
  var opStack = new Stack();
  var numStack = new Stack();
  var ret = '';
  for (var i = 0, l = s.length; i < l; i ++) {
      var v = s[i];
      if (ops.indexOf(v) > -1) {
        opStack.push(v);
      } else {
        numStack.push(v);
      }
  }
  ret += numStack.pop();
  while (opStack.top !== 0 && numStack.top !== 0) {
    ret += numStack.pop();
    ret += opStack.pop();
  }
  return ret;
};

console.log(toSuffix('1+2'));
console.log(toSuffix('3*2'));
