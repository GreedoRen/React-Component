import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Topic from './components/Topic/Topic';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
	render() {
		return (
			<Switch>
				<Navigation />
				<Route exact path='/' component={Home} />
				<Route exact path='/main' component={Main} />
				<Route exact path='/page' component={Page} />
				<Route exact path='/topic' component={Topic} />
			</Switch>
		);
	}
}

export default App;
