//创建 mongodb数据库连接
var mongoose = require('mongoose');
var config = require('../../../config');
var db = mongoose.connect(config.mongodb,{useMongoClient: true});//红色为数据库名

//连接数据库Model
var zxbjSchema = new mongoose.Schema({
  name: {type: String},
  type: {type: String},
  rank:{type: String},
  time: {type: Date},
  section: {type: String},
  scope: {type: String},
  person: {type: String},
  phone: {type: Number},
});
var m_zxbj = mongoose.model("zxbj",zxbjSchema,"yjgl_yjcj_zxbj");//这个可能是验证集合的
module.exports = m_zxbj;

