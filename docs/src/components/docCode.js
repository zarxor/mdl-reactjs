var React = require("react");

module.exports = React.createClass({

  getDefaultProps: function() {
		return {
      language: 'jsx'
		};
	},

  render: function () {
    return  <pre className="docs-view-code">
              <h2 className="docs-view-code__title">{this.props.title}</h2>
    					<code className={"language-" + this.props.language}>
    						{this.props.children}
    					</code>
				    </pre>
  },

  componentDidMount: function() {
    Prism.highlightAll();
	}
});
