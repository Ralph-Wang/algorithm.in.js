var Letters = function () {
  this.letters = [];
};

Letters.prototype.push = function (letter) {
  this.letters.push(letter);
  return this;
};

Letters.prototype.toWord = function () {
  return this.letters.join('');
};

var l = new Letters();
l.push('H')
.push('e')
.push('l')
.push('l')
.push('o');

console.log(l.toWord());
