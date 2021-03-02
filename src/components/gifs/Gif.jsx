import React from 'react';

const styles = {
	textDecoration : `none`,
	color          : `#fff`,
};

const sanitizeTitle = ( title ) => title.toUpperCase().split( `GIF` )[0].trim();

export default function Gif( { id, title, url } )
{
	return (
		<div>
			<a style={{ ...styles }} href={`#${id}`}>
				<h4>{ sanitizeTitle( title ) }</h4>
				<figure>
					<img loading="lazy" alt={title} src={url} />
				</figure>
			</a>
		</div>
	);
}
