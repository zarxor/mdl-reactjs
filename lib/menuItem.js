/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash');

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
		return React.createElement("li", null, this.props.children)
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
