var Soldier = function (name) {
  this.name = name;
  this.next = null;
};

HEAD = 'nosuchone';

var Circle = function () {
  this.head = new Soldier(HEAD);
  this.head.next = this.head;
  this.cur = this.head;
};

Object.defineProperty(Circle.prototype, 'length', {
  get: function () {
    var n = 0;
    cur = this.head;
    while (cur.next.name !== HEAD) {
      cur = cur.next;
      n++;
    }
    return n;
  }
});

Circle.prototype.append = function (e) {
  var cur = this.head;
  var newNode = new Soldier(e);
  while (cur.next.name !== HEAD) {
    cur = cur.next;
  }
  newNode.next = cur.next;
  cur.next = newNode;
};

Circle.prototype.findPre = function (toFind) {
  var cur = this.head;
  while (cur.next.name !== HEAD && cur.next.name !== toFind) {
    cur = cur.next;
  }
  return cur;
};

Circle.prototype.advance = function (n) {
  for (var i = 0; i < n; i ++) {
    if (this.cur.name === HEAD) {
      this.cur = this.cur.next;
    }
    this.cur = this.cur.next;
  }
  if (this.cur.name === HEAD) {
    this.cur = this.cur.next;
  }
};

Circle.prototype.remove = function (toRemove) {
  var p = this.findPre(toRemove);
  p.next = p.next.next;
  this.cur = p.next;
};

Circle.prototype.toArray = function () {
  var l = [];
  var cur = this.head;
  while (cur.next.name !== HEAD) {
    cur = cur.next;
    l.push(cur.name);
  }
  return l;
};

var c = new Circle();
for (var i = 1, l = 41; i <= l; i ++) {
  c.append(i);
}

// console.log(c.toArray());

while (c.length > 2) {
  c.advance(2);
  c.remove(c.cur.name);
}
console.log(c.toArray());
