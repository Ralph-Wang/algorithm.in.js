var Node = function (e) {
  this.element = e;
  this.next = null;
};

HEAD = 'head9987';

var LinkedList = function () {
  this.head = new Node(HEAD);
  this.pos = 1;
};

LinkedList.prototype.find = function (e) {
  var cur = this.head;
  while (cur.next !== null) {
    if (cur.element === e) {
      break;
    }
    cur = cur.next;
  }
  return cur;
};

LinkedList.prototype.findPre = function (e) {
  var cur = this.head;
  while (cur.next !== null) {
    if (cur.next.element === e) {
      break;
    }
    cur = cur.next;
  }
  return cur;
};

LinkedList.prototype.insert = function (newOne, e) {
  var p = this.find(e);
  var newNode = new Node(newOne);
  newNode.next = p.next;
  p.next = newNode;
};

LinkedList.prototype.remove = function (e) {
  var p = this.findPre(e);
  if (p.next !== null) {
    p.next = p.next.next;
  }
};

LinkedList.prototype.toArray = function () {
  var l = [];
  var cur = this.head;
  while (cur.next !== null) {
    cur = cur.next;
    l.push(cur.element);
  }
  return l;
};

LinkedList.prototype.advance = function (n) {
  this.pos += n;
};

LinkedList.prototype.back = function (n) {
  this.pos -= n;
};

LinkedList.prototype.show = function () {
  var step = 0;
  var cur = this.head;
  while (step < this.pos && cur.next !== null) {
    cur = cur.next;
    step++;
  }
  return cur.element;
};

if (!module.parent) {
  var ll = new LinkedList();
  ll.insert('Hello', HEAD);
  ll.insert('World!', 'Hello');
  ll.insert('Fuck', HEAD);
  console.log(ll.toArray().join(' '));
  console.log(ll.show());
  ll.advance(2);
  console.log(ll.show());
  ll.back(1);
  console.log(ll.show());
}
