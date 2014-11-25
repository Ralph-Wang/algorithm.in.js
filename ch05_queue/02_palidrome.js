var Deque = require('./deque');

var isPalidrome = function (s) {
  var r = '';
  var d = new Deque();
  for (var i = 0, l = s.length; i < l; i ++) {
      var v = s[i];
      d.push(v);
  }
  while (!d.empty) {
    r += d.pop();
  }
  return r === s;
};

console.log(isPalidrome('abc'));
console.log(isPalidrome('aba'));
