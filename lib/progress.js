/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Progress',

	propTypes: {
		id: React.PropTypes.string.isRequired,
	},

  getDefaultProps: function() {
		return {
			indeterminate: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-progress': true,
			'mdl-js-progress': true,
			'mdl-progress__indeterminate': this.props.indeterminate
		};
		return cx(classes);
	},

  _getElement: function() {
		return React.createElement("div", null);
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
