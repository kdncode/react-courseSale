import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSale from './components/CourseSale'

class App extends Component {
	render() {
		let courses = [
			{ name: 'Reactjs', price: 9},
			{ name: 'Vuejs', price: 19},
			{ name: 'Angular', price: 29},
			{ name: 'Emberjs', price: 39}
		];

		return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>

			<CourseSale items={courses} />
		</div>
		);
	}
}

export default App;
