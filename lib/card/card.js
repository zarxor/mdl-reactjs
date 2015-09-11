/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash'),
    MDLFunc = require('../../functions');

var _generalProps = {
  shadow: true
};

var _defaultProps = MDLFunc.makeDefaultProps({
	shadow: 2,
	useChild: false
}, _generalProps);

var _propTypes = MDLFunc.makeDefaultPropTypes({
}, _generalProps);

module.exports = React.createClass({
	displayName : 'MDL.Card',

	propTypes: _propTypes,

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-card': true
		};

    classes = MDLFunc.addGeneralClasses(classes, this.props);

		return cx(classes);
	},

  _getElement: function() {
    var child = this.props.children instanceof Array
					? this.props.children[0]
					: this.props.children;

    if (this.props.useChild && child && !_.isString(child)) {
      return child;
    } else {
      return React.createElement("div", {className: this.props.className || ''}, this.props.children)
    }
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
