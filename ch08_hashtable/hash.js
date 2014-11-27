var hash = function (key) {
  key = '' + key;
  var H = 37; // 霍纳常数
  var v = 0;
  for (var i = 0, l = key.length; i < l; i ++) {
    v += H * v + key.charCodeAt(i);
  }
  return v % this.size;
};

/*
 * 开放寻址法
 */

var OAHash = function () {
  this.size = 137;
  this.keys = new Array(this.size);
  this.values = new Array(this.size);

  this.hash = hash;
};

OAHash.prototype.put = function (key, value) {
  var hash_key = this.hash(key);
  while (this.keys[hash_key] !== undefined) {
    // rehash
    hash_key = (hash_key + 1) % this.size;
  }
  this.keys[hash_key] = key;
  this.values[hash_key] = value;
};
OAHash.prototype.get = function (key) {
  var hash_key = this.hash(key);
  while (this.keys[hash_key] !== key) {
    // rehash
    hash_key = (hash_key + 1) % this.size;
  }
  return this.values[hash_key];

};

/*
 * SCHash 开链法
 */

var SCHash = function () {
  this.size = 137;
  this.items = new Array(this.size);
  for (var i=0;i<this.items.length;i++) {
    this.items[i] = [];
  }

  this.hash = hash;
};

SCHash.prototype.put = function (key, value) {
  var hash_key = this.hash(key);
  var idx = 0;
  while (this.items[hash_key][idx] !== undefined) {
    // 链向后移动
    idx += 2;
  }
  this.items[hash_key][idx] = key;
  this.items[hash_key][idx+1] = value;
};

SCHash.prototype.get = function (key) {
  var hash_key = this.hash(key);
  var idx = 0;
  while (this.items[hash_key][idx] !== key &&
    this.items[hash_key][idx] !== undefined) {
    idx += 2;
  }
  return this.items[hash_key][idx+1];
};



exports.OAHash = OAHash;
exports.SCHash = SCHash;
