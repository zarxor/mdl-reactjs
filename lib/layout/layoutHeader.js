/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

var MDLFunc = require('../../functions');

var _defaultProps =  {
	tag: 'header',
	transparent: false,
	scroll: false,
	waterfall: false,
};

module.exports = React.createClass({
	displayName : 'MDL.LayoutHeader',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
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
		var newProps = MDLFunc.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
