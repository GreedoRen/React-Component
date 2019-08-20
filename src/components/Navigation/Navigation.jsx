import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
	render() {
		return (
			<ul className='navigation'>
				<li className='navLi'>
					<Link to='/' className='navLink'>
						Главная
					</Link>
				</li>
				<li className='navLi'>
					<Link to='/main' className='navLink'>
						Пункт меню
					</Link>
				</li>
				<li className='navLi'>
					<Link to='/page' className='navLink'>
						Пункт меню
					</Link>
				</li>
				<li className='navLi'>
					<Link to='/topic' className='navLink'>
						Пункт меню
					</Link>
				</li>
				<li className='navLi'>
					<Link to='/topicTwo' className='navLink'>
						Пункт меню в две строки
					</Link>
				</li>
				<li className='navLi'>
					<Link to='/topic' className='navLink'>
						Пункт меню{' '}
					</Link>
				</li>
			</ul>
		);
	}
}

export default Navigation;
