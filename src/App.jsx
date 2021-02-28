import React, { useEffect, useState } from 'react';
import getGifs from './services/getGifs';
import './App.css';
import Gif from './components/Gif';

const App = () =>
{
	const [gifs, setGifs] = useState( [] );

	useEffect( () =>
	{
		getGifs( `programming` )
			.then( ( _gifs ) => setGifs( _gifs ) );
	}, [] );

	return (
		<div className="App">
			<div className="App-content">
				<h1>Another Giphy React APP!</h1>

				{
					gifs && gifs.map( ( gif ) => (
						<Gif
							key={gif.id}
							id={gif.id}
							title={gif.title}
							url={gif.url}
						/>
					) )
				}

			</div>
		</div>
	);
};

export default App;
