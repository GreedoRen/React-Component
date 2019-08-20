import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
	render() {
		return (
			<ul className='navigation'>
				<li>
					<Link to='/'>Главная</Link>
				</li>
				<li>
					<Link to='/main'>Пункт меню</Link>
				</li>
				<li>
					<Link to='/page'>Пункт меню</Link>
				</li>
				<li>
					<Link to='/topic'>Пункт меню</Link>
				</li>
				<li>
					<Link to='/topicTwo'>Пункт меню в две строки</Link>
				</li>
				<li>
					<Link to='/topic'>Пункт меню </Link>
				</li>
			</ul>
		);
	}
}

export default Navigation;
