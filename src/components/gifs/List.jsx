import React from 'react';
import './styles.css';
import Gif from "./Gif";

export default function List( { gifs } )
{
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
