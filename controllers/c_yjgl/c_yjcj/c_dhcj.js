
//model
//var m_zxbj = require('../../../models/m_yjgl/m_yjcj/m_zxbj');

//上传插件引入
var multer  = require('multer')
var upload = multer().single('avatar')

var c_dhcj = {

  //电话采集【打开页面】
  dhcjGet: function(req, res, next) {
    res.render('yjgl/yjcj/dhcj', {
      title: '电话采集'
    });
  },
  dhcjPost:function(req,res,next){
    //console.log(req);
    //console.log(res)
    upload(req, res, function (err) {
      console.log(req.thumbnail);
      console.log(res.thumbnail);
      if(err){
        console.log(123);
      }
      //console.log(req);
      console.log(req.fieldname);

    })
  }

}

module.exports = c_dhcj;