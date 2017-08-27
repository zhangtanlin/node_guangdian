var express = require('express');
var r_loginregist = express.Router();

//引用连接数据库Model
var c_loginregist = require('../controllers/c_loginregist');

r_loginregist.get('/',c_loginregist.loginregist);
r_loginregist.post('/login',c_loginregist.login);

module.exports = r_loginregist;

