import { useEffect, useState, useContext } from 'react';
import getGifs from '../../services/gifs/getGifs';
import GifsContext from '../../context/GifsContext';

export default function useGifs( keyword = `` )
{
	const [loading, setLoading] = useState( false );
	const { gifs, setGifs } = useContext( GifsContext );

	const keywordToUse = keyword || localStorage.getItem( `lastKeyword` ) || `random`;

	useEffect( () =>
	{
		setLoading( true );
		getGifs( keywordToUse )
			.then( ( _gifs ) =>
			{
				setGifs( _gifs );
				setLoading( false );
				localStorage.setItem( `lastKeyword`, keywordToUse );
			} );
	},
	[keyword, setGifs] );

	return { loading, gifs };
}
