import React from 'react';

const styles = {
	textDecoration : `none`,
	color          : `#fff`,
};

export default function Gif( { id, title, url } )
{
	return (
		<a style={{ ...styles }} href={`#${id}`}>
			<h4>{ title }</h4>
			<figure>
				<img alt={title} src={url} />
			</figure>
		</a>
	);
}
