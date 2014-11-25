var Deque = function () {
  this.items = [];
};

Object.defineProperty(Deque.prototype, 'length', {
  get: function() {
    return this.items.length;
  }
});

Object.defineProperty(Deque.prototype, 'empty', {
  get: function() {
    return this.length === 0;
  }
});

Object.defineProperty(Deque.prototype, 'front', {
  get: function() {
    return this.items[0];
  }
});

Object.defineProperty(Deque.prototype, 'back', {
  get: function() {
    return this.items[this.length-1];
  }
});


Deque.prototype.push = function(item) {
  this.items.push(item);
};

Deque.prototype.pushFront = function(item) {
  this.items.unshift(item);
};

Deque.prototype.pop = function() {
  return this.items.pop();
};

Deque.prototype.popFront = function() {
  return this.items.shift();
};

module.exports = Deque;

if (!module.parent) {
  var d = new Deque();
  d.push(1);
  d.push(2);
  console.log(d.popFront());
  d.push(3);
  d.push(4);
  console.log(d.pop());
  console.log(d.popFront());
  console.log(d.pop());
}
