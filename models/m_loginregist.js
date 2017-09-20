//创建 mongodb数据库连接
var mongoose = require('mongoose');
var config = require('../config');
var db = mongoose.connect(config.mongodb,{useMongoClient: true});//红色为数据库名

//连接数据库Model
var loginRegistSchema = new mongoose.Schema({
  user_name: {type: String},
  user_password: {type: String},
  user_phone:{type: String},
  user_operation_time: {type: Date, default: Date.now()},
  user_type: {type: String}
});
var m_loginregist = mongoose.model("loginRegist",loginRegistSchema,"user");//这个可能是验证集合的
module.exports = m_loginregist;

