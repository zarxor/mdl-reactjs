/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

var MDLFunc = require('../../functions');

var _defaultProps = {
	tag: 'nav',
};

module.exports = React.createClass({
	displayName : 'MDL.Navigation',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-navigation': true,
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
