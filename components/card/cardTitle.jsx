/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash');

var _generalProps = {
  shadow: true,
	colors: true
};

var _defaultProps = __functions.makeDefaultProps({
	useChild: false,
	textTag: 'h2',
	textTagOff: false,
	border: false,
	shadow: 0
}, _generalProps);

var _propTypes = __functions.makeDefaultPropTypes({
}, _generalProps);

module.exports = React.createClass({
	displayName : 'MDL.CardTitle',

	propTypes: _propTypes,

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-card__title': true,
			'mdl-card--expand': this.props.expand,
			'mdl-card--border': this.props.border
		};
    classes = __functions.addGeneralClasses(classes, this.props);
		return cx(classes);
	},

  _getElement: function() {
    var child = this.props.children instanceof Array
					? this.props.children[0]
					: this.props.children;

    if (this.props.useChild && child && !_.isString(child)) {
      return child;
    } else {
			var text;
			if (this.props.textTagOff || typeof this.props.children != 'string') {
				text = this.props.children;
			} else {
				text = React.createElement(this.props.textTag, { children: this.props.children, className: "mdl-card__title-text" });
			}
      return <div>{text}</div>
    }
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
