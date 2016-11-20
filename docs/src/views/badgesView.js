import React from 'react';
import MDL from '../../../lib/';
import DOCS from '../components';

export default class BadgesView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Badges!</h1>
						<p>Small status descriptors for UI elements.</p>
					</div>
					{/*
						Colored FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Number">
							<MDL.Badge isIcon data="1">account_box</MDL.Badge>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Icon">
							<MDL.Badge isIcon data="♥">account_box</MDL.Badge>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Number badge on icon">
						{'<MDL.Badge isIcon data="1">account_box</MDL.Badge>'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Icon badge on icon">
						{'<MDL.Badge isIcon data="♥">account_box</MDL.Badge>'}
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
	}
}