var React = require("react");

module.exports = React.createClass({

  getDefaultProps: function() {
		return {
      caption: ''
		};
	},

  render: function () {
    return  <div className="docs-component">
  						<div className="docs-component__body">
                {this.props.children}
  						</div>
              <p className="docs-component__caption">
                {this.props.caption}
              </p>
  					</div>
  },

  componentDidMount: function() {
	}
});
