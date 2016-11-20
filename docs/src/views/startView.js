import React from 'react';
import readmeFile from '../../../README.md';

export default class StartView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		    <div className="docs-view">
					<div className="docs-text" dangerouslySetInnerHTML={{__html: readmeFile}}></div>
		    </div>
    );
  }
}