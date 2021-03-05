import { useEffect, useState, useContext } from 'react';
import getGifs from '../../services/gifs/getGifs';
import GifsContext from '../../context/GifsContext';

export default function useGifs( keyword = `` )
{
	const DEFAULT_KEYWORD = `random`;
	const [loading, setLoading] = useState( false );
	const { gifs, setGifs } = useContext( GifsContext );

	const localStorageKeyword = localStorage.getItem( `lastKeyword` );
	const keywordToUse = keyword || localStorageKeyword || DEFAULT_KEYWORD;

	useEffect( () =>
	{
		if ( localStorageKeyword !== keywordToUse || gifs.length === 0 )
		{
			setLoading( true );
			getGifs( keywordToUse )
				.then( ( _gifs ) =>
				{
					setGifs( _gifs );
					setLoading( false );
					localStorage.setItem( `lastKeyword`, _gifs.length > 0 ? keywordToUse : DEFAULT_KEYWORD );
				} );
		}
	},
	[keywordToUse] );

	return { loading, gifs };
}
