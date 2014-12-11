
var init = function (n, max) {
  n = n || 10;
  max = max || 100;
  var l = [];
  for (var i = 0;i < n;i++) {
    l.push(Math.floor(Math.random() * max + 1));
  }
  return l;
};

var swap = function (lst, i, j) {
  var tmp = lst[i];
  lst[i] = lst[j];
  lst[j] = tmp;
};

var search = function (lst, v) {
  for (var i = 0;i < lst.length;i++) {
    if (v == lst[i]) {
      if (i > 0) {
        swap(lst, i, i-1);
      }
      return i;
    }
  }
  return -1;
};

var l = init(20);
console.log(l);
var l2 = init(l.length, l.length);
var i,j,s;
for (i = 0;i < l.length;i++) {
  s = l[i];
  console.log('search for ' + s + ' ' + l2[i] + ' times');
  for (j = 0; j < l2[j];j++) {
    search(l, s);
  }
}
console.log(l);
