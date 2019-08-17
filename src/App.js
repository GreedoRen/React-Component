import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Topic from './components/Topic/Topic';
import home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Navigation />
				<div className='App'>
					<Switch>
						<Route exact path='/' component={home} />
						<Route exact path='/main' component={Main} />
						<Route exact path='/page' component={Page} />
						<Route exact path='/topic' component={Topic} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
