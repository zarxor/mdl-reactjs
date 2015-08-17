/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Menu',

	propTypes: {
		position : React.PropTypes.oneOf([
			'bottom-left',
			'bottom-right',
			'top-right',
			'top-left',
		]),
	},

	getDefaultProps: function() {
		return {
			isRipple: true,
			position: 'bottom-left'
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-menu': true,
			'mdl-js-menu': true,
			'mdl-js-ripple-effect': this.props.isRipple
		};

		classes['mdl-menu--' + this.props.position] = true;

		return cx(classes);
	},

  _getElement: function() {
		return <ul>{this.props.children}</ul>
  },

  render: function () {
    var element = this._getElement();
    var classname = element.props.className || '';

    var newProps = {
			className : classname + ' ' + this._getClasses(),
			style : _.extend(element.props.style || {}, this.props.style),
			disabled : this.props.disabled,
			htmlFor : this.props.htmlFor,
			id : this.props.id
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		//componentHandler.upgradeDom();
	}
});
