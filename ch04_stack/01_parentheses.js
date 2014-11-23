var Stack = require('./stack');

var parentheseMatch = function (s) {
  var stack = new Stack();
  for (var i = 0, l = s.length; i < l; i ++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    }
    if (s[i] === ')') {
      if (stack.top === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.top === 0;
};

console.log(parentheseMatch('2.3 + 23 / 12 + (3.14159×0.24'));
console.log(parentheseMatch('(((abcdefg)))'));
