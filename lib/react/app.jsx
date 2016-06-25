var React = require('react');

var Container = React.createClass({
	render: function () {
		return (
			<div>
				Hello react!
			</div>
		);
	}
});

React.render(document.getElementById('container'), Container);