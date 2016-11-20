var React = require("react"),
	cx = require('classnames'),
	_ = require('lodash');

var _defaultProps = {
	tag: 'div',
	isFixedHeader: false,
	isFixedDrawer: false,
};

module.exports = React.createClass({
	displayName: 'MDL.Layout',

	propTypes: {

	},

	getDefaultProps: function () {
		return _defaultProps;
	},

	_getClasses: function () {
		var classes = {
			'mdl-layout': true,
			'mdl-js-layout': true,
			'mdl-layout--fixed-header': this.props.isFixedHeader,
			'mdl-layout--fixed-drawer': this.props.isFixedDrawer,
		};
		return cx(classes);
	},

	_getElement: function () {
		return React.createElement(this.props.tag, {}, this.props.children);
	},

	render: function () {
		var element = this._getElement();
		var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());

		return React.createElement("div", {
			className: "mdl-layout__container--root"
		}, React.cloneElement(element, newProps));
	},

	componentDidMount: function () {
		__functions.updateComponents();
	}
});