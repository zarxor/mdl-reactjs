/** @jsx React.DOM */
var React = require("react"),
	cx = require('classnames'),
	_ = require('lodash');

var MDLFunc = require('../../functions');

var _defaultProps = {
	tag: 'div'
};

module.exports = React.createClass({
	displayName : 'MDL.Grid',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-grid': true,
		};
		return cx(classes);
	},

  _getElement: function() {
		return React.createElement(this.props.tag, {}, this.props.children);
  },

  render: function () {
    var element = this._getElement();
		var newProps = MDLFunc.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
