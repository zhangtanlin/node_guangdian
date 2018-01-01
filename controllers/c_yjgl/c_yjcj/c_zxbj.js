//引入登陆注册model
var m_zxbj = require('../../../models/m_yjgl/m_yjcj/m_zxbj');

var c_zxbj = {

	//在线编辑【打开页面】
	zxbjGet: function(req, res, next) {
		res.render('yjgl/yjcj/zxbj', {
			title: '在线编辑'
		});
	},

	//在线编辑【获取分页列表】
	zxbjGetList: function(req, res, next) {
		//获取前端传来的页码和一页展示的数据
		var limit = '',
			page = '';
		if(!req.query) {
			limit = 5;
			page = 1;
		} else {
			limit = req.query.limit;
			page = (req.query.page - 1) * req.query.limit;
		}
		//查询数据总条数
		var countAll = 0;
		m_zxbj.count({}, function(err, count) {
			countAll = count;
		});
		//分页查询指定页面【因为分页查询没有特定方式，所以要使用流程的方式】
		var query = m_zxbj.find({});
		var limit = Number(limit);
		var page = Number(page);
		query.limit(limit); //限制条数【参数必须转成数值，不能使用字符串】
		query.skip(page); //控制页数【参数必须转成数值，不能使用字符串】
		query.exec(function(err, resData) {
			if(err) return next(err);
			//一般直接返回resData，但是layui需要返回的是特定格式的
			res.send({
				"code": 0,
				"msg": "",
				"count": countAll,
				"data": resData
			});
		});
	},

	//在线编辑【新增】
	zxbjGetAdd: function(req, res, next) {
		res.render('yjgl/yjcj/zxbjAdd', {
			title: '新增'
		})
	},

	//在线编辑【新增提交】
	zxbjGetAddPost: function(req, res, next) {
		//console.log(req.files);
		console.log(req.files);
		res.send({"code": 0,"msg": "","data": {"src": "/images/header.png"}});
	}

}

module.exports = c_zxbj;