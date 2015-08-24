/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.LayoutHeader',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			tag: 'header',
			transparent: false,
			scroll: false,
			waterfall: false,
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-layout__header': true,
			'mdl-layout__header--transparent': this.props.transparent,
			'mdl-layout__header--scroll': this.props.scroll,
			'mdl-layout__header--waterfall': this.props.waterfall,
		};
		return cx(classes);
	},

  _getElement: function() {
		var element = React.createElement(this.props.tag, {
			children: this.props.children
		});;

		return element;
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
