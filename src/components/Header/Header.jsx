import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<span className='logo'>Logo</span>
				<input type='text' id='headerInput' name='neaderInput' />
			</header>
		);
	}
}

export default Header;
