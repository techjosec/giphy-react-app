import React from 'react';
import Link from 'wouter';

const styles = {
	textDecoration : `none`,
	color          : `#fff`,
};

const sanitizeTitle = ( title ) => title.toUpperCase().split( `GIF` )[0].trim();

export default function Gif( { id, title, url } )
{
	return (
		<div>
			<Link style={{ ...styles }} href={`/gif/${id}`}>
				<h4>{ sanitizeTitle( title ) }</h4>
				<figure>
					<img loading="lazy" alt={title} src={url} />
				</figure>
			</Link>
		</div>
	);
}
