import React from 'react';
import { Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/gifs/List';

const App = () => (
	<div className="App">
		<section className="App-content">
			<h1>Another Giphy React APP!</h1>
			<Route path="/gifs/:keyword" component={ListOfGifs} />
		</section>
	</div>
);

export default App;
