import React from 'react';
import './App.css';
import ListOfGifs from './components/gifs/List';

const App = () => (
	<div className="App">
		<section className="App-content">
			<h1>Another Giphy React APP!</h1>
			<ListOfGifs keyword="panda" />
		</section>
	</div>
);

export default App;
