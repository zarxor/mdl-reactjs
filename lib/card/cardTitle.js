/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.CardTitle',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			isExpand: false,
			useChild: false,
			textTag: 'h2',
			textTagOff: false,
			border: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-card__title': true,
			'mdl-card--expand': this.props.isExpand,
			'mdl-card--border': this.props.border
		};
		return cx(classes);
	},

  _getElement: function() {
    var child = this.props.children instanceof Array
					? this.props.children[0]
					: this.props.children;

    if (this.props.useChild && child && !_.isString(child)) {
      return child;
    } else {
			var text;
			if (this.props.textTagOff || typeof this.props.children != 'string') {
				text = this.props.children;
			} else {
				text = React.createElement(this.props.textTag, { children: this.props.children, className: "mdl-card__title-text" });
			}
      return React.createElement("div", {className: this.props.className || ''}, text)
    }
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
