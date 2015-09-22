/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.CardActions',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			isExpand: false,
			border: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-card__actions': true,
			'mdl-card--border': this.props.border
		};
		return cx(classes);
	},

  _getElement: function() {
		return React.createElement("div", {className: this.props.className || ''}, this.props.children)
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
