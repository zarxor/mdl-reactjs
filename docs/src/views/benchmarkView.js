import React from 'react';
import MDL from '../../../lib/';

export default class BenchmarkView extends React.Component {
	componentWillMount() {
		this.renderStart = new Date().getTime();
	}

	componentDidMount() {
		var elapsed = new Date().getTime()-this.renderStart;
		console.log(elapsed);
  }

	render() {
		var benchMarkItems = [];
		for (var x = 0; x < 1000; x++) {
			benchMarkItems.push(<MDL.GridCell key={x}>
				<MDL.Card>
					<MDL.CardTitle>asdf</MDL.CardTitle>
					<MDL.CardActions>
						<MDL.Toggle />
						<MDL.Button>1</MDL.Button>
						<MDL.Button>2</MDL.Button>
						<MDL.Button>3</MDL.Button>
						<MDL.Button>4</MDL.Button>
						<MDL.Button>5</MDL.Button>
						<MDL.Button>6</MDL.Button>
					</MDL.CardActions>
				</MDL.Card>
			</MDL.GridCell>);
		}

		return (
			<MDL.Grid>
				{benchMarkItems}
			</MDL.Grid>
		);
	}
}
