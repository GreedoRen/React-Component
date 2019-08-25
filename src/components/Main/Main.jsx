import React, { Component } from 'react';
import './main.css';

class Main extends Component {
	state = {
		open: true
	};

	render() {
		return (
			<div>
				<h1>Main</h1>
				<div>Main text test1</div>
				<div>Dialog box 1</div>
				<div>Dialog box 1</div>
				<div>Dialog box 1</div>
				<div>Dialog box 1</div>
			</div>
		);
	}
}

export default Main;
