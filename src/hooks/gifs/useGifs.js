import { useEffect, useState } from 'react';
import getGifs from '../../services/gifs/getGifs';

export default function useGifs( keyword, limit = 10, offset = 0 )
{
	const [loading, setLoading] = useState( false );
	const [gifs, setGifs] = useState( [] );

	useEffect( () =>
	{
		setLoading( true );
		getGifs( keyword, limit, offset ).then( ( _gifs ) =>
		{
			setGifs( _gifs );
			setLoading( false );
		} );
	},
	[keyword] );

	return { loading, gifs };
}
