/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Button',

  getDefaultProps: function() {
		return {
			ripple: false,
			fab: false,

			size: 'normal',

      icon: '',

      useChild: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-button': true,
			'mdl-button--fab': this.props.fab,
			'mdl-button--mini-fab': (this.props.fab && this.props.size == "mini"),

			'mdl-button--raised': this.props.raised,
			'mdl-button--colored': this.props.colored,
			'mdl-button--accent': this.props.accent,
			'mdl-button--primary': this.props.primary,

      'mdl-button--icon': (this.props.icon.length > 0 && !this.props.fab),

			'mdl-js-button': true,
			'mdl-js-ripple-effect': this.props.ripple
		};
		return cx(classes);
	},

  _getElement: function() {
    var child = this.props.children instanceof Array
					? this.props.children[0]
					: this.props.children;

    if (this.props.useChild && child && !_.isString(child)) {
      return child;
    } else if (this.props.icon.length > 0) {
      return React.createElement("button", {className: this.props.className || ''}, React.createElement("i", {className: "material-icons"}, this.props.icon), this.props.children)
		} else {
      return React.createElement("button", {className: this.props.className || ''}, this.props.children)
    }
  },

  render: function () {
    var element = this._getElement();
    var classname = element.props.className || '';

    var newProps = {
			className : classname + ' ' + this._getClasses(),
			disabled : this.props.disabled,
			onClick : this.props.onClick,
			style : _.extend(element.props.style || {}, this.props.style),
			id : this.props.id,
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
