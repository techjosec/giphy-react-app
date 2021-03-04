import React from 'react';
import useGlobalGifs from '../../hooks/gifs/useGlobalGifs';
import ButtonLink from '../../components/common/ButtonLink';

function index( { params } )
{
	const gifs = useGlobalGifs( );
	const { title, url } = gifs.find( ( _gif ) => _gif.id === params.id );

	return (
		<>
			<h4>
				{` `}
				{ title }
				{` `}
			</h4>
			<figure>
				<img loading="lazy" alt={title} src={url} />
			</figure>

			<ButtonLink />
		</>
	);
}

export default index;
