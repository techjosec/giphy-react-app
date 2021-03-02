import React from 'react';
import './styles.css';
import Gif from "./Gif";

export default function ListOfGifs( { gifs } )
{
	return (
		<div className="gifs-wrapper">
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
		</div>
	);
}
