module.exports = function(app){
  //登录注册调用控制器
  var c_loginregist = require('../controllers/c_loginregist');
  app.get('/admin/loginregist/loginGet',c_loginregist.loginGet);     //登录页面请求地址
  app.post('/admin/loginregist/loginPost',c_loginregist.loginPost);  //用户登录提交地址
  app.get('/admin/loginregist/registGet',c_loginregist.registGet);   //注册页面请求地址
  app.post('/admin/loginregist/registPost',c_loginregist.registPost);//注册页面请求地址
  app.get('/admin/loginregist/logoutGet',c_loginregist.logoutGet);   //退出账号提交地址

  //找回密码调用控制器
  var c_findpwd = require('../controllers/c_findpwd');
  app.get('/admin/findpwd',c_findpwd.findpwd);

}