import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/main'>Main</Link>
					</li>
					<li>
						<Link to='/page'>Page</Link>
					</li>
					<li>
						<Link to='/topic'>Topic</Link>
					</li>
				</ul>
			</Router>
		);
	}
}

export default Navigation;
