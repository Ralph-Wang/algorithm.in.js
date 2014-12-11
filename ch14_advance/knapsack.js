var max = function (a, b) {
  return (a>b)?a:b;
};

var knapsack_recur = function (capacity, size, value, n) {
  if (capacity === 0 || n === 0) {
    return 0;
  }

  if (capacity < size[n-1]) {
    return knapsack_recur(capacity, size, value, n-1);
  } else {
    return max(value[n-1] + knapsack_recur(capacity-size[n-1], size, value, n-1),
        knapsack_recur(capacity, size, value, n-1));
    
  }
};

var knapsack_dp = function (capacity, size, value, n) {
  var l = [];
  var i, j;
  var maxLenght = 0;
  var endIdx = 0;
  for (i=0;i<=n;i++) {
    l[i] = [];
  }

  for (i=0;i<=n;i++) {
    for (j=0;j<=capacity;j++) {
      if (i===0||j===0) {
        l[i][j] = 0;
      } else if (j >= size[i-1]) {
          l[i][j] = max(value[i-1] + l[i-1][j-size[i-1]], l[i-1][j]);
        } else {
          l[i][j] = l[i-1][j];
        }
      }
  }

  return l[n][capacity];
};

var timeit = function (func) {
  var n = 10000 << 10;
  var start = new Date().getTime();
  for (var i = 0;i < n; i++) {
    func();
  }
  console.log('call', func.name, n, 'times', 'costs:', new Date().getTime() - start + 'ms');
};

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = size.length;

console.log(knapsack_recur(capacity, size, value, n));
// timeit(function () {
//   knapsack_recur(capacity, size, value, n);
// });

console.log(knapsack_dp(capacity, size, value, n));
// timeit(function () {
//   knapsack_dp(capacity, size, value, n);
// });
