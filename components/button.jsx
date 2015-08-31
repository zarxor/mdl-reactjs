/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');
var MDLFunc = require('../functions');

var _defaultProps = {
	ripple: false,
	fab: false,
	size: false,
	icon: '',
	useChild: false,
	colored: false,
	raised: false,
	primary: false,
	accent: false,
	children: {}
};

module.exports = React.createClass({
	displayName : 'MDL.Button',

  getDefaultProps: function() {
		return _defaultProps;
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
      return <button><i className="material-icons">{this.props.icon}</i>{this.props.children}</button>
		} else {
      return <button>{this.props.children}</button>
    }
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
