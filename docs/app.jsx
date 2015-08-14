"use strict";

var React = require('react');
var Router = require('react-router');
var MDL = require('../components');
var Link = Router.Link;

// Views
var Views = require('./views');

console.log(Views);

var App = React.createClass({
	nav: [
		{ to: "/", text: "Home", icon: "domain" },
		{ to: "/badges", text: "Badges", icon: "chat_bubble" },
		{ to: "/buttons", text: "Buttons", icon: "chevron_right" },
		{ to: "/", text: "Cards (todo)", icon: "web" },
		{ to: "/", text: "Layout (todo)", icon: "view_quilt" },
		{ to: "/", text: "Loading (todo)", icon: "replay" },
		{ to: "/", text: "Menus (todo)", icon: "format_align_justify" },
		{ to: "/", text: "Sliders (todo)", icon: "tune" },
		{ to: "/", text: "Togglers (todo)", icon: "exposure" },
		{ to: "/", text: "Tables (todo)", icon: "view_list" },
		{ to: "/", text: "Text fields (todo)", icon: "font_download" },
		{ to: "/", text: "Tooltips (todo)", icon: "beenhere" },
	],

	getNav: function () {
		return this.nav.map(function (item) {
      return (
				<Link className="mdl-navigation__link" to={item.to}>
					<MDL.Button icon={item.icon} isColored={true} isFab={true} style={{marginRight: 10}} size="mini" /> {item.text}
				</Link>
    	);
		});
	},

	render : function() {
		return (
			<MDL.Layout isFixedDrawer={true} className="docs-layout">
				<MDL.LayoutHeader>
					<MDL.LayoutHeaderRow>
						<MDL.LayoutTitle>MDL components for ReactJS</MDL.LayoutTitle>
					</MDL.LayoutHeaderRow>
				</MDL.LayoutHeader>
				<MDL.LayoutDrawer>
					<MDL.LayoutTitle>MDL-REACTJS</MDL.LayoutTitle>
					<MDL.Navigation>
						{this.getNav()}
					</MDL.Navigation>
				</MDL.LayoutDrawer>
				<MDL.LayoutContent>
					<Router.RouteHandler />
				</MDL.LayoutContent>
			</MDL.Layout>
		);
	},
});


var routes = (
	<Router.Route handler={App} >
		<Router.DefaultRoute name='start' handler={Views.Start} />
		<Router.Route name='badges' path='badges' handler={Views.Badges} />
		<Router.Route name='buttons' path='buttons' handler={Views.Buttons} />
	</Router.Route>
);

Router.create({
	routes: routes,
	location: Router.HashLocation,
}).run(function (Handler) {
	React.render(
		<div className="wrapper">
			<Handler />
		</div>,
		document.body
	);
});
