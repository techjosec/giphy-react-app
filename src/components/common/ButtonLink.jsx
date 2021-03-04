import React from 'react';
import { Link } from 'wouter';

const styles = {
	textDecoration  : `none`,
	color           : `#fff`,
	backgroundColor : `darkorange`,
	padding         : `.2rem`,
	borderRadius    : `5px`,
};

export default function ButtonLink( { to = `/`, title = `Home` } )
{
	return (
		<Link style={{ ...styles }} to={to}>
            Go to
			{` `}
			{title}
		</Link>
	);
}
