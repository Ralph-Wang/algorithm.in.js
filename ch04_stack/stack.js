var Stack = function () {
  this.items = [];
  this.top = 0;
};

Object.defineProperty(Stack.prototype, 'length', {
  value: this.top
});

Stack.prototype.push = function (item) {
  this.items[this.top++] = item;
};

Stack.prototype.pop = function (item) {
  return this.items[--this.top];
};

Stack.prototype.peek = function (item) {
  return this.items[this.top-1];
};

module.exports = Stack;
