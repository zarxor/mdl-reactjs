
"use strict";

var React = require('react');
var MDL = require('../../components');
var DOCS = require('../components');

module.exports = React.createClass({
	handleChange: function (name, e) {
    console.log('change');
  },
	handleEvent: function (e) {
    console.log(e);
  },
	render: function() {
		return (
		    <div className="docs-view">
				<div className="docs-text">
					<h1>TOGGLES</h1>
					<p>Choose between states.</p>
					<h2>Checkbox</h2>
				</div>
				{/*

					*/}
				<DOCS.DocComponents>
					<DOCS.DocComponent caption="Check on">
						<MDL.Grid>
						</MDL.Grid>
						<MDL.Toggle type="checkbox" label="Checkbox" ripple checked />
					</DOCS.DocComponent>
				</DOCS.DocComponents>

				<DOCS.DocCode title="Check on">
					{'<MDL.Toggle type="checkbox" label="Checkbox" ripple checked />'}
				</DOCS.DocCode>

				{/*

					*/}
				<DOCS.DocComponents>
					<DOCS.DocComponent caption="Radio on">
						<MDL.Toggle type="radio" label="First" name="options" ripple checked />
					</DOCS.DocComponent>
					<DOCS.DocComponent caption="Radio off">
						<MDL.Toggle type="radio" label="Second" name="options" ripple />
					</DOCS.DocComponent>
				</DOCS.DocComponents>

				<DOCS.DocCode title="Radio on">
					{'<MDL.Toggle type="radio" label="First" name="options" ripple checked />'}
				</DOCS.DocCode>
				<DOCS.DocCode title="Radio off">
					{'<MDL.Toggle type="radio" label="First" name="options" ripple />'}
				</DOCS.DocCode>

				{/*

					*/}
				<DOCS.DocComponents>
					<DOCS.DocComponent caption="Icon on">
						<MDL.Toggle type="icon-toggle" ripple checked>format_bold</MDL.Toggle>
					</DOCS.DocComponent>
					<DOCS.DocComponent caption="Icon off">
						<MDL.Toggle type="icon-toggle" ripple>format_italic</MDL.Toggle>
					</DOCS.DocComponent>
				</DOCS.DocComponents>

				<DOCS.DocCode title="Icon on">
					{'<MDL.Toggle type="icon-toggle" ripple checked>format_bold</MDL.Toggle>'}
				</DOCS.DocCode>
				<DOCS.DocCode title="Icon off">
					{'<MDL.Toggle type="icon-toggle" ripple>format_italic</MDL.Toggle>'}
				</DOCS.DocCode>

				{/*

					*/}
				<DOCS.DocComponents>
					<DOCS.DocComponent caption="Switch on">
						<MDL.Toggle type="switch" ripple checked />
					</DOCS.DocComponent>
					<DOCS.DocComponent caption="Switch off">
						<MDL.Toggle type="switch" ripple />
					</DOCS.DocComponent>
				</DOCS.DocComponents>

				<DOCS.DocCode title="Switch on">
					{'<MDL.Toggle type="switch" ripple checked />'}
				</DOCS.DocCode>
				<DOCS.DocCode title="Switch off">
					{'<MDL.Toggle type="switch" ripple />'}
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
