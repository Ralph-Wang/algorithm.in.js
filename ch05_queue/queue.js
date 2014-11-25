var Queue = function () {
  this.items = [];
};

Object.defineProperty(Queue.prototype, 'length', {
  get: function () {
    return this.items.length;
  }
});

Object.defineProperty(Queue.prototype, 'front', {
  get: function () {
    return this.items[0];
  }
});

Object.defineProperty(Queue.prototype, 'back', {
  get: function () {
    return this.items[this.length-1];
  }
});

Object.defineProperty(Queue.prototype, 'empty', {
  get: function () {
    return this.items.length === 0;
  }
});

Queue.prototype.enqueue = function (item) {
  this.items.push(item);
};

Queue.prototype.dequeue = function () {
  return this.items.shift();
};

module.exports = Queue;

if (!module.parent) {
  var q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  while (!q.empty) {
    console.log(q.dequeue());
  }
}
