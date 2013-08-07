var restify = require('restify');

var user = { firstName:'Michael', lastName:'Jordan'};

function respond(req, res, next) {
	res.send(user);
}

var server = restify.createServer();
server.pre(restify.pre.userAgentConnection());
server.use(restify.CORS());
server.use(restify.fullResponse());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});