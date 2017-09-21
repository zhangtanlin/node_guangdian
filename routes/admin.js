module.exports = function(app){
  //登陆注册
  var c_loginregist = require('../controllers/c_loginregist');
  app.get('/admin/loginregist',c_loginregist.loginregist);
  app.post('/admin/loginregist/login',c_loginregist.login);
  app.post('/admin/loginregist/regist',c_loginregist.regist);

  //找回密码
  var c_findpwd = require('../controllers/c_findpwd');
  app.get('/admin/findpwd',c_findpwd.findpwd);
}