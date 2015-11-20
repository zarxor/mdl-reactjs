/** @jsx React.DOM */
var React = require("react"),
    cx = require('classnames'),
    _ = require('lodash');

var _generalProps = {
	colors: true,
};

var _defaultProps = __functions.makeDefaultProps({
	ripple: false,
	fab: false,
	size: false,
	icon: '',
	useChild: false,
	colored: false,
	raised: false,
	primary: false,
	accent: false,

	children: []
}, _generalProps);

var _propTypes = __functions.makeDefaultPropTypes({
}, _generalProps);

module.exports = React.createClass({
	displayName : 'MDL.Button',

	propTypes: _propTypes,

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-button': true,
			'mdl-button--fab': this.props.fab,
			'mdl-button--mini-fab': (this.props.fab && this.props.size == "mini"),

			'mdl-button--raised': this.props.raised,
			'mdl-button--colored': this.props.colored,
			'mdl-button--accent': this.props.accent,
			'mdl-button--primary': this.props.primary,

      		'mdl-button--icon': (this.props.icon.length > 0 && !this.props.fab),

			'mdl-js-button': true,
			'mdl-js-ripple-effect': this.props.ripple
		};

		classes = __functions.addGeneralClasses(classes, this.props);

		return cx(classes);
	},

  _getElement: function() {

    if (this.props.useChild && child && !_.isString(child)) {
		var child = this.props.children instanceof Array
						? this.props.children[0]
						: this.props.children;
      	return child;
    } else if (this.props.icon.length > 0) {
		return (<button><i className="material-icons">{this.props.icon}</i>{this.props.children}</button>);
	} else {
		return (<button>{this.props.children}</button>);
    }
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
