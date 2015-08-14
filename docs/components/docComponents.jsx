/** @jsx React.DOM */
var React = require("react");

module.exports = React.createClass({

  getDefaultProps: function() {
		return {
		};
	},

  render: function () {
    return  <div className="docs-components">
  						{this.props.children}
  					</div>
  },

  componentDidMount: function() {
		componentHandler.upgradeDom();
	}
});
