//model
//var m_zxbj = require('../../../models/m_yjgl/m_yjcj/m_zxbj');]

var c_dhcj = {

	//电话采集【打开页面】
	dhcjGet: function(req, res, next) {
		res.render('yjgl/yjcj/dhcj', {});
	},
	//电话采集【表单提交】
	dhcjFilePost: function(req, res, next) {
		
		//上传插件引入及调用
		var multer = require('multer');
		var storages = multer.diskStorage({
			destination: function(req, file, cb) {
				cb(null, 'public/images/yjgl/yjcj/dhcj');
			}, //设置上传后文件路径
			filename: function(req, file, cb) {
				var fileFormat = (file.originalname).split('.');
				cb(null, file.fieldname + "-" + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
			} //给上传文件重命名，获取添加后的后缀
		});
		var upload = multer({
			storage: storages
		}).single('thumbnail');
		upload(req, res, function(err) {
			
			console.log(req.file);
			console.log(req.body);
			
			if(err) {
				res.send('上传失败');
				return;
			}
			var url = req.file.destination + req.file.filename;
			res.send({
				state: true,
				success: url
			});
		});


	}

}

module.exports = c_dhcj;