/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Spinner',

	propTypes: {
		id: React.PropTypes.string.isRequired,
	},

  getDefaultProps: function() {
		return {
			active: false,
			singleColor: false,
			tag: 'div'
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-spinner': true,
			'mdl-js-spinner': true,
			'is-active': this.props.active,
			'mdl-spinner--single-color': this.props.singleColor
		};
		return cx(classes);
	},

  _getElement: function() {
		return React.createElement(this.props.tag);
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
