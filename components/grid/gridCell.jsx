/** @jsx React.DOM */
var React = require("react"),
		cx = require('classnames'),
		_ = require('lodash');

var MDLFunc = require('../../functions');

var _defaultProps = {
	col: 1,
	colPhone: 0,
	colTablet: 0,
	colDesktop: 0,

	hidePhone: false,
	hideTable: false,
	hideDesktop: false,

	spacing: true,
	stretch: false,
	align: '',

	tag: 'div'
};

module.exports = React.createClass({
	displayName : 'MDL.GridCell',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-cell': true,
			'mdl-grid--no-spacing': !this.props.spacing,

			'mdl-cell-hide-phone': this.props.hidePhone,
			'mdl-cell-hide-tablet': this.props.hideTablet,
			'mdl-cell-hide-desktop': this.props.hideDesktop,

			'mdl-cell--stretch': this.props.stretch,
		};
		classes['mdl-cell--' + this.props.col + '-col'] = true;
		classes['mdl-cell--' + this.props.colPhone + '-col-phone'] = (this.props.colPhone > 0);
		classes['mdl-cell--' + this.props.colTablet + '-col-tablet'] = (this.props.colTablet > 0);
		classes['mdl-cell--' + this.props.colDesktop + '-col-desktop'] = (this.props.colDesktop > 0);
		classes['mdl-cell--' + this.props.align + ''] = (this.props.align.length > 0);

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
		var newProps = MDLFunc.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
