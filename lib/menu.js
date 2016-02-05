/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash');

var _defaultProps = {
	ripple: true,
	position: 'bottom-left'
};


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
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-menu': true,
			'mdl-js-menu': true,
			'mdl-js-ripple-effect': this.props.ripple
		};

		classes['mdl-menu--' + this.props.position] = true;

		return cx(classes);
	},

  _getElement: function() {
		return React.createElement("ul", null, this.props.children)
  },

  render: function () {
    var element = this._getElement();
		var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
      __functions.updateComponents();
	}
});
