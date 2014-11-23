var Stack = require('./stack');

var COLOR = {
  yellow: 0,
  white: 1,
  red: 2
};

var removeYellow = function (pez) {
  var keep = new Stack();
  var ret = [];
  for (var i = 0, l = pez.length; i < l; i ++) {
      var v = pez[i];
      if (v !== COLOR.yellow) {
        keep.push(v);
      }
  }
  while (keep.top !== 0) {
    ret.splice(0, 0, keep.pop());
  }
  return ret;
};

pez = [COLOR.yellow, COLOR.red, COLOR.red, COLOR.yellow,
    COLOR.white, COLOR.yellow];

console.log(removeYellow(pez)); // 2, 2, 1
