//引入导航的model
var m_nav = require('../models/m_nav');

var c_nav = {
  nav:function(req,res,next){
    m_nav.find({},function (err,resData) {
      res.send(resData);
    })
  }
}


module.exports = c_nav;