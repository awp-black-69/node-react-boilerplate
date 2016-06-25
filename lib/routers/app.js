var express = require('express')
	,router = new express.Router();

var config = require('../../config');

router.use(require('../middlewares'));

router.get('/*', function (req, res) {
	res.render('index', {
		appName: config.get("APP_NAME")
	});
});

module.exports = router;