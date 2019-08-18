import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<div className='logo'>Logo</div>
				<input type='text' id='headerInput' className='headerInput' name='headerInput' placeholder='Поиск' />
			</header>
		);
	}
}

export default Header;
