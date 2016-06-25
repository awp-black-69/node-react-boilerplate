var express = require('express')
	,router = new express.Router();

router.get('/siege', function (req, res) {
	res.send("Siege");
});

module.exports = router;