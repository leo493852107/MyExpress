var express = require('express'); // 用来引用express模块
var app = express(); // express 实例对象
app.set('port', process.env.PORT || 80); // 设置端口为80
app.get('/', function(req, res) {
	// 设置网页的路由
	res.send('Ritsu Yan')
})
app.get('/about', function(req, res) {
	// 设置 404
	res.status(404);
	res.send('404 - Not Found')
})
app.listen(app.get('port'), function() {
	console.log('express started on port 80')
})