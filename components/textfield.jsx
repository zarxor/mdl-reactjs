/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Textfield',

	propTypes: {

	},

  getDefaultProps: function() {
		return {
			floatingLabel: false,
			expandable: false,
			multiline: false,
			icon: "",
			label: "",
			error: ""
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-textfield': true,
			'mdl-js-textfield': true,
			'mdl-textfield--floating-label': this.props.floatingLabel,
			'mdl-textfield--expandable': this.props.expandable,
		};
		return cx(classes);
	},

  _getElement: function() {
		var children = {};
		var tag = this.props.multiline ? 'textarea' : 'input';

		children =_.extend(children, { 'input': React.createElement(tag, {
			className : "mdl-textfield__input",
			defaultValue : this.props.defaultValue,
			id : this.props.id,
			name : this.props.id,
			rows : this.props.rows,
			type : "text",
			pattern : this.props.pattern,
			disabled : this.props.disabled,
		}) });

		if (this.props.label.length > 0) {
			children =_.extend(children, { 'label': <label className="mdl-textfield__label" htmlFor={this.props.id}>{this.props.label}</label>});
		}

		if (this.props.error.length > 0) {
			children =_.extend(children, { 'error': <label className="mdl-textfield__error">{this.props.error}</label>});
		}

		if (this.props.expandable > 0) {
			children = {
				'icon': <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={this.props.id}><i className="material-icons">{this.props.icon}</i></label>,
				'holder': <div className="mdl-textfield__expandable-holder">{children}</div>
			};
		}

		return <div>{children}</div>
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
