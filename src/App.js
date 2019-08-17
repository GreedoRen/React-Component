import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import './App.css';

function App() {
	return (
		<Router>
			<Navigation />
			<Route exact path='/' component={Home} />
			<Route exact path='/main' component={Main} />
			<Route exact path='/page' component={Page} />
			<Route exact path='/topic' component={Topic} />
		</Router>
	);
}

export default App;
