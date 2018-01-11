var session = {
	sessionOut:function(req, res, next) {
		if(!req.session.sign){
			res.redirect('/admin/loginregist/loginGet');
		}else{
			next();
		}
	}
}
module.exports = session;








//为什么这种方式不行?
//module.exports.sessionOut = function(req,res,next){
//	if(!req.session.sign){
//		res.redirect('/admin/loginregist/loginGet');
//	}else{
//		next();
//	}
//};