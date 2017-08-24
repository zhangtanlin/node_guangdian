//创建 mongodb数据库连接
var mongoose = require('mongoose');
var config = require('../config');
var db = mongoose.connect(config.mongodb,{useMongoClient: true});//红色为数据库名
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
var m_mongo = mongoose.model("",testSchema,"testModel");//这个可能是验证集合的
module.exports = m_mongo;

