
"use strict";

var React = require('react');
var MDL = require('../../../components/');
var DOCS = require('../components');

module.exports = React.createClass({
	handleEvent: function (e) {
		//console.log(e);
	},
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Tables</h1>
						<p>Choose between states.</p>
					</div>
					{/*

						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Table">
							<MDL.Table columns={[
			                  { label: 'Material', key: 'material', isNumeric: false },
			                  { label: 'Quantity', key: 'qty', isNumeric: true },
			                  { label: 'Unit price', key: 'price', isNumeric: true, prefix: "$", decimal: 2 }
			                ]} data={[
			                  { material: "Acrylic (Transparent)", qty: 25, price: 2.90, color: "blue-grey", textColor: "white" },
			                  { material: "Plywood (Birch)", qty: 50, price: 1.25 },
			                  { material: "Laminate (Gold on Blue)", qty: 10, price: 2.35 },
			                ]} selectable onChange={this.handleEvent} />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Table no header">
							<MDL.Table columns={[
			                  { label: 'Material', key: 'material', isNumeric: false },
			                  { label: 'Quantity', key: 'qty', isNumeric: true },
			                  { label: 'Unit price', key: 'price', isNumeric: true, prefix: "$", decimal: 2 }
			                ]} data={[
			                  { material: "Acrylic (Transparent)", qty: 25, price: 2.90 },
			                  { material: "Plywood (Birch)", qty: 50, price: 1.25 },
			                  { material: "Laminate (Gold on Blue)", qty: 10, price: 2.35 },
			                ]} onChange={this.handleEvent} no-head />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Table">
						{'See docs source code..'}
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
