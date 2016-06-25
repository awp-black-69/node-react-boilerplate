var _ = require('underscore');

var config = _.extend(
	{
		PORT: 9191
	},
	{
		get: function (key) {
			return config[key];
		}
	}
);

module.exports = config;