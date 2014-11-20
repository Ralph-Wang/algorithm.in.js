var Grades = function () {
  this.grades = [];
};

Grades.prototype.push = function (item) {
  this.grades.push(item);
};

Grades.prototype.sum = function () {
  var i;
  var sum = 0;
  for (i = 0, l = this.grades.length; i < l; i ++) {
      sum += this.grades[i];
  }
  return sum;
};

Grades.prototype.avg = function () {
  return this.sum() / this.grades.length;
};


g = new Grades();

for (var i = 0; i < 100; i ++) {
  g.push(Math.round(Math.random() * 40 + 60));
}

console.log(g.avg())
