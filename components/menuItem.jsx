/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash'),
    MDLFunc = require('../functions');

var _defaultProps = {
};


module.exports = React.createClass({
	displayName : 'MDL.MenuItem',

	propTypes: {

	},

	getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-menu__item': true
		};
		return cx(classes);
	},

  _getElement: function() {
		return <li>{this.props.children}</li>
  },

  render: function () {
    var element = this._getElement();
		var newProps = MDLFunc.joinProps(_defaultProps, this.props, element.props, this._getClasses());
    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		//componentHandler.upgradeDom();
	}
});
