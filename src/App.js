import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const BurgersPage = () => (
	<div>
		<h1>BURGERS Page </h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/burgers' component={BurgersPage} />
			</Switch>
		</div>
	);
}

export default App;
