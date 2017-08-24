var express = require('express');
var r_mongo = express.Router();

//引用连接数据库Model
var c_mongo = require('../controllers/c_mongo');

r_mongo.get('/list',c_mongo.list);
r_mongo.post('/create',c_mongo.save);


module.exports = r_mongo;

