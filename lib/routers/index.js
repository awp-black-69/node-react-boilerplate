module.exports = function (app) {
	
	app.use(require('./statics'));

	app.use(require('./api'));

	// Captures all URL except any mentioned above, so needs to be at the end
	app.use(require('./app'));

};