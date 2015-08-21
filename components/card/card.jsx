/** @jsx React.DOM */
var React = require("react");
var cx = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName : 'MDL.Card',

	propTypes: {
			shadow : React.PropTypes.oneOf([ 2, 3, 4, 6, 8, 16 ]),
	},

  getDefaultProps: function() {
		return {
			shadow: 2,
			useChild: false
		};
	},

  _getClasses: function() {
		var classes = {
			'mdl-card': true
		};
		classes['mdl-shadow--' + this.props.shadow + 'dp'] = true;
		return cx(classes);
	},

  _getElement: function() {
    var child = this.props.children instanceof Array
					? this.props.children[0]
					: this.props.children;

    if (this.props.useChild && child && !_.isString(child)) {
      return child;
    } else {
      return <div className={this.props.className || ''}>{this.props.children}</div>
    }
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
