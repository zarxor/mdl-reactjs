/** @jsx React.DOM */
var React = require("react"),
		cx = require('classnames'),
		_ = require('lodash');

var _defaultProps = {
	isIcon: false,
	tag: 'span',
	data: '',
	background: true
};

module.exports = React.createClass({
	displayName : 'MDL.Badge',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-badge': true,
			'material-icons': this.props.isIcon,
			'mdl-badge--no-background': !this.props.background
		};
		return cx(classes);
	},

  _getElement: function() {
		var element = React.createElement(this.props.tag, {
			'data-badge': this.props.data
		}, this.props.children);

		return element;
  },

  render: function () {
    var element = this._getElement();
		var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
