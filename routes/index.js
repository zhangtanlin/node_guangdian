//session过期后调用登录界面
var session = require("./session");


module.exports = function(app){

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

  //欢迎页面
  app.get('/welcome',function (req,res,next) {
    res.render('welcome', {
      text: '欢迎使用node.js+mongodb+layUI'
    });
  });

  //导航
  var c_nav = require('../controllers/c_nav');
  app.get("/nav",c_nav.nav);

  //预警采集-在线编辑
  var c_zxbj = require('../controllers/c_yjgl/c_yjcj/c_zxbj');
  app.get('/yjgl/yjcj/zxbjGet',session.sessionOut,c_zxbj.zxbjGet);//添加了session验证的界面跳转
  app.get('/yjgl/yjcj/zxbjGetList',c_zxbj.zxbjGetList);
  app.get('/yjgl/yjcj/zxbjGetAdd',c_zxbj.zxbjGetAdd);				  //新增【获取页面】
  //app.post('/yjgl/yjcj/zxbjGetAddPost',c_zxbj.zxbjGetAddPost);//新增【提交】

  //电话采集
  var c_dhcj = require('../controllers/c_yjgl/c_yjcj/c_dhcj');
  app.get('/yjgl/yjcj/dhcjGet',c_dhcj.dhcjGet);
  app.post('/yjgl/yjcj/dhcjFilePost',c_dhcj.dhcjFilePost);//图片上传测试【提交】


}