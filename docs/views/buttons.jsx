
"use strict";

var React = require('react');
var MDL = require('../../components');
var DOCS = require('../components');

module.exports = React.createClass({
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Buttons</h1>
						<p>Variations on Material Design buttons.</p>
					</div>

					{/*
						Colored FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Colored FAB">
							<MDL.Button fab colored icon="add" color="blue-grey" />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="With ripple">
							<MDL.Button fab colored ripple icon="add" />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Colored FAB button">
						{'<MDL.Button fab colored icon="add" />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Colored FAB button with ripple">
						{'<MDL.Button fab colored ripple icon="add" />'}
					</DOCS.DocCode>

					{/*
						Plain FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Plain FAB">
							<MDL.Button fab icon="add" />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="With ripple">
							<MDL.Button fab ripple icon="add" />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Disabled">
							<MDL.Button fab ripple icon="add" disabled />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="FAB button">
						{'<MDL.Button fab icon="add" />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="FAB button with ripple">
						{'<MDL.Button fab ripple icon="add" />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Disabled FAB button">
						{'<MDL.Button fab ripple icon="add" disabled />'}
					</DOCS.DocCode>

					{/*
						Raised Buttons
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Raised button">
							<MDL.Button raised>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="With ripple">
							<MDL.Button raised ripple>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Disabled">
							<MDL.Button raised ripple disabled>Button</MDL.Button>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Raised button">
						{'<MDL.Button raised>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Raised button with ripple">
						{'<MDL.Button raised ripple>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Raised disabled button">
						{'<MDL.Button raised ripple disabled>Button</MDL.Button>'}
					</DOCS.DocCode>

					{/*
						Raised Buttons
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Raised button">
							<MDL.Button raised colored>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Accent color">
							<MDL.Button raised colored accent>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="With ripple">
							<MDL.Button raised colored accent ripple>Button</MDL.Button>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Colored raised button">
						{'<MDL.Button raised colored>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Accent-colored raised button">
						{'<MDL.Button raised colored accent>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Accent-colored raised button with ripple">
						{'<MDL.Button raised colored accent ripple>Button</MDL.Button>'}
					</DOCS.DocCode>

					{/*
						Flat Buttons
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Flat button">
							<MDL.Button>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="With ripple">
							<MDL.Button ripple>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Disabled">
							<MDL.Button disabled>Button</MDL.Button>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Flat button">
						{'<MDL.Button>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Flat button with ripple">
						{'<MDL.Button ripple>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Disabled flat button">
						{'<MDL.Button disabled>Button</MDL.Button>'}
					</DOCS.DocCode>

					{/*
						Flat colored Buttons
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Primary colored flat">
							<MDL.Button primary>Button</MDL.Button>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Accent colored flat">
							<MDL.Button accent>Button</MDL.Button>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Primary-colored flat button">
						{'<MDL.Button primary>Button</MDL.Button>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Accent-colored flat button">
						{'<MDL.Button accent>Button</MDL.Button>'}
					</DOCS.DocCode>

					{/*
						Icon buttons
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Icon button">
							<MDL.Button icon="mood" />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Colored">
							<MDL.Button colored icon="mood" />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Icon button">
						{'<MDL.Button icon="mood" />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Colored icon button">
						{'<MDL.Button colored icon="mood" />'}
					</DOCS.DocCode>

					{/*
						Mini fab buttons
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Mini FAB">
							<MDL.Button fab size="mini" icon="add" />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Colored">
							<MDL.Button fab size="mini" colored icon="add" />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Mini FAB button">
						{'<MDL.Button fab size="mini" icon="add" />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Colored mini FAB button">
						{'<MDL.Button fab size="mini" colored icon="add" />'}
					</DOCS.DocCode>

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
									<td>ripple</td>
									<td>Applies ripple display effect</td>
									<td>boolean</td>
								</tr>
								<tr>
									<td>fab</td>
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
