import React from 'react';
import MDL from '../../../lib/';
import DOCS from '../components';

export default class LayoutView extends React.Component {
	// handleChange(name, e) {
    // 	console.log('change');
  	// }

	// handleEvent(e) {
    // 	console.log(e);
	// }

	render() {
		return (
	    <div className="docs-view">
				<div className="docs-text">
					<h1>Layout</h1>
					<p>Building blocks for constructing a page layout.</p>
					<h2>Grid</h2>
				</div>
				{/*

					*/}
				<MDL.Grid>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
					<MDL.GridCell>1</MDL.GridCell>
				</MDL.Grid>
				<MDL.Grid>
					<MDL.GridCell col={4}>4</MDL.GridCell>
					<MDL.GridCell col={4}>4</MDL.GridCell>
					<MDL.GridCell col={4}>4</MDL.GridCell>
				</MDL.Grid>
				<MDL.Grid>
					<MDL.GridCell col={6}>6</MDL.GridCell>
					<MDL.GridCell col={4}>4</MDL.GridCell>
					<MDL.GridCell col={2}>2</MDL.GridCell>
				</MDL.Grid>
				<MDL.Grid>
					<MDL.GridCell col={6} colTablet={8}>6 (8 tablet)</MDL.GridCell>
					<MDL.GridCell col={4} colTablet={6}>4 (6 tablet)</MDL.GridCell>
					<MDL.GridCell col={2} colPhone={4}>2 (4 phone)</MDL.GridCell>
				</MDL.Grid>

				<DOCS.DocCode title="Grid">
				{'	<MDL.Grid>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell>1</MDL.GridCell>'}{'\n'}
				{'	<MDL.Grid>'}{'\n'}
				{'	</MDL.Grid>'}{'\n'}
				{'		<MDL.GridCell col={4}>4</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell col={4}>4</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell col={4}>4</MDL.GridCell>'}{'\n'}
				{'	</MDL.Grid>'}{'\n'}
				{'	<MDL.Grid>'}{'\n'}
				{'		<MDL.GridCell col={6}>6</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell col={4}>4</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell col={2}>2</MDL.GridCell>'}{'\n'}
				{'	</MDL.Grid>'}{'\n'}
				{'	<MDL.Grid>'}{'\n'}
				{'		<MDL.GridCell col={6} colTablet={8}>6 (8 tablet)</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell col={4} colTablet={6}>4 (6 tablet)</MDL.GridCell>'}{'\n'}
				{'		<MDL.GridCell col={2} colPhone={4}>2 (4 phone)</MDL.GridCell>'}{'\n'}
				{'	</MDL.Grid>'}
				</DOCS.DocCode>

				{/*
					Documentation text
					*/}

				<div className="docs-text--centred">
					<h2>CONFIGURATION OPTIONS</h2>
					<p>
						Down below you can find all the attributes that can be applied to the component GridCell
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
								<td>col</td>
								<td>Sets the column size for the cell</td>
								<td>INT [1-12]</td>
							</tr>
							<tr>
								<td>colDesktop</td>
								<td>Sets the column size for the cell for desktop mode only</td>
								<td>INT [1-12]</td>
							</tr>
							<tr>
								<td>colTablet</td>
								<td>Sets the column size for the cell for tablet mode only</td>
								<td>INT [1-12]</td>
							</tr>
							<tr>
								<td>colPhone</td>
								<td>Sets the column size for the cell for phone mode only</td>
								<td>INT [1-12]</td>
							</tr>
							<tr>
								<td>hideDesktop</td>
								<td>Hides the cell when in desktop mode</td>
								<td>boolean</td>
							</tr>
							<tr>
								<td>hideTablet</td>
								<td>Hides the cell when in tablet mode</td>
								<td>boolean</td>
							</tr>
							<tr>
								<td>hidePhone</td>
								<td>Hides the cell when in phone mode</td>
								<td>boolean</td>
							</tr>
							<tr>
								<td>stretch</td>
								<td>Stretches the cell vertically to fill the parent</td>
								<td>boolean</td>
							</tr>
							<tr>
								<td>align</td>
								<td>Defines tow the cell alignes to the parent</td>
								<td>[left/right/top/bottom]</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="docs-text">
					<h2>Tabs</h2>
				</div>
				{/*

					*/}

					{/*
						Wide
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Tabs with content">
							<MDL.Tabs>
								<MDL.TabsPanel id="content-tab-1" title="ContentTab 1" style={{padding: '10px 0'}} active={true}>
									This is the content of the first tab!
								</MDL.TabsPanel>
								<MDL.TabsPanel id="content-tab-2" title="ContentTab 2" style={{padding: '10px 0'}}>
									And here you have the content of the second tab...
								</MDL.TabsPanel>
							</MDL.Tabs>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

	    </div>
		);
	}
}