import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Main />
		</div>
	);
}

export default App;
