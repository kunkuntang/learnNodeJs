var express = require('express');
var app = express();

var fs = require('fs'),
	page_hdlr = require('./handlers/page.js');

//app.use(express.bodyParser({ keepExtensions: true }));	//保留文件的后缀名
app.use(express.static(__dirname + "/../static"));	  	//设置静态目录，隔离前端代码和服务端代码
app.use(express.compress());							//设置传输压缩

app.get("/page/:page_name", page_hdlr.generate);
app.get("/page/:page_name/:sub_page", page_hdlr.generate);

app.get('/', function(req, res){
	res.redirect('/page/home');
	res.end();
});

/*app.get('*', four_or_four);

function four_or_four(req, res){
	res.writeHead(404, { "Content-Type" : "application/json" });
	res.end("page not found");
}
*/
app.listen(8080);

