/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

var MDLFunc = require('../functions');

var _defaultProps =  {
};

module.exports = React.createClass({
	displayName : 'MDL.Icon',

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
      'material-icons': true
		};
		return cx(classes);
	},

  _getElement: function() {
    return <i>{this.props.children}</i>
  },

  render: function () {
    var element = this._getElement();
		var newProps = MDLFunc.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		//componentHandler.upgradeDom();
	}
});
