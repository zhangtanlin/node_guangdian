var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var fileStore = require('session-file-store')(session);

//路由调用
var admin = require("./routes/admin");
var index = require("./routes/index");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session配置
app.use(session({
  name:'session',
  secret:'secret',//用来对session id相关的cookie进行签名(值可以是任意值)
  store: new fileStore(),//本地存储session(文本文件,也可以选择其他store,比如redis的)
  saveUninitialized:false,//是否自动保存未初始化的会话,建议false
  resave:false,//是否每次都重新保存会话,建议fasle,
  cookie:{
    maxAge:60*1000//有效期,单位是毫秒
  }
}));

//路由调用
admin(app);
index(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
