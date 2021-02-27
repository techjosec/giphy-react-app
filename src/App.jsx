import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import './App.css';

const App = () =>
{
	const [gifs, setGifs] = useState( [] );

	console.log( gifs );

	return (
		<div className="App">
			<section className="App-content">
				<h3>Another Giphy React APP!</h3>
				<Button variant="contained" color="primary">
      				Hola Mundo!
				</Button>
			</section>
		</div>
	);
};

export default App;
