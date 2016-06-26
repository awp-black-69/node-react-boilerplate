var React = require('react')
	,ReactDom = require('react-dom')
	,Router = require('react-router').Router
	,Route = require('react-router').Route
	,browserHistory = require('react-router').browserHistory;

var Index = require('./pages/index.jsx');

ReactDom.render((
	<Router history={browserHistory}>
		<Route path="/" name="root" component={Index}/>
	</Router>
), document.getElementById('container'));