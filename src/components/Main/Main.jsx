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
				<div onClick={() => {}}>Dialog box 1</div>
				<span>Span text</span>
			</div>
		);
	}
}

export default Main;
