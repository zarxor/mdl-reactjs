
"use strict";

var React = require('react');
var MDL = require('../../components');
var DOCS = require('../components');

module.exports = React.createClass({
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>SLIDERS</h1>
						<p>Selecting a value out of a range.</p>
					</div>
					{/*
						Colored FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Default slider">
							<MDL.Slider min={0} max={100} defaultValue={0} />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Starting value">
							<MDL.Slider min={0} max={100} defaultValue={25} />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Default slider">
						{'<MDL.Slider min={0} max={100} defaultValue={0} />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Slider with Starting Value">
						{'<MDL.Slider min={0} max={100} defaultValue={25} />'}
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