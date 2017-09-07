//创建 mongodb数据库连接
var mongoose = require('mongoose');
var config = require('../config');
var db = mongoose.connect(config.mongodb,{useMongoClient: true});//红色为数据库名

//连接数据库Model
var loginRegistSchema = new mongoose.Schema({
  id: {type: String},
  name: {type: String},
  password: {type: String},
  timeDate: {type: Date, default: Date.now()}
});
var m_loginregist = mongoose.model("loginregist",loginRegistSchema,"loginregist");//这个可能是验证集合的
module.exports = m_loginregist;

