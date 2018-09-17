import React, { Component } from 'react';
import './App.css';
import 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import Interest from './components/Interest';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />
					<Switch>
						<Route path="/" exact component={ About } />
						<Route path="/about" component={ About } />
						<Route path="/interest" component={ Interest } />
						<Route path="/education" component={ Education } />
						<Route path="/skill" component={ Skill } />
						<Route path="/experience" component={ Experience } />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
