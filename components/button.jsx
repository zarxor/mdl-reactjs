/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Button',

  getDefaultProps: function() {
		return {
			isRipple: true,
			isFab: false,

			size: 'normal',

      icon: '',

      useChild: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-button': true,
			'mdl-button--fab': this.props.isFab,
			'mdl-button--mini-fab': (this.props.isFab && this.props.size == "mini"),

			'mdl-button--raised': this.props.isRaised,
			'mdl-button--colored': this.props.isColored,
			'mdl-button--accent': this.props.isAccent,
			'mdl-button--primary': this.props.isPrimary,

      'mdl-button--icon': (this.props.icon.length > 0 && !this.props.isFab),

			'mdl-js-button': true,
			'mdl-js-ripple-effect': this.props.isRipple
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
      return <button className={this.props.className || ''}><i className="material-icons">{this.props.icon}</i>{this.props.children}</button>
		} else {
      return <button className={this.props.className || ''}>{this.props.children}</button>
    }
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
		componentHandler.upgradeDom();
	}
});
