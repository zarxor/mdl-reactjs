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
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-card__menu': true,
		};
		return cx(classes);
	},

  _getElement: function() {
		return <div className={this.props.className || ''}>{this.props.children}</div>
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
