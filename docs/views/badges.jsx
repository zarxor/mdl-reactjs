
"use strict";

var React = require('react');
var MDL = require('../../components');
var DOCS = require('../components');

module.exports = React.createClass({
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Badges</h1>
						<p>Small status descriptors for UI elements.</p>
					</div>
					{/*
						Colored FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Number">
							<MDL.Badge isIcon={true} data="1">account_box</MDL.Badge>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Icon">
							<MDL.Badge isIcon={true} data="♥">account_box</MDL.Badge>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Number badge on icon">
						{'<MDL.Badge isIcon={true} data="1">account_box</MDL.Badge>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Icon badge on icon">
						{'<MDL.Badge isIcon={true} data="♥">account_box</MDL.Badge>'}
					</DOCS.DocCode>

					{/*
						Documentation text
						*/}

					<div className="docs-text--centred">
						<h2>CONFIGURATION OPTIONS</h2>
						<p>
							Down below you can find all the attributes that can be applied to the <code>&lt;button /&gt;</code> component
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
									<td>isRipple</td>
									<td>Applies ripple display effect</td>
									<td>boolean</td>
								</tr>
								<tr>
									<td>isFab</td>
									<td>Applies fab (circular) display effect</td>
									<td>boolean</td>
								</tr>
							</tbody>
						</table>
					</div>
		    </div>
		);
	},
});
