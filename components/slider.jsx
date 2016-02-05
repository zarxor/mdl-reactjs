/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Button',

  getDefaultProps: function() {
		return {
			min: 0,
			max: 100,
			defaultValue: 0,
			step: 1,
			useChild: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-slider': true,
			'mdl-js-slider': true
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
      return <input className={this.props.className || ''} />
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
			min : this.props.min,
			max : this.props.max,
			defaultValue : this.props.defaultValue,
			step : this.props.step,
			type : 'range'
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
      __functions.updateComponents();
	}
});
