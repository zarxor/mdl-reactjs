
"use strict";

var React = require('react');
var MDL = require('../../../components/');
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
									background: "url('img/bg_1.png')",
									color: 'white',
								}}>
									Welcome
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    							Mauris sagittis pellentesque lacus eleifend lacinia...
								</MDL.CardSupportingText>
								<MDL.CardActions border>
									<MDL.Button>Get started</MDL.Button>
								</MDL.CardActions>
								<MDL.CardMenu style={{color: 'white'}}>
									<MDL.Button icon="share" />
								</MDL.CardMenu>
							</MDL.Card>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Wide card">
						{
							'<MDL.Card style={{width: 517}}>\n' +
							'	<MDL.CardTitle style={{\n' +
							'		height: 140,\n' +
							'		background: "url(\'img/bg_1.png\')",\n' +
							'		color: \'white\',\n' +
							'	}}>\n' +
							'		Welcome\n' +
							'	</MDL.CardTitle>\n' +
							'	<MDL.CardSupportingText>\n' +
							'		Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
							'		Mauris sagittis pellentesque lacus eleifend lacinia...\n' +
							'	</MDL.CardSupportingText>\n' +
							'	<MDL.CardActions border>\n' +
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
									background: "url('img/bg_1.png')",
									color: 'white',
									height: 200
								}}>
									Update
								</MDL.CardTitle>
								<MDL.CardSupportingText>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</MDL.CardSupportingText>
								<MDL.CardActions border>
									<MDL.Button>View updates</MDL.Button>
								</MDL.CardActions>
							</MDL.Card>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Square card">
						{
							'<MDL.Card style={{>\n' +
							'	height: 320,\n' +
							'	width: 320\n' +
							'}}>\n' +
							'	<MDL.CardTitle style={{\n' +
							'		background: "url(\'img/bg_1.png\')",\n' +
							'		color: \'white\',\n' +
							'		height: 200,\n' +
							'	}}>\n' +
							'		Update\n' +
							'	</MDL.CardTitle>\n' +
							'	<MDL.CardSupportingText>\n' +
							'		Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
							'	</MDL.CardSupportingText>\n' +
							'	<MDL.CardActions border>\n' +
							'		<MDL.Button>View updates</MDL.Button>\n' +
							'	</MDL.CardActions>\n' +
							'</MDL.Card>'
						}
					</DOCS.DocCode>

					{/*
						Square
						*/}
					<DOCS.DocComponents>
						<DOCS.DocComponent caption="Image">
							<MDL.Card style={{
								height: 256,
								width: 256,
								background: 'url(\'img/bg_1.png\')'
							}} shadow={2}>
								<MDL.CardTitle expand />
								<MDL.CardActions border style={{
										background: 'rgba(0, 0, 0, 0.2)',
										padding: 16,
										color: '#FFF'
									}}>
									Image.jpg
								</MDL.CardActions>
							</MDL.Card>
						</DOCS.DocComponent>
						<DOCS.DocComponent caption="Event">
							<MDL.Card style={{
								height: 256,
								width: 256,
								background: '#3E4EB8',
								color: '#fff'
							}} shadow={2}>
								<MDL.CardTitle expand style={{alignItems: 'flex-start'}}>
									<h4 style={{color: '#FFF', padding: 10, margin: 0}}>
										Featured event:<br />
							      May 24, 2016<br />
							      7-11pm
									</h4>
								</MDL.CardTitle>
								<MDL.CardActions border style={{
										display: 'flex',
										boxSizing: 'border-box',
										alignItems: 'center'
									}}>
									<MDL.Button colored ripple style={{color: '#fff'}}>
										Add to calendar
									</MDL.Button>
									<MDL.LayoutSpacer />
									<MDL.Icon>event</MDL.Icon>
								</MDL.CardActions>
							</MDL.Card>
						</DOCS.DocComponent>
					</DOCS.DocComponents>

					<DOCS.DocCode title="Image card">
						{
							'See docs source code..'
						}
					</DOCS.DocCode>
					<DOCS.DocCode title="Event card">
						{
							'See docs source code..'
						}
					</DOCS.DocCode>

					{/*
						Documentation text
						*/}

					<div className="docs-text--centred">
						<h2>CONFIGURATION OPTIONS</h2>
						<p>
							Down below you can find all the attributes that can be applied to the	component
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
