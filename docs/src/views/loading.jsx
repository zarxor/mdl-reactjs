
"use strict";

var React = require('react');
var MDL = require('../../../components/');
var DOCS = require('../components');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      progressOne: 11,
    };
  },

  setProgressOne: function () {
    this.setState({progressOne: 44});
  },

	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Loading</h1>
						<p>Indicate loading and progress states.</p>
            			<h2>Progress bar</h2>
					</div>

					{/*
						Default
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Default">
							<MDL.Progress id="prog_1" progress={44} />
              {/*<MDL.Button style={{marginTop: 20}} raised onClick={this.setProgressOne}>Set progress to 44</MDL.Button>*/}
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Default">
						{'<MDL.Progress id="prog_1" progress={44} />'}
					</DOCS.DocCode>

					{/*
						Default
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Indeterminate">
							<MDL.Progress id="prog_2" indeterminate />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Indeterminate">
						{'<MDL.Progress id="prog_2" indeterminate />'}
					</DOCS.DocCode>

					{/*
						Default
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Buffering">
							<MDL.Progress id="prog_3" progress={33} buffer={87} />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Buffering">
						{'<MDL.Progress id="prog_3" progress={33} buffer={87} />'}
					</DOCS.DocCode>

					{/*
						Documentation text
						*/}

					<div className="docs-text--centred">
						<h2>CONFIGURATION OPTIONS</h2>
						<p>
							Down below you can find all the attributes that can be applied to the component
						</p>
						<table style={{width:"100%"}}>
							<thead>
								<tr>
									<th>Attribute</th>
									<th>Effect</th>
									<th>Values</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Attribute</td>
									<td>Effect</td>
									<td>Values</td>
								</tr>
							</tbody>
						</table>
					</div>

          {/*
            Titles
            */}

					<div className="docs-text">
            		<h2>Spinner</h2>
					</div>

					{/*
						Default
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Default">
              				<MDL.Spinner id="spinner_1" active />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Single color">
              				<MDL.Spinner id="spinner_2" active singleColor />
						</DOCS.DocComponent>
					</DOCS.DocComponents>


					<DOCS.DocCode title="Default active spinner">
						{'<MDL.Spinner id="spinner_1" active />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Active single color spinner">
						{'<MDL.Spinner id="spinner_2" active singleColor />'}
					</DOCS.DocCode>

					{/*
						Documentation text
						*/}

					<div className="docs-text--centred">
						<h2>CONFIGURATION OPTIONS</h2>
						<p>
							Down below you can find all the attributes that can be applied to the component
						</p>
						<table style={{width:"100%"}}>
							<thead>
								<tr>
									<th>Attribute</th>
									<th>Effect</th>
									<th>Values</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Attribute</td>
									<td>Effect</td>
									<td>Values</td>
								</tr>
							</tbody>
						</table>
					</div>
		    </div>
		);
	},
});
