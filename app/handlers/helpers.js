var path = require('path');

exports.version = "0.1.0";

exports.send_failure = function(res, server_code, err){
	console.log(err);
	var code = (err.code) ? err.code : err.name;
	res.writeHead(server_code, { "Content-Type" : "application/json" });
	res.end(JSON.stringify({ error: code, message: err.message }) + "\n");
}

exports.http_code_for_error = function(err){
	switch (err.message) {
		case "invalid_resource":
			return 404;
	}

	console.log("*** Error needs HTTP response code: " + err.message);
	return 503;
}