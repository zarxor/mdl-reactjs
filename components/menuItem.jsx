/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.MenuItem',

	propTypes: {

	},

	getDefaultProps: function() {
		return {
			//disabled: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-menu__item': true
		};
		return cx(classes);
	},

  _getElement: function() {
		return <li>{this.props.children}</li>
  },

  render: function () {
    var element = this._getElement();
    var classname = element.props.className || '';

    var newProps = {
			className : classname + ' ' + this._getClasses(),
			style : _.extend(element.props.style || {}, this.props.style),
			disabled : this.props.disabled,
			id : this.props.id
		};

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		//componentHandler.upgradeDom();
	}
});
