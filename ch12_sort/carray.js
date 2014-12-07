var CArray = function () {
  this.items = [];
};

Object.defineProperty(CArray.prototype, 'length', {
  get: function() {
    return this.items.length;
  }
});

CArray.prototype.insert = function (item) {
  this.items.push(item);
};

CArray.prototype.toString = function () {
  var ret = [];
  for (var i = 0;i < this.length;i++) {
    ret += ' ' + this.items[i];
  }
  return ret;
};

CArray.prototype.clear = function () {
  this.items = [];
};

CArray.prototype.initRandom = function (n) {
  n = n || 10;
  for (var i=0;i<n;i++) {
    this.items.push(Math.floor(Math.random() * 100 + 1));
  }
};

CArray.prototype.swap = function (i, j) {
  var t = this.items[i];
  this.items[i] = this.items[j];
  this.items[j] = t;
};

CArray.prototype.bubbleSort = function () {
  var l = this.length;
  var sorted;
  for (var outer = l-1;outer > 1;outer--) {
    sorted = true;
    for (var inner = 0;inner < outer; inner++) {
      if (this.items[inner] > this.items[inner+1]) {
        sorted = false;
        this.swap(inner, inner+1);
      }
    }
    if (sorted) {
      break;
    }
  }
};

CArray.prototype.selectSort = function () {
  var min;
  var l = this.length;
  for (var outer=0;outer < this.length -1;outer++) {
    min = outer;
    for (var inner=outer;inner < this.length; inner++) {
      if (this.items[min] > this.items[inner]) {
        min = inner;
      }
    }
    if (min != outer) {
      this.swap(min, outer);
    }
  }
};

CArray.prototype.insertSort = function () {
  var l = this.length;
  var move;
  for (var outer = 0; outer < this.length; outer++) {
    move = this.items[outer];
    for (var inner = outer; inner > 0 && this.items[inner-1] >= move; inner--) {
      this.items[inner] = this.items[inner-1];
    }
    this.items[inner] = move;
  }
};

CArray.prototype.shellSort = function () {
  var gaps = [57, 23, 10, 4, 1];
  var tmp;
  for (var g = 0; g < gaps.length; g++) { // loop gaps
    for (var i = gaps[g]; i < this.items.length; i++) { //loop from first gap
      tmp = this.items[i];
      for (var j = i; j >= gaps[g] && this.items[j-gaps[g]] > tmp;j -= gaps[g]) {
        this.items[j] = this.items[j-gaps[g]];
      }
      this.items[j] = tmp;
    }
  }
};

CArray.prototype.mergeSort = function () {
  if (this.items.length < 2) {
    return;
  }
  var left, right;
  var step = 1;
  while (step < this.items.length) {
    left = 0;
    right = step;
    while (right + step <= this.items.length) {
      this.mergeSortHelper(this.items, left, left+step, right, right+step);
      left = right + step; // 前进两步
      right = left + step; // 前进两步
    }
    if (right < this.items.length) {
      this.mergeSortHelper(this.items, left, left+step, right, this.items.length);
    }
    step *= 2;
  }
};

CArray.prototype.mergeSortHelper = function (lst, leftStart, leftStop, rightStart, rightStop) {
  var l = [];
  var r = [];
  var i;
  for (i = leftStart; i< leftStop; i++) {
    l.push(this.items[i]);
  }
  l.push(Infinity);
  for (i = rightStart; i < rightStop && i < this.items.length; i++) {
    r.push(this.items[i]);
  }
  var m = 0, n = 0;
  r.push(Infinity);
  for (i = leftStart; i < rightStop; i++) {
    if (l[m] < r[n]) {
      lst[i] = l[m];
      m++;
    } else {
      lst[i] = r[n];
      n++;
    }
  }
};

CArray.prototype.quickSort = function () {
  this.quickSortHelper(0, this.items.length-1);
};

CArray.prototype.quickSortHelper = function (start, end) {
  if (start >= end) { // less than 1 item, no need to sort
    return;
  }
  var pivot = this.items[start];
  var pivotIdx = start;
  var i = start + 1;
  var n = end;
  while (i <= n) {
    if (this.items[i] < pivot) {
      this.swap(pivotIdx, i);
      pivotIdx = i;
      i++;
    } else {
      this.swap(n, i);
      n--;
    }
  }
  this.quickSortHelper(start, pivotIdx-1);
  this.quickSortHelper(pivotIdx+1, end);
};


var timeit = function (func) {
  var n = 10000;
  var start = new Date().getTime();
  for (var i=0;i<n;i++) {
    func();
  }
  var takes = new Date().getTime() - start;
  console.log(n + ' times call `' + func.name + '` takes: ' + takes + 'ms' + ', cps:' + (1000 * n/takes));
};

if (!module.parent) {
  var a = new CArray();
  var n = 1000;
  // bubbleSort
  timeit(function bubbleSort() {
  a.initRandom(n);
  a.bubbleSort();
  // console.log(a.toString());
  a.clear();
  });
  // selectSort
  timeit(function selectSort() {
    a.initRandom(n);
    a.selectSort();
    // console.log(a.toString());
    a.clear();
  });
  // insertSort
  timeit(function insertSort() {
    a.initRandom(n);
    a.insertSort();
    // console.log(a.toString());
    a.clear();
  });
  // shellSort
  timeit(function shellSort() {
    a.initRandom(n);
    a.shellSort();
    // console.log(a.toString());
    a.clear();
  });
  // mergeSort
  timeit(function mergeSort() {
    a.initRandom(n);
    a.mergeSort();
    // console.log(a.toString());
    a.clear();
  });
  // quickSort
  timeit(function quickSort() {
    a.initRandom(n);
    a.quickSort();
    // console.log(a.toString());
    a.clear();
  });

}

module.exports = CArray;
