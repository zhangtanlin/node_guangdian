module.exports = function(app){

  //欢迎页面
  app.get('/welcome',function (req,res,next) {
    res.render('welcome', {
      text: '欢迎使用node.js+mongodb+layUI'
    });
  });

  //首页
  app.get('/', function(req, res, next) {
    if(req.session.sign){//检查用户是否已经登录
      res.render('index', {
        title: '首页',
        name:req.session.name,
        isLogined:true
      });
    }else{
      res.render('index', {
        title: '首页',
        name:req.session.name,
        isLogined:false
      });
    }
  });

  //导航
  var c_nav = require('../controllers/c_nav');
  app.get("/nav",c_nav.nav);

  //预警采集-在线编辑
  var c_yjgl = require('../controllers/c_yjgl/c_yjcj/c_zxbj');
  app.get('/yjgl/yjcj/zxbjGet',c_yjgl.zxbjGet);
  app.get('/yjgl/yjcj/zxbjGetList',c_yjgl.zxbjGetList);

}