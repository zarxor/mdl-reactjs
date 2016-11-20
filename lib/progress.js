var React = require("react"),
	ReactDOM = require("react-dom"),
	cx = require('classnames'),
	_ = require('lodash');

var _generalProps = {
	shadow: true,
};

var _defaultProps = __functions.makeDefaultProps({
		indeterminate: false,
		progress: 0,
		buffer: -1,
	}, _generalProps),
	_propTypes = __functions.makeDefaultPropTypes({
		id: React.PropTypes.string.isRequired,
	}, _generalProps);

module.exports = React.createClass({
	displayName: 'MDL.Progress',

	propTypes: _propTypes,

	getDefaultProps: function () {
		return _defaultProps;
	},

	getInitialState: function () {
		return {
			progress: this.props.progress,
			buffer: this.props.buffer
		};
	},

	_getClasses: function () {
		var classes = {
			'mdl-progress': true,
			'mdl-js-progress': true,
			'mdl-progress__indeterminate': this.props.indeterminate
		};
		return cx(classes);
	},

	_getElement: function () {
		return React.createElement("div", null);
	},

	render: function () {
		var element = this._getElement();
		var classname = element.props.className || '';

		var newProps = {
			className: classname + ' ' + this._getClasses(),
			style: _.extend(element.props.style || {}, this.props.style),
			id: this.props.id,
		};

		return React.cloneElement(element, newProps);
	},

	_refreshProgress: function () {
		var element = ReactDOM.findDOMNode(this);
		var progress = this.props.progress;
		var buffer = this.props.buffer;

		if  (element.MaterialProgress != undefined) {
			element.MaterialProgress.setProgress(progress);
		} else {
			element.addEventListener('mdl-componentupgraded', function () {
				this.MaterialProgress.setProgress(progress);
				if (buffer > -1)
					this.MaterialProgress.setBuffer(buffer);
			});
		}

		__functions.updateComponents();
	},



	componentDidUpdate: function () {
		this._refreshProgress();
	},

	componentDidMount: function () {
		this._refreshProgress();
	}
});