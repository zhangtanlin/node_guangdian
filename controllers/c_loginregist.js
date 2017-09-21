//引入登陆注册model
var m_loginregist = require('../models/m_loginregist');
//session信息
var users = require('../session');
//添加信息到内存中
var findUser = function (name,password) {
  return users.user.name === name && users.user.password === password;
}

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
          //把前端传的值添加到内存
          var user = findUser(params.name,params.password);
          req.session.regenerate(function(err){
            if(err){
              return res.json({ret_code:2,ret_msg:'登录失败'});
            }
            req.session.loginUser = user.name;
            //返回首页
            res.redirect('/');
          })

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