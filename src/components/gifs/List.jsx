import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import CircularProgress from '@material-ui/core/CircularProgress';

import getGifs from '../../services/gifs/getGifs';
import './styles.css';
import Gif from "./Gif";

export default function List( { params } )
{
	const { keyword, limit, offset } = params;
	const [gifs, setGifs] = useState( [] );
	const [loading, setLoading] = useState( false );

	console.log( { loading, gifs } );

	useEffect( () =>
	{
		setLoading( ( prevState ) => !prevState );
		getGifs( keyword, limit, offset )
			.then( ( _gifs ) =>
			{
				setGifs( _gifs );
				setLoading( ( prevState ) => !prevState );
			} );
	}, [keyword] );

	if ( loading ) return <CircularProgress />;

	if ( gifs.length === 0 && !loading )
	{
		return (
			<>
				<h4>
					{` `}
					{ `No results found for ${keyword}`}
					{` `}
				</h4>
				<Link className="go-back" href="/">Go back!</Link>
			</>
		);
	}

	return (
		<h4>
			{
				gifs.map( ( { id, title, url } ) => (
					<Gif
						key={id}
						id={id}
						title={title}
						url={url}
					/>
				) )
			}
		</h4>
	);
}
