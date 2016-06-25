var express = require('express')
	,http = require('http')
	,appRouter = require('./lib/routers')
	,morgan = require('morgan')
	,app = express();

var config = require('./config')
	,PORT = config.get('PORT');

app.use(morgan('dev'));

app.set('views', './lib/views');
app.set('view engine', 'jade');

appRouter(app);

http
	.createServer(app)
	.listen(PORT, function (err) {
		if(err) {
			console.log("[ERROR]", err);
		} else {
			console.log("Server started at port %s", PORT);
		}
	});