/** @jsx React.DOM */
var React = require("react"),
	cx = require('classnames'),
	_ = require('lodash');

var MDLFunc = require('../../functions');

var _defaultProps = {
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
		var element = React.createElement(this.props.tag, {
			children: this.props.children
		});;

		return element;
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
