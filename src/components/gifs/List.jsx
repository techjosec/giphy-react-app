import React, { useEffect, useState } from 'react';
import getGifs from '../../services/gifs/getGifs';
import './styles.css';

import Gif from "./Gif";

export default function List( { keyword = `random` } )
{
	const [gifs, setGifs] = useState( [] );

	useEffect( () =>
	{
		getGifs( keyword )
			.then( ( _gifs ) => setGifs( _gifs ) );
	}, [keyword] );

	return gifs.map( ( { id, title, url } ) => (
		<Gif
			key={id}
			id={id}
			title={title}
			url={url}
		/>
	) );
}
