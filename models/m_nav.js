//创建 mongodb数据库连接
var mongoose = require('mongoose');
var config = require('../config');
var db = mongoose.connect(config.mongodb,{useMongoClient: true});

//连接数据库Model
var navSchema = new mongoose.Schema({
  text: {type: String},
  url: {type: String},
  menus: {type: Array}
});
var m_nav = mongoose.model("nav",navSchema,"nav");
module.exports = m_nav;

