import React, { useContext } from 'react';
import GifsContext from '../../context/GifsContext';

function index( { params } )
{
	const { gifs } = useContext( GifsContext );
	console.log( { gifs } );

	return (
		<h4>
			{` `}
			{ params.id }
			{` `}
		</h4>
	);
}

export default index;
