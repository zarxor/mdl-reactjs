import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import _ from 'lodash';
import MDL from '../../lib';
import Views, { StartView, BadgesView, TextfieldsView, BenchmarkView } from './views';


var navRoutes = [
	{ name: "home", 		to: "/", 			text: "Home", 					icon: "domain", 				view: StartView },
	{ name: "badges", 		to: "/badges", 		text: "Badges", 				icon: "chat_bubble", 			view: BadgesView },
	{ name: "buttons", 		to: "/buttons", 	text: "Buttons", 				icon: "chevron_right", 			view: Views.ButtonsView },
	{ name: "cards", 		to: "/cards", 		text: "Cards (partial)", 		icon: "web", 					view: Views.CardsView },
	{ name: "layout", 		to: "/layout", 		text: "Layout (partial)", 		icon: "view_quilt", 			view: Views.LayoutView },
	{ name: "loading", 		to: "/loading", 	text: "Loading (partial)", 		icon: "replay", 				view: Views.LoadingView },
	{ name: "menus", 		to: "/menus", 		text: "Menus (partial)", 		icon: "format_align_justify", 	view: Views.MenusView },
	{ name: "sliders", 		to: "/sliders", 	text: "Sliders (partial)", 		icon: "tune", 					view: Views.SlidersView },
	{ name: "toggles", 		to: "/toggles", 	text: "Toggles (partial)", 		icon: "exposure", 				view: Views.TogglesView },
	{ name: "tables", 		to: "/tables", 		text: "Tables (todo)", 			icon: "view_list", 				view: Views.TablesView },
	{ name: "textfields", 	to: "/textfields", 	text: "Text fields (partial)", 	icon: "font_download", 			view: TextfieldsView },
	//{ name: "", 					to: "/", 			text: "Tooltips (todo)", 	icon: "beenhere" },

	// { name: "benchmark", 	to: "/benchmark", 			text: "Benchmark", 	icon: "beenhere", view: BenchmarkView },
];

 class App extends React.Component {
	getNav() {
		return (<MDL.Navigation id="docs-navigation">
			{navRoutes.map(function (item, i) {
				return (
					<Link className="mdl-navigation__link" to={item.to} key={i}>
						<MDL.Button icon={item.icon} colored fab style={{marginRight: 10}} size="mini" /> {item.text}
					</Link>
				);
			})}
		</MDL.Navigation>);
	}

	render() {
		return (
			<MDL.Layout isFixedDrawer={true} className="docs-layout">
				<MDL.LayoutHeader>
					<MDL.LayoutHeaderRow>
						<MDL.LayoutTitle>
							Material Design Lite components for ReactJS
						</MDL.LayoutTitle>
					</MDL.LayoutHeaderRow>
				</MDL.LayoutHeader>
				<MDL.LayoutDrawer>
					<MDL.LayoutTitle>MDL-REACTJS</MDL.LayoutTitle>
					{this.getNav()}
				</MDL.LayoutDrawer>
				<MDL.LayoutContent>
					{this.props.children}
				</MDL.LayoutContent>
			</MDL.Layout>
		);
	}
}

var routes = (<Route path="/" component={App} >
	<IndexRoute key="default" name={navRoutes[0].name} component={navRoutes[0].view} />
	{_.map(navRoutes, function (route) {
		if (route.to.length > 0) {
			return <Route key={route.name} name={route.name} path={route.to} component={route.view} />
		}
	})}
</Route>);

render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));