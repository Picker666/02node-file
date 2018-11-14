var http = require('http');
var url = require('url');
var router = require('./models/router');
var optFile = require('./models/optFile');

http.createServer( function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8;'});
    if (request.url !== '/favicon.ico') {
        var pathname = url.parse(request.url).pathname;
        console.log(pathname);
        if (pathname) {
        	console.log(pathname);
	        pathname = pathname.replace(/\//, '');
	        if (router[pathname]) {
	        	router[pathname](response);
	        }
	        console.log('Game over...')
        }
    }
}).listen(8888);

console.log('Server running at http://localhost:8888');
