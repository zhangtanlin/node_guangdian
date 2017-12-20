//引入登陆注册model
var m_zxbj = require('../../../models/m_yjgl/m_yjcj/m_zxbj');

var c_zxbj = {
  //在线编辑
  zxbjGet:function(req,res,next){
    res.render('yjgl/yjcj/zxbj',{
      title:'在线编辑'
    });
  },
  zxbjGetList:function (req,res,next) {
  	//获取前端传来的页码和一页展示的数据
  	var limit = '',page = '';
		if(!req.query){
			limit = 5;
			page = 1;
		}else{
			limit = req.query.limit;
      page = (req.query.page-1) * req.query.limit;
		}
    //查询数据总条数
    var countAll = "";
		m_zxbj.count({},function(err,count){
      countAll =  count;
    });
    //分页查询指定页面【因为分页查询没有特定方式，所以要使用流程的方式】
		var query = m_zxbj.find({});
    var limit = Number(limit);
    var page = Number(page);
    query.limit(limit);//限制条数【注意参数必须转成数值型格式，不能使用字符串格式】
		query.skip(page);  //控制页数【注意参数必须转成数值型格式，不能使用字符串格式】
		query.exec(function(err,resData){
			if(err)return next(err);
			var count = resData.length;
			//一般直接返回resData，但是layui需要返回的是特定格式的
			res.send({"code": 0,"msg": "","count": countAll,"data":resData});
		});
  }


}

module.exports = c_zxbj;