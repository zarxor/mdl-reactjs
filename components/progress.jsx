/** @jsx React.DOM */
var React = require("react"),
		cx = require('classnames'),
		_ = require('lodash');

var _generalProps = {
			shadow: true,
		};

var _defaultProps = __functions.makeDefaultProps({
			indeterminate: false,
			progress: 0,
			buffer: -1,
		},_generalProps),
		_propTypes = __functions.makeDefaultPropTypes({
			id: React.PropTypes.string.isRequired,
		},_generalProps);

module.exports = React.createClass({
	displayName : 'MDL.Progress',

	propTypes: _propTypes,

  getDefaultProps: function() {
		return _defaultProps;
	},

	getInitialState: function() {
    return {
			progress: this.props.progress,
			buffer: this.props.buffer
		};
  },

  _getClasses: function() {
		var classes = {
			'mdl-progress': true,
			'mdl-js-progress': true,
			'mdl-progress__indeterminate': this.props.indeterminate
		};
		return cx(classes);
	},

  _getElement: function() {
		return <div />;
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

	_refreshProgress: function () {
		var element = React.findDOMNode(this);
		element.MaterialProgress.setProgress(this.props.progress);
		if (this.props.buffer > -1) {
			element.MaterialProgress.setBuffer(this.props.buffer);
		}
	},



	componentDidUpdate: function () {
		this._refreshProgress();
	},

  componentDidMount: function() {
      __functions.updateComponents();
			
		var element = React.findDOMNode(this);
		this._refreshProgress();
	}
});
