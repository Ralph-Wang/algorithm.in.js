var lcs = function (w1, w2) {
  var endIdx = 0;
  var maxLength = 0;
  var lcsArr = [];
  var i, j;
  // init Array
  for (i=0;i<=w1.length;i++) {
    lcsArr[i] = [];
  }

  for (i = 0; i <= w1.length; i++) {
    for (j = 0; j <= w2.length; j++) {
      if (i === 0 || j === 0) {
        lcsArr[i][j] = 0;
      } else {
        if (w1[i-1] === w2[j-1]) {
          lcsArr[i][j] = lcsArr[i-1][j-1] + 1;
        } else {
          lcsArr[i][j] = 0;
        }
        
        if (lcsArr[i][j] > maxLength) {
          maxLength = lcsArr[i][j];
          endIdx = i;
        }
      }
    }
  }

  return w1.substr(endIdx - maxLength, maxLength);
};
console.log(lcs('ac', 'aa'));
console.log(lcs('abc', 'aab'));
console.log(lcs('abbcc', 'abcc'));
console.log(lcs('abccd', 'abcc'));
