import React from 'react';
import useGlobalGifs from '../../hooks/gifs/useGlobalGifs';
import ButtonLink from '../../components/common/ButtonLink';

function index( { params } )
{
	const gifs = useGlobalGifs( );
	const { title, url } = gifs.find( ( _gif ) => _gif.id === params.id );

	const styles = {
		maxWidth : `450px`,
		minWidth : `300px`,
		display  : `inline-block`,
	};
	return (
		<div style={{ ...styles }}>
			<h4>
				{` `}
				{ title }
				{` `}
			</h4>
			<figure>
				<img loading="lazy" alt={title} src={url} />
			</figure>

			<ButtonLink />
		</div>
	);
}

export default index;
