var express = require('express')
	,router = new express.Router();

router.get('/js/*', function (req, res) {
	res.set('Content-Type', 'text/javascript');
	res.sendFile(process.env.PWD + '/dist' + req.url);
});

router.get('/css/*', function (req, res) {
	res.set('Content-Type', 'text/css');
	res.sendFile(process.env.PWD + '/dist' + req.url);
});

router.get(/\/(images|fonts)\/*/, function (req, res) {
	res.sendFile(process.env.PWD + '/public' + req.url, function (err) {
		if(err) {
			console.log("[ERROR] Resource not found", req.url);
			res.status(404).end();
		}
	});
});

module.exports = router;