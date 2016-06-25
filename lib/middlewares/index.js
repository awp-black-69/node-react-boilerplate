module.exports = function (req, res, next) {
	console.log("In middleware");
	next();
};