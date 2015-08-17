/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.CardMedia',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			isExpand: false,
			imgSrc: '',
			imgProps: {},
			border: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-card__media': true,
			'mdl-card--expand': this.props.isExpand,
			'mdl-card--border': this.props.border
		};
		return cx(classes);
	},

  _getElement: function() {
		var inner;
		if (this.props.imgSrc.length > 0) {
			inner = React.createElement("img", React.__spread({src: this.props.imgSrc},  this.props.imgProps))
		} else {
			inner = this.props.children;
		}

		return React.createElement("div", {className: this.props.className || ''}, inner)
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

		//componentHandler.upgradeElement();
	}
});
