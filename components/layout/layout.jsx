/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Layout',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			tag: 'div',
			isFixedHeader: false,
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-layout': true,
			'mdl-js-layout': true,
			'mdl-layout--fixed-header': this.props.isFixedHeader,
			'mdl-layout--fixed-drawer': this.props.isFixedDrawer,
		};
		return cx(classes);
	},

  render: function () {
    return <div class="mdl-layout__container--jsx">{React.createElement(this.props.tag, {
			className : this.props.className + ' ' + this._getClasses(),
			style : this.props.style
		}, this.props.children)}</div>;
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
