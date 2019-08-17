import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
	render() {
		return (
			<ul className='navigation'>
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
		);
	}
}

export default Navigation;
