var mongoose = require('mongoose');
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
        if(resData[i].name == params.name && resData[i].password == params.password){
          res.render('index');
        }else{
          res.send({'success':false,'err':err});
        }
      }
    })
  }
}


module.exports = c_loginregist;