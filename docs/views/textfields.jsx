
"use strict";

var React = require('react');
var MDL = require('../../components');
var DOCS = require('../components');

module.exports = React.createClass({
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>TEXT FIELDS</h1>
						<p>Textual input components.</p>
					</div>
					{/*
						
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Text">
							<MDL.Textfield label="Text..." />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Numeric">
							<MDL.Textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!" id="text_sample_2" />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Simple textfield">
						{'<MDL.Textfield label="Text..." />'}
					</DOCS.DocCode>
					<DOCS.DocCode title="Numeric textfield">
						{'<MDL.Textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!" id="text_sample_2" />'}
					</DOCS.DocCode>

					{/*
						
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Text with floating label">
							<MDL.Textfield label="Text..." floatingLabel />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Numeric with floating label">
							<MDL.Textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!" id="text_sample_2" floatingLabel />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Text with floating label">
						{'<MDL.Textfield label="Text..." floatingLabel />'}
					</DOCS.DocCode>

					<DOCS.DocCode title="Numeric with floating label">
						{'<MDL.Textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!" id="text_sample_2" floatingLabel />'}
					</DOCS.DocCode>

					{/*
						
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Multiple line">
							<MDL.Textfield label="Text..." multiline rows={3} />
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Numeric with floating label">
							<MDL.Textfield label="Expandable input" icon="search" expandable id="sample2" />
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<!-- Expandable Textfield -->
					<form action="#">
					  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
					    <label className="mdl-button mdl-js-button mdl-button--icon" for="sample6">
					      <i className="material-icons">search</i>
					    </label>
					    <div className="mdl-textfield__expandable-holder">
					      <input className="mdl-textfield__input" type="text" id="sample6" />
					      <label className="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
					    </div>
					  </div>
					</form>
					<script>componentHandler.upgradeDom();</script>

					<DOCS.DocCode title="Text with floating label">
						{'<MDL.Textfield label="Text..." floatingLabel />'}
					</DOCS.DocCode>

					<DOCS.DocCode title="Numeric with floating label">
						{'<MDL.Textfield label="Number..." pattern="-?[0-9]*(\.[0-9]+)?" error="Input is not a number!" id="text_sample_2" floatingLabel />'}
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