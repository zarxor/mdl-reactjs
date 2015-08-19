
"use strict";

var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
    return {
      readme: '',
    };
  },

	componentDidMount: function() {
    $.get('README.html', function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          readme: result
        });
      }
    }.bind(this));
  },

	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text" dangerouslySetInnerHTML={{__html: this.state.readme}}></div>
		    </div>
		);
	},
});
