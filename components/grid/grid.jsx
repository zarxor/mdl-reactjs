/** @jsx React.DOM */
var React = require("react"),
	cx = require('classnames'),
	_ = require('lodash');

var _generalProps = {
	colors: true,
};

var _defaultProps = __functions.makeDefaultProps({
	tag: 'div',
	'no-spacing': false
}, _generalProps);

var _propTypes = __functions.makeDefaultPropTypes({
}, _generalProps);

module.exports = React.createClass({
	displayName : 'MDL.Grid',

	propTypes: _propTypes,

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-grid': true,
			'mdl-grid--no-spacing': this.props['no-spacing']
		};

		classes = __functions.addGeneralClasses(classes, this.props);

		return cx(classes);
	},

  _getElement: function() {
		return React.createElement(this.props.tag, {}, this.props.children);
  },

  render: function () {
    var element = this._getElement();
		var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
