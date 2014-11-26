var Dict = function () {
  this.items = [];
};

Dict.prototype.add = function (key, value) {
  this.items[key] = value;
};

Dict.prototype.find = function (key) {
  return this.items[key];
};

Dict.prototype.remove = function (key) {
  delete this.items[key];
};

Dict.prototype.display = function () {
  for (var key in this.items) {
    console.log(key + ' -> ' + this.items[key]);
  }
};

Dict.prototype.count = function () {
  var count = 0;
  for (var key in this.items) {
    count++;
  }
  return count;
};

Dict.prototype.clear = function () {
  this.items = [];
};

if (!module.parent) {
  var d = new Dict();
  d.add('me', 'Ralph-Wang');
  d.add('age', 25);
  d.add('job', 'SDT');
  d.display();
  console.log(d.count());
}
