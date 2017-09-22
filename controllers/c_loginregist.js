//引入登陆注册model
var m_loginregist = require('../models/m_loginregist');

var c_loginregist = {
  loginregist:function(req,res,next){
    res.render('loginregist',{
      title:"登陆注册"
    });
  },
  login:function (req,res,next) {
    var params = req.body;
    m_loginregist.find({},function(err,resData){
      if(err)return next(err);
      for(var i=0;i<resData.length;i++){
        if(resData[i].user_name == params.name && resData[i].user_password == params.password){
          var sess = req.session//用这个属性获取session中保存的数据，而且返回的JSON数据
          console.log(sess);
          //返回首页
          res.redirect('/');
        }else{
          res.send({'success':false,'err':err});
        }
      }
    });
  },
  regist:function(req,res,next){
    var params = req.body;
    m_loginregist.create(params,function(err,resData){
      if(err)return next(err);
      res.send({'success':true,'err':err});
    });
  }
}

module.exports = c_loginregist;