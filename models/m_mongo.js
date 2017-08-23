//创建 mongodb数据库连接
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/zhangxiaolin',{useMongoClient: true});//红色为数据库名
//验证数据库连接成功
mongoose.connection.on("open", function () {
  console.log("数据库连接成功");
});
//验证数据库连接失败
mongoose.connection.on("error", function (error) {
  console.log("数据库连接失败" + error);
});


//连接数据库Model
var testSchema = new mongoose.Schema({
  SortID: {type: String},
  Name: {type: String},
  Sex: {type: String},
  Address: {type: String},
  timeDate: {type: Date, default: Date.now()}
});
var m_mongo = mongoose.model("testModel",testSchema,"testModel")
module.exports = m_mongo;

