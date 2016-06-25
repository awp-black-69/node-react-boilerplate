module.exports = {
	nodemon: {
		script: 'sever.js',
		ext: 'js',
		watch: ['server.js', 'lib/routers/'],
		env: {NODE_ENV: 'development'}
	}
};