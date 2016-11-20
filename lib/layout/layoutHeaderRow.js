
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.LayoutHeaderRow',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			tag: 'div',
			isTransparent: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-layout__header-row': true,
		};
		return cx(classes);
	},

	_getElement: function() {
		var element = React.createElement(this.props.tag, {}, this.props.children);
		return element;
	},

  render: function () {
    var element = this._getElement();
    var classname = element.props.className || '';

    var newProps = {
			className : classname + ' ' + this._getClasses(),
			style : _.extend(element.props.style || {}, this.props.style),
			id : this.props.id,
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
      __functions.updateComponents();
	}
});
