/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

var _defaultProps = {
	ripple: false,
	checked: false,
  label: null,
  id: null, // Sets in getDefaultProps
	type: 'checkbox',
	name: null,
	defaultValue: null,
};

module.exports = React.createClass({
	displayName : 'MDL.Toggle',

	propTypes: {
    type: React.PropTypes.oneOf(['checkbox','icon-toggle','radio','switch']),
  },

	getInitialState: function() {
    return { isChecked: this.props.checked };
  },

  getDefaultProps: function() {
		return _defaultProps;
	},

  _getClasses: function() {
		var classes = {
			'mdl-js-ripple-effect': this.props.ripple,
		};

		classes['mdl-' + this.props.type] = true;
		classes['mdl-js-' + this.props.type] = true;

		return cx(classes);
	},

	_handleChange: function () {
		var node = React.findDOMNode(this.refs.toggleInput)
		this.setState({ isChecked: node.checked });

		if (node.checked && typeof(this.props.onChecked) == 'function') {
			this.props.onChecked();
		} else if (!node.checked && typeof(this.props.onUnchecked) == 'function') {
			this.props.onUnchecked()
		}
	},

  _getElement: function() {
		var _id = this.props.id || ('toggle' + Math.floor((Math.random() * 10000) + 1000));
		var _name = this.props.name || _id;
		var _type = this.props.type == "radio" ? "radio" : "checkbox";

		var _inputClassname = "mdl-" + this.props.type + "__input";
		var _labelClassname = "mdl-" + this.props.type + "__label";
	 	var _labelTag = "span";

		switch (this.props.type) {
			case 'radio':
				_inputClassname = "mdl-" + this.props.type + "__button";
				break;
			case 'icon-toggle':
				_labelTag = "i";
				_labelClassname += " material-icons";
				break;
		}

    return (
			React.createElement("label", {htmlFor: _id}, 
			  React.createElement("input", {ref: "toggleInput", name: _name, type: _type, id: _id, className: _inputClassname, defaultChecked: this.props.checked, defaultValue: this.props.defaultValue, onChange: this._handleChange}), 
				 React.createElement(_labelTag, { className: _labelClassname, children: (this.props.label || this.props.children) }) 
			)
    );
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
