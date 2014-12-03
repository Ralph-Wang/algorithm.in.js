var Graph = function (vertices) {
  this.vertices = vertices;
  this.edges = 0;
  this.adj = []; // 邻接表
  var i;
  for (i = 0; i < this.vertices.length; i ++) {
    this.adj[i] = [];
  }
  this.edgeTo = [];
  for (i = 0; i < this.vertices.length; i ++) {
    this.edgeTo[i] = [];
  }
};

Graph.prototype.addEdge = function(v, w) {
  var v_idx = this.vertices.indexOf(v);
  var w_idx = this.vertices.indexOf(w);
  // 这是一个无向图, 要对称
  this.adj[v_idx].push(w_idx);
  this.adj[w_idx].push(v_idx);
  this.edges++;
  return this;
};

Graph.prototype.show = function() {
  var v;
  var node;
  for (var i = 0; i < this.vertices.length; i ++) {
    v = this.vertices[i];
    v += ' -> ';
    for (var j = 0; j < this.adj[i].length; j ++) {
      v += this.vertices[this.adj[i][j]] + ' ';
    }
    console.log(v);
  }
};

Graph.prototype.dfs = function(start) {
  var n = this.vertices.indexOf(start) || 0;
  var stack = [n];
  var visited = [];
  var ret = [];
  var i;
  while (stack.length !== 0) {
    var v = stack.pop();
    visited.push(v);
    for (i=0;i<this.adj[v].length;i++) {
      if (visited.indexOf(this.adj[v][i]) === -1 &&
        stack.indexOf(this.adj[v][i]) === -1) {
        stack.push(this.adj[v][i]);
      }
    }
  }
  for (i=0;i<visited.length;i++) {
    ret.push(this.vertices[visited[i]]);
  }
  return ret;
};

Graph.prototype.bfs = function(start) {
  var n = this.vertices.indexOf(start) || 0;
  var queue = [n];
  var visited = [];
  var ret = [];
  var i;
  while (queue.length !== 0) {
    var v = queue.shift();
    visited.push(v);
    for (i=0;i<this.adj[v].length;i++) {
      if (visited.indexOf(this.adj[v][i]) === -1 &&
        queue.indexOf(this.adj[v][i]) === -1) {
        this.edgeTo[n][this.adj[v][i]] = v;
        queue.push(this.adj[v][i]);
      }
    }
  }
  for (i=0;i<visited.length;i++) {
    ret.push(this.vertices[visited[i]]);
  }
  return ret;
};

Graph.prototype.pathTo = function(v, w) {
  var v_idx = this.vertices.indexOf(v);
  var w_idx = this.vertices.indexOf(w);
  if (this.edgeTo[v_idx].length === 0) {
    this.bfs(v);
  }
  var source = v_idx;
  var path = [];
  for (var i = w_idx; i != source; i = this.edgeTo[v_idx][i]) {
    path.push(i);
  }
  path.push(source);
  path = path.reverse();
  for (i=0;i<path.length;i++) {
    path[i] = this.vertices[path[i]];
  }
  return path;
};

Graph.prototype.topSort = function() {
  var topSortResult = [];
  var visited = [];
  for (var i = 0; i < this.vertices.length; i++) {
    visited[i] = false;
  }
  for (var j = 0; j < this.vertices.length; j++) {
    if (visited[i] !== false) {
      this.topSortHelper(j, visited, topSortResult);
    }
  }

  var ret = [];
  for (var k = 0; k < topSortResult.length; k++) {
    ret.push(this.vertices[topSortResult[k]]);
  }
  return ret.reverse();
}; 

Graph.prototype.topSortHelper = function (v, visited, topSortResult) {
  visited[v] = true;
  var w;
  for (var i = 0;i < this.adj[v].length; i++) {
    w = this.adj[v][i];
    if (!visited[w]) {
      this.topSortHelper(w, visited, topSortResult);
    }
  }
  if (topSortResult.indexOf(v) === -1) {
    topSortResult.push(v);
  }
};
module.exports = Graph;
