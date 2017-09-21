var c_findpwd = {
  findpwd:function(req,res,next){
    res.render('findpwd',{
      title:"找回密码"
    });
  }
}

module.exports = c_findpwd;