var WeightItem = function (value, weight) {
  this.value = value;
  this.weight = weight;
};

var WeigthQueue = function () {
  this.items = [];
};

Object.defineProperty(WeigthQueue.prototype, 'length', {
  get: function() {
    return this.items.length;
  }
});

Object.defineProperty(WeigthQueue.prototype, 'empty', {
  get: function() {
    return this.length === 0;
  }
});

Object.defineProperty(WeigthQueue.prototype, 'front', {
  get: function() {
    return this.items[0];
  }
});

Object.defineProperty(WeigthQueue.prototype, 'back', {
  get: function() {
    return this.items[this.length-1];
  }
});

WeigthQueue.prototype.enqueue = function (item) {
  if (this.empty) {
    this.items.push(item);
    return;
  }
  toMove = [];
  while (!this.empty && this.back.weight < item.weight) {
    toMove.push(this.items.pop());
  }

  this.items.push(item);

  while (toMove.length !== 0) {
    this.items.push(toMove.pop());
  }
};

WeigthQueue.prototype.dequeue = function () {
  return this.items.shift();
};

exports.WeightItem = WeightItem;
exports.WeigthQueue = WeigthQueue;

if (!module.parent) {
  var w = new WeigthQueue();
  w.enqueue(new WeightItem('5', 5));
  w.enqueue(new WeightItem('7', 7));
  w.enqueue(new WeightItem('3', 3));
  w.enqueue(new WeightItem('4', 4));
  w.enqueue(new WeightItem('5', 5));
  while (!w.empty) {
    console.log(w.dequeue());
  }
}
