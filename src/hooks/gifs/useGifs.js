import { useEffect, useState, useContext } from 'react';
import getGifs from '../../services/gifs/getGifs';
import GifsContext from '../../context/GifsContext';

export default function useGifs( keyword = `` )
{
	const DEFAULT_KEYWORD = `random`;
	const [loading, setLoading] = useState( false );
	const { gifs, setGifs } = useContext( GifsContext );

	const keywordToUse = keyword || localStorage.getItem( `lastKeyword` ) || DEFAULT_KEYWORD;

	useEffect( () =>
	{
		setLoading( true );
		getGifs( keywordToUse )
			.then( ( _gifs ) =>
			{
				setGifs( _gifs );
				setLoading( false );
				localStorage.setItem( `lastKeyword`, _gifs.length > 0 ? keywordToUse : DEFAULT_KEYWORD );
			} );
	},
	[keyword, setGifs] );

	return { loading, gifs };
}
