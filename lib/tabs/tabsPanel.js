
var React = require("react"),
  	cx = require('classnames'),
  	_ = require('lodash');

var _defaultProps = {
	tag: 'div',
  ripple: false,
  title: '',
	active: false
};

module.exports = React.createClass({
	displayName : 'MDL.TabsPanel',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-tabs__panel': true,
			'is-active': this.props.active,
		};
		return cx(classes);
	},

	_getElement: function() {
    return React.createElement(this.props.tag, {}, this.props.children);
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
