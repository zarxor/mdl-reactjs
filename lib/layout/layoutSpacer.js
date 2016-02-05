/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.LayoutSpacer',

  getDefaultProps: function() {
		return {
		};
	},

  _getClasses: function() {
		var classes = {
      'mdl-layout-spacer': true
		};
		return cx(classes);
	},

  _getElement: function() {
    return React.createElement("div", null, this.props.children)
  },

  render: function () {
    var element = this._getElement();
    var classname = element.props.className || '';

    var newProps = {
			className : classname + ' ' + this._getClasses(),
			disabled : this.props.disabled,
			style : _.extend(element.props.style || {}, this.props.style),
			id : this.props.id,
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
      __functions.updateComponents();
	}
});
