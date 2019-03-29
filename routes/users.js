var express = require('express');
var router = express.Router();

var user = require('../model/user_model')

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/zhuche', function(req, res, next) {
	if(!req.body.username) {
		return res.json({
			status: 1,
			message: "用户名为空"
		});
	}

	if(!req.body.password) {
		return res.json({
			status: 1,
			message: "密码不能为空"
		});
	}
/*	
	if(!req.body.date) {
		return res.json({
			status: 1,
			message: "时间不能为空"
		});
	}*/
	
	var yonghu = new user({
		username: req.body.username,
		password: req.body.password,
		/*date: req.body.date,*/
	});
    console.log(yonghu);
	user.findone(req.body.username, req.body.password, function(err, result) {
			if(result.length <= 0) {
				yonghu.save(function(err){
						return res.json({
							status: 0,
							message: "注册成功"
						});
				})
			} else {
				return res.json({status:1,message:"用户已经存在"});
			}
		
	});

});
module.exports = router;