
"use strict";

var React = require('react');
var MDL = require('../../../components/');
var DOCS = require('../components');

module.exports = React.createClass({
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Menus</h1>
						<p>Lists of clickable actions.</p>
					</div>
					{/*
						Colored FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Lower left">
							<div className="mdl-shadow--2dp" style={{background: '#C2185B', height: 200, width: 200}}>
                <MDL.Button style={{color: '#FFF'}} icon="more_vert" id="docs-menu-lower-left-button" />
                <MDL.Menu htmlFor="docs-menu-lower-left-button">
                  <MDL.MenuItem>Some action</MDL.MenuItem>
                  <MDL.MenuItem>Another action</MDL.MenuItem>
                  <MDL.MenuItem disabled>Disabled action</MDL.MenuItem>
                  <MDL.MenuItem>Yet another action</MDL.MenuItem>
                </MDL.Menu>
							</div>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Lower right">
							<div className="mdl-shadow--2dp" style={{background: '#C2185B', height: 200, width: 200, position: 'relative', textAlign: 'right'}}>
                <MDL.Button style={{color: '#FFF'}} icon="more_vert" id="docs-menu-lower-right-button" />
                <MDL.Menu position="bottom-right" htmlFor="docs-menu-lower-right-button">
                  <MDL.MenuItem>Some action</MDL.MenuItem>
                  <MDL.MenuItem>Another action</MDL.MenuItem>
                  <MDL.MenuItem disabled>Disabled action</MDL.MenuItem>
                  <MDL.MenuItem>Yet another action</MDL.MenuItem>
                </MDL.Menu>
							</div>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Lower left">
						{'Comming...'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Lower right">
						{'Comming...'}
					</DOCS.DocCode>

					{/*
						Colored FAB
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Top left">
							<div className="mdl-shadow--2dp" style={{background: '#C2185B', height: 200, width: 200, position: 'relative'}}>
                <MDL.Button style={{color: '#FFF',position: 'absolute', bottom: 0, left: 0}} icon="more_vert" id="docs-menu-top-left-button" />
                <MDL.Menu position="top-left" htmlFor="docs-menu-top-left-button">
                  <MDL.MenuItem>Some action</MDL.MenuItem>
                  <MDL.MenuItem>Another action</MDL.MenuItem>
                  <MDL.MenuItem disabled>Disabled action</MDL.MenuItem>
                  <MDL.MenuItem>Yet another action</MDL.MenuItem>
                </MDL.Menu>
							</div>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Top right">
							<div className="mdl-shadow--2dp" style={{background: '#C2185B', height: 200, width: 200, position: 'relative', textAlign: 'right'}}>
                <MDL.Button style={{color: '#FFF', position: 'absolute', bottom: 0, right: 0}} icon="more_vert" id="docs-menu-top-right-button" />
                <MDL.Menu position="top-right" htmlFor="docs-menu-top-right-button">
                  <MDL.MenuItem>Some action</MDL.MenuItem>
                  <MDL.MenuItem>Another action</MDL.MenuItem>
                  <MDL.MenuItem disabled>Disabled action</MDL.MenuItem>
                  <MDL.MenuItem>Yet another action</MDL.MenuItem>
                </MDL.Menu>
							</div>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Top left">
						{'Comming...'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Top right">
						{'Comming...'}
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
