var express = require('express')
	,router = new express.Router();

router.use('/api', require('./rain'));
router.use('/api', require('./siege'));

router.get('/api*', function (req, res) {
	res.status(404).send("Page not found!");
});

module.exports = router;