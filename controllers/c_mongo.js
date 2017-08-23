var mongoose = require('mongoose');
var m_mongo = require('../models/m_mongo');
var bodyParser = require('body-parser');

module.exports = {
  list:function(req,res,next){
    m_mongo.find({},function (err,resDate) {
      if(err) {
        return next(err);
      }else {
        res.render('mongo', {
          title: "TestDB",
          testData: resDate
        })
      }
    })
  },
  save:function (req,res,next) {
    var params = req.body;
    console.log(params);
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
