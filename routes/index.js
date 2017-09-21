module.exports = function(app){
  //首页
  app.get('/', function(req, res, next) {
    var sess = req.session;

    console.log(sess);
    var loginUser = sess.loginUser;

    // console.log(loginUser);

    var isLogined = !!loginUser;
    res.render('index', {
      title: '首页',
      isLogined:isLogined
    });
  });
  //导航
  var c_nav = require('../controllers/c_nav');
  app.get("/nav",c_nav.nav);
}