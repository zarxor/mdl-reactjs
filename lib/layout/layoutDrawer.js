
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

var _defaultProps = {
	tag: 'div'
};

module.exports = React.createClass({
	displayName : 'MDL.LayoutDrawer',

	propTypes: {

	},

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-layout__drawer': true,
		};
		return cx(classes);
	},

  _getElement: function() {
		var element = React.createElement(this.props.tag, {}, this.props.children);

		return element;
  },

  render: function () {
    var element = this._getElement();
		var newProps = __functions.joinProps(_defaultProps, this.props, element.props, this._getClasses());

    return React.cloneElement(element, newProps);
  },

  componentDidMount: function() {
      __functions.updateComponents();
	}
});
