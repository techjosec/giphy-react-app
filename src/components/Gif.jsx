import React from 'react';

export default function Gif( { title, url } )
{
	return (
		<div>
			<h4>{ title }</h4>
			<figure>
				<img alt={title} src={url} />
			</figure>
		</div>
	);
}
