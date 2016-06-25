var express = require('express')
	,router = new express.Router();

router.get('/rain', function (req, res) {
	res.send("Rain");
});

module.exports = router;