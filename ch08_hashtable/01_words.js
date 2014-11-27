var Hashtable = require('./hash').SCHash;

words = {
  '汉语': '汉族使用的语言',
  '计算机': '用于计算的机器',
  '智商': '智力与智龄的商值',
  '人': '多种生物个体的集合'
};

var h = new Hashtable();

for (var key in words) {
  h.put(key, words[key]);
}

for (var key in words) {
  console.log(key + '->' + h.get(key));
}
