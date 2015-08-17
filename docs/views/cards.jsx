
"use strict";

var React = require('react');
var MDL = require('../../components');
var DOCS = require('../components');

module.exports = React.createClass({
	render: function() {
		return (
		    <div className="docs-view">
					<div className="docs-text">
						<h1>Cards</h1>
						<p>Self-contained pieces of paper with data.</p>
					</div>

					{/*
						Wide
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Wide">
							<MDL.Card style={{width: 517}}>
								<MDL.CardTitle style={{
									height: 140,
									background: "url('/img/bg_1.png');",
									color: 'white',
								}}>
									Welcome
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    							Mauris sagittis pellentesque lacus eleifend lacinia...
								</MDL.CardSupportingText>
								<MDL.CardActions border={true}>
									<MDL.Button>Get started</MDL.Button>
								</MDL.CardActions>
								<MDL.CardMenu style={{color: 'white'}}>
									<MDL.Button icon="share" />
								</MDL.CardMenu>
							</MDL.Card>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Number badge on icon">
						{
							'<MDL.Card style={{width: 517}}>\n' +
							'	<MDL.CardTitle style={{\n' +
							'		height: 140,\n' +
							'		background: "url(\'/img/bg_1.png\');",\n' +
							'		color: \'white\',\n' +
							'	}}>\n' +
							'		Welcome\n' +
							'	</MDL.CardTitle>\n' +
							'	<MDL.CardSupportingText>\n' +
							'		Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
							'		Mauris sagittis pellentesque lacus eleifend lacinia...\n' +
							'	</MDL.CardSupportingText>\n' +
							'	<MDL.CardActions border={true}>\n' +
							'		<MDL.Button>Get started</MDL.Button>\n' +
							'	</MDL.CardActions>\n' +
							'	<MDL.CardMenu style={{color: \'white\'}}>\n' +
							'		<MDL.Button icon="share" />\n' +
							'	</MDL.CardMenu>\n' +
							'</MDL.Card>'
						}
					</DOCS.DocCode>

					{/*
						Square
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Square">
							<MDL.Card style={{
								height: 320,
								width: 320
							}}>
								<MDL.CardTitle style={{
									background: "url('/img/bg_1.png');",
									color: 'white',
									height: 200
								}}>
									Update
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</MDL.CardSupportingText>
								<MDL.CardActions border={true}>
									<MDL.Button>View updates</MDL.Button>
								</MDL.CardActions>
							</MDL.Card>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Number badge on icon">
						{
							'<MDL.Card style={{>\n' +
							'	height: 320,\n' +
							'	width: 320\n' +
							'}}>\n' +
							'	<MDL.CardTitle style={{\n' +
							'		background: "url(\'/img/bg_1.png\');",\n' +
							'		color: \'white\',\n' +
							'		height: 200,\n' +
							'	}}>\n' +
							'		Update\n' +
							'	</MDL.CardTitle>\n' +
							'	<MDL.CardSupportingText>\n' +
							'		Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
							'	</MDL.CardSupportingText>\n' +
							'	<MDL.CardActions border={true}>\n' +
							'		<MDL.Button>View updates</MDL.Button>\n' +
							'	</MDL.CardActions>\n' +
							'</MDL.Card>'
						}
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
