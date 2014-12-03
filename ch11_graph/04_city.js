var Graph = require('./graph');

var stations =
[ '上地',
  '双井',
  '回龙观',
  '军博',
  '传媒大学',
  '牡丹园',
  '五道口',
  '雍和宫' ];

var subline = new Graph(stations);

subline.addEdge('上地','回龙观')
.addEdge('上地', '五道口')
.addEdge('五道口', '军博')
.addEdge('五道口', '牡丹园')
.addEdge('军博', '牡丹园')
.addEdge('军博', '传媒大学')
.addEdge('牡丹园', '雍和宫')
.addEdge('牡丹园', '双井')
.addEdge('雍和宫', '传媒大学')
.addEdge('雍和宫', '双井')
.addEdge('双井', '传媒大学')
.addEdge('传媒大学', '回龙观');


subline.show();

console.log('dfs:');
console.log(subline.dfs('牡丹园'));
console.log('bfs:');
console.log(subline.bfs('上地'));
console.log('edgeTo:');
console.log(subline.edgeTo);
console.log(subline.pathTo('双井', '上地'));
console.log(subline.edgeTo);
console.log('-------------------');
console.log(subline.topSort());
