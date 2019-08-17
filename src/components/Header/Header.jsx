import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<div className='logo'>Logo</div>
				<input type='text' id='headerInput' name='neaderInput' />
			</header>
		);
	}
}

export default Header;
