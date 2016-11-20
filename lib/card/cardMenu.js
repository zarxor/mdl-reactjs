
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash');

var _generalProps = {
  shadow: true,
	colors: true
};

var _defaultProps = __functions.makeDefaultProps({
	shadow: 0
}, _generalProps);

var _propTypes = __functions.makeDefaultPropTypes({
}, _generalProps);

module.exports = React.createClass({
	displayName : 'MDL.CardMenu',

	propTypes: _propTypes,

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-card__menu': true,
		};
    classes = __functions.addGeneralClasses(classes, this.props);
		return cx(classes);
	},

  _getElement: function() {
		return React.createElement("div", null, this.props.children)
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
