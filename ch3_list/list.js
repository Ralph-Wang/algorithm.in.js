var List = function () {
  this.items = [];
  this.pos = 0;
};

Object.defineProperty(List.prototype, 'length', {
  get: function () {
    return this.items.length;
  }
});

List.prototype.clear = function () {
  this.items = this.items.filter(function () {return false;});
};

List.prototype.toString = function () {
  return this.items;
};

List.prototype.getElement = function () {
  if (this.length === 0) {
    return null;
  }
  return this.items[this.pos];
};

List.prototype.insert = function (item) {
  this.items.slice(this.pos + 1, 0, item);
};

List.prototype.append = function (item) {
  this.items.push(item);
};

List.prototype.remove = function (item) {
  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
};

List.prototype.front = function () {
  this.pos = 0;
};

List.prototype.end = function () {
  this.pos = this.length - 1;
};

List.prototype.prev = function () {
  if (this.pos > 0) {
    this.pos--;
  }
};

List.prototype.next = function () {
  if (this.pos < this.length - 1) {
    this.pos++;
  }
};

List.prototype.curPos = function () {
  return this.pos;
};

List.prototype.moveTo = function (pos) {
  if (pos >=0 && pos < this.length) {
    this.pos = pos;
  }
};

module.exports = List;
