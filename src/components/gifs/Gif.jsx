import React from 'react';
import { Link } from 'wouter';

const styles = {
	textDecoration : `none`,
	color          : `#fff`,
};

export default function Gif( { id, title, url } )
{
	return (
		<div>
			<Link to={`/gif/${id}`} style={{ ...styles }}>
				<h4>{ title }</h4>
				<figure>
					<img loading="lazy" alt={title} src={url} />
				</figure>
			</Link>
		</div>
	);
}
