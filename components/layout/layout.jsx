/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Layout',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			tag: 'div',
			isFixedHeader: false,
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-layout': true,
			'mdl-js-layout': true,
			'mdl-layout--fixed-header': this.props.isFixedHeader,
			'mdl-layout--fixed-drawer': this.props.isFixedDrawer,
		};
		return cx(classes);
	},

  _getElement: function() {
		var element = React.createElement(this.props.tag, {
			children: this.props.children,
			className: this.props.className,
		});;

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
		componentHandler.upgradeDom();
	}
});
