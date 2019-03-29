var db = require('mongoose');

var url = 'mongodb://localhost/dx';
db.connect(url,function(err){
	if(err){
		console.log("error:"+err);
	}else{
		console.log("数据库链接成功");
	}
})

module.exports = db;