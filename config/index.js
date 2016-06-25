var _ = require('underscore');

var config = _.extend(
	{
		PORT: 9191,
		APP_NAME: "APP NAME"
	},
	{
		get: function (key) {
			return config[key];
		}
	}
);

module.exports = config;