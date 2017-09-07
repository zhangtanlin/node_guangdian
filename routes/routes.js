module.exports = function(app){
  //导航
  var c_nav = require('../controllers/c_nav');
  app.get("/nav",c_nav.nav);

  //登陆注册
  var c_loginregist = require('../controllers/c_loginregist');
  app.get("/loginregist",c_loginregist.loginregist);
  app.post('/loginregist/login',c_loginregist.login);
  app.post('/loginregist/regist',c_loginregist.regist);

  //首页
  app.get('/', function(req, res, next) {
    res.render('index', { title: '首页'});
  });
  //历史
  app.get("/history",function(req,res){
    res.render("history",{
      "title":"历史"
    });
  });
  //地理
  app.get("/geography",function(req,res){
    res.render("geography",{
      "title":"地理"
    });
  });
  //美术
  app.get("/art",function(req,res){
    res.render("art",{
      "title":"美术"
    });
  });
  //音乐
  app.get("/music",function(req,res){
    res.render("music",{
      "title":"音乐"
    });
  });
  //视频
  app.get("/video",function(req,res){
    res.render("video",{
      "title":"视频"
    });
  });
  //文学
  app.get("/literature",function(req,res){
    res.render("literature",{
      "title":"文学"
    });
  });
  //美食
  app.get("/diet",function(req,res){
    res.render("diet",{
      "title":"美食"
    });
  });







}