var mongoose = require('mongoose');
var m_mongo = require('../models/m_mongo');
//var bodyParser = require('body-parser');

var c_model = {
  list:function(req,res,next){
    m_mongo.find({},function (err,resData) {
      if(err)return next(err);
      res.render('mongo', {
        title: "TestDB",
        listData: resData
      })
    })
  },
  save:function (req,res,next) {
    var params = req.body;
    m_mongo.create(params,function(err){
      if(err){
        return next(err);
        res.send({'success':false,'err':err});
      }else{
        res.send({'success':true})
      }
    });
  }
}


module.exports = c_model;